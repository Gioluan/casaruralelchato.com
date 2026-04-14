import os, re, sys, time
from urllib.parse import urljoin, urlparse, unquote
import requests
from bs4 import BeautifulSoup

BASE = "https://casaruralelchato.com/"
DOMAIN = "casaruralelchato.com"
OUT_DIR = r"C:/Users/Usuario/Desktop/casa-rural-el-chato/scraped-assets"
CONTENT_FILE = os.path.join(OUT_DIR, "scraped-content.md")
os.makedirs(OUT_DIR, exist_ok=True)

HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"}

session = requests.Session()
session.headers.update(HEADERS)

visited = set()
to_visit = [BASE]
pages = []   # list of dicts: url, title, text
images = {}  # url -> bytes

def same_domain(u):
    try:
        return urlparse(u).netloc.replace("www.", "") == DOMAIN
    except Exception:
        return False

def clean_text(soup):
    for tag in soup(["script", "style", "noscript"]):
        tag.decompose()
    text = soup.get_text("\n", strip=True)
    lines = [l.strip() for l in text.splitlines()]
    lines = [l for l in lines if l]
    # collapse repeated blank
    return "\n".join(lines)

phones, emails, socials, testimonials, prices = set(), set(), set(), [], set()

PRICE_RE = re.compile(r"\b\d{1,4}\s?(?:€|EUR|euros?)\b", re.I)
PHONE_RE = re.compile(r"(?:\+?34[\s\-]?)?(?:\d{3}[\s\-]?\d{2}[\s\-]?\d{2}[\s\-]?\d{2}|\d{9})")
EMAIL_RE = re.compile(r"[\w\.\-]+@[\w\.\-]+\.\w+")

def crawl():
    while to_visit:
        url = to_visit.pop(0)
        url = url.split("#")[0].rstrip("/") + ("/" if url.endswith("/") or url == BASE.rstrip("/") else "")
        if url in visited:
            continue
        visited.add(url)
        try:
            r = session.get(url, timeout=20)
        except Exception as e:
            print(f"ERR {url}: {e}")
            continue
        if r.status_code != 200 or "text/html" not in r.headers.get("content-type", ""):
            continue
        soup = BeautifulSoup(r.text, "html.parser")
        title = soup.title.string.strip() if soup.title and soup.title.string else url
        text = clean_text(soup)
        pages.append({"url": url, "title": title, "text": text})
        print(f"PAGE {url} ({len(text)} chars)")

        # extract contact/prices
        for m in PHONE_RE.findall(text):
            if len(re.sub(r"\D","",m)) >= 9:
                phones.add(m.strip())
        for m in EMAIL_RE.findall(text):
            emails.add(m)
        for m in PRICE_RE.findall(text):
            prices.add(m)

        # links
        for a in soup.find_all("a", href=True):
            href = urljoin(url, a["href"])
            if same_domain(href) and href not in visited:
                low = href.lower()
                if any(low.endswith(ext) for ext in [".jpg",".jpeg",".png",".webp",".gif",".pdf",".zip"]):
                    if any(low.endswith(ext) for ext in [".jpg",".jpeg",".png",".webp"]):
                        images.setdefault(href, None)
                    continue
                to_visit.append(href)
            # social
            host = urlparse(href).netloc.lower()
            if any(s in host for s in ["facebook","instagram","twitter","youtube","tiktok","linkedin","whatsapp"]):
                socials.add(href)

        # images
        for img in soup.find_all("img"):
            src = img.get("src") or img.get("data-src") or img.get("data-lazy-src")
            if not src: continue
            full = urljoin(url, src)
            if any(full.lower().split("?")[0].endswith(ext) for ext in [".jpg",".jpeg",".png",".webp"]):
                images.setdefault(full, None)
            # srcset
        for tag in soup.find_all(attrs={"srcset": True}):
            for part in tag["srcset"].split(","):
                u = part.strip().split(" ")[0]
                full = urljoin(url, u)
                if any(full.lower().split("?")[0].endswith(ext) for ext in [".jpg",".jpeg",".png",".webp"]):
                    images.setdefault(full, None)

        time.sleep(0.3)

crawl()
print(f"\n{len(pages)} pages, {len(images)} image URLs")

# Download images
downloaded = 0
total_size = 0
for iurl in list(images.keys()):
    try:
        r = session.get(iurl, timeout=30)
        if r.status_code != 200: continue
        data = r.content
        if len(data) < 5120:  # skip <5KB
            continue
        name = os.path.basename(unquote(urlparse(iurl).path))
        name = re.sub(r'[<>:"|?*]', "_", name)
        path = os.path.join(OUT_DIR, name)
        # avoid collisions
        i = 1
        base, ext = os.path.splitext(path)
        while os.path.exists(path):
            path = f"{base}_{i}{ext}"
            i += 1
        with open(path, "wb") as f:
            f.write(data)
        downloaded += 1
        total_size += len(data)
    except Exception as e:
        print(f"IMG ERR {iurl}: {e}")

print(f"Downloaded {downloaded} images, {total_size/1024/1024:.2f} MB")

# Write content file
with open(CONTENT_FILE, "w", encoding="utf-8") as f:
    f.write("# Casa Rural el Chato - Scraped Content\n\n")
    f.write(f"Scraped from {BASE}\n\n")
    f.write("## URLs / Pages Found\n\n")
    for p in pages:
        f.write(f"- [{p['title']}]({p['url']})\n")
    f.write("\n## Contact Info\n\n")
    f.write(f"- Phones: {', '.join(sorted(phones)) or 'none found'}\n")
    f.write(f"- Emails: {', '.join(sorted(emails)) or 'none found'}\n")
    f.write(f"- Socials: {', '.join(sorted(socials)) or 'none found'}\n")
    f.write(f"\n## Prices Mentioned\n\n")
    for p in sorted(prices):
        f.write(f"- {p}\n")
    f.write("\n---\n\n# Page Content\n\n")
    for p in pages:
        f.write(f"## {p['title']} - {p['url']}\n\n{p['text']}\n\n---\n\n")

print(f"Wrote {CONTENT_FILE}")
print(f"Phones: {phones}")
print(f"Emails: {emails}")
print(f"Socials: {socials}")
