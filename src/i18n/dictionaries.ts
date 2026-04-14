import type { Locale } from "./config";

export type Dictionary = {
  meta: {
    siteTitle: string;
    tagline: string;
    description: string;
  };
  nav: {
    home: string;
    rooms: string;
    rates: string;
    tasting: string;
    activities: string;
    location: string;
    gallery: string;
    contact: string;
    book: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleItalic: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    body1: string;
    body2: string;
    quote: string;
    quoteAttribution: string;
  };
  house: {
    eyebrow: string;
    title: string;
    subtitle: string;
    rooms: { name: string; desc: string }[];
    lounges: { name: string; desc: string }[];
    features: { title: string; desc: string }[];
  };
  reasons: {
    eyebrow: string;
    title: string;
    subtitle: string;
    list: { title: string; desc: string }[];
  };
  tasting: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    types: { name: string; desc: string }[];
    features: { title: string; desc: string }[];
    cta: string;
  };
  activities: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; desc: string }[];
  };
  rates: {
    eyebrow: string;
    title: string;
    lead: string;
    note: string;
    table: { nights: string; total: string; perNight: string }[];
    rules: string[];
    cta: string;
  };
  location: {
    eyebrow: string;
    title: string;
    body: string;
    address: string;
    getting: { title: string; desc: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { quote: string; author: string; source: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    phone: string;
    email: string;
    addressLabel: string;
    addressValue: string;
    hours: string;
    hoursValue: string;
    bookOn: string;
  };
  footer: {
    tagline: string;
    nav: string;
    legal: string;
    privacy: string;
    terms: string;
    rights: string;
    builtWith: string;
  };
  gallery: {
    title: string;
    lead: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { q: string; a: string }[];
  };
  blogPreview: {
    eyebrow: string;
    title: string;
    lead: string;
    readMore: string;
    all: string;
  };
};

const data: Record<Locale, Dictionary> = {
  es: {
    meta: {
      siteTitle: "Casa Rural el Chato — Portell de Morella, Els Ports",
      tagline: "Casa rural con encanto en el corazón de Portell de Morella",
      description:
        "Casa rural con historia en Portell de Morella, Els Ports (Castellón). 3 habitaciones, cocina completa, catas privadas y naturaleza. Reserva directa.",
    },
    nav: {
      home: "Inicio",
      rooms: "La Casa",
      rates: "Tarifas",
      tasting: "Cata Privada",
      activities: "Qué hacer",
      location: "Cómo llegar",
      gallery: "Galería",
      contact: "Contacto",
      book: "Reservar",
    },
    hero: {
      eyebrow: "Portell de Morella · Els Ports · Castellón",
      title: "Una casa con historia",
      titleItalic: "en el corazón de Els Ports",
      subtitle:
        "Alquila la casa entera en pleno casco histórico medieval. Tres habitaciones, tres salones, catas privadas y el silencio de la montaña.",
      ctaPrimary: "Reservar estancia",
      ctaSecondary: "Descubrir la casa",
      scroll: "Desliza",
    },
    intro: {
      eyebrow: "Bienvenidos",
      title: "Un refugio donde el tiempo se detiene",
      body1:
        "Situada en pleno centro histórico de Portell de Morella, nuestra casa rural combina las comodidades modernas con el encanto de una construcción cargada de historia. Un lugar pensado para quienes buscan desconectar y vivir una experiencia auténtica en el Alt Maestrat.",
      body2:
        "Más que un lugar para dormir: un espacio para reencontrarte con los tuyos, rodeado de naturaleza, piedra y el aire puro de la montaña. Te esperamos.",
      quote: "«Un refugio lleno de historia para vivir momentos inolvidables.»",
      quoteAttribution: "— Casa Rural el Chato",
    },
    house: {
      eyebrow: "La Casa",
      title: "Espacios para respirar",
      subtitle:
        "Tres habitaciones, tres salones, cocina comedor y rincones para cada momento del día.",
      rooms: [
        { name: "Suite del Maestrazgo", desc: "La habitación principal. Amplia, luminosa y con vistas al pueblo histórico." },
        { name: "Habitación Els Ports", desc: "Acogedora y tranquila, inspirada en los paisajes de la comarca." },
        { name: "Sueños de Morella", desc: "Cálida y recogida, perfecta para descansar tras un día de ruta." },
      ],
      lounges: [
        { name: "Salita del Encuentro", desc: "Sofá cómodo y televisor para las tardes tranquilas en familia." },
        { name: "Sala del Refugio de la Carrasca", desc: "Un espacio con alma, para leer, conversar y desconectar." },
        { name: "Salón del Entretenimiento", desc: "Juegos de mesa, diana y canasta de baloncesto. Diversión asegurada." },
      ],
      features: [
        { title: "Cocina comedor", desc: "Totalmente equipada: horno, microondas, cafetera y vajilla completa." },
        { title: "Calefacción central", desc: "Confort garantizado los 365 días del año." },
        { title: "Dos baños completos", desc: "Más un baño de cortesía. Comodidad y privacidad para todos." },
        { title: "Lavadora propia", desc: "Para estancias largas sin preocupaciones." },
        { title: "Espacio al aire libre", desc: "Aire fresco, cielo estrellado y el paisaje de Els Ports." },
        { title: "Pádel cerca", desc: "Pronto podrás jugar a pádel a pocos metros de la casa." },
      ],
    },
    reasons: {
      eyebrow: "30 razones",
      title: "Por qué elegir el Chato",
      subtitle: "Una lista larga para una escapada que recordarás siempre.",
      list: [
        { title: "Ubicación privilegiada", desc: "En el corazón del casco histórico, rodeada de naturaleza." },
        { title: "Entorno tranquilo", desc: "Perfecto para desconectar del estrés diario." },
        { title: "Casa con historia", desc: "Detalles arquitectónicos tradicionales que se conservan." },
        { title: "Espacios amplios", desc: "Cómodos para grupos y familias numerosas." },
        { title: "Habitaciones acogedoras", desc: "Bien equipadas para un descanso perfecto." },
        { title: "Calefacción central", desc: "Ideal para los meses más fríos en la montaña." },
        { title: "Cocina completa", desc: "Con horno, microondas, cafetera y lo necesario." },
        { title: "Comedor amplio", desc: "Para disfrutar de comidas en grupo." },
        { title: "Sala de entretenimiento", desc: "Juegos de mesa, diana y canasta de baloncesto." },
        { title: "Espacio al aire libre", desc: "Para respirar y disfrutar del paisaje." },
        { title: "Senderismo a la puerta", desc: "Rutas que conectan con la esencia de Els Ports." },
        { title: "Caminos para BTT", desc: "Recorridos para todos los niveles." },
        { title: "Escalada cerca", desc: "Zonas de escalada en Els Ports a pocos kilómetros." },
        { title: "Patrimonio histórico", desc: "Cerca del castillo de Morella y pueblos con encanto." },
        { title: "Aire puro y vistas", desc: "Paisajes para los amantes de la fotografía." },
        { title: "Rincones para leer", desc: "Silencio, luz y descanso lejos del ruido." },
        { title: "Cultura y tradición", desc: "Ferias y eventos locales todo el año." },
        { title: "Gastronomía local", desc: "Productos y platos típicos del Alt Maestrat." },
        { title: "Ideal para familias", desc: "Espacios y actividades pensados para niños." },
        { title: "Perfecto para grupos", desc: "Espacio de sobra para amigos y familia." },
        { title: "Experiencias a medida", desc: "Catas, talleres y visitas guiadas bajo demanda." },
        { title: "Barranquismo y espeleología", desc: "Aventura para los más valientes." },
        { title: "Clima agradable", desc: "Ideal en cualquier época del año." },
        { title: "Fácil acceso y parking", desc: "Llegarás en coche y aparcarás cerca." },
        { title: "Atención personalizada", desc: "Estancias memorables, cuidadas al detalle." },
        { title: "Dos baños completos", desc: "Uno de cortesía. Para todos, sin esperas." },
        { title: "Lavadora disponible", desc: "Para estancias largas o necesidades puntuales." },
        { title: "Cata privada en casa", desc: "Vinos, cervezas y licores con 964 Tasting Shop." },
        { title: "Estancia flexible", desc: "Desde 2 noches hasta semanas completas." },
        { title: "La casa entera para ti", desc: "Sin compartir con nadie. Tu refugio privado." },
      ],
    },
    tasting: {
      eyebrow: "Experiencia exclusiva",
      title: "Catas privadas con 964 Tasting Shop",
      lead: "Transforma tu estancia en un recuerdo inolvidable.",
      body: "En Casa Rural el Chato ofrecemos una experiencia de cata privada tan educativa como divertida, de la mano de 964 Tasting Shop. Disfrútala directamente en casa: cada sesión es completamente personalizada e incluye una explicación didáctica, aperitivos locales y todo el material necesario para que saborees al máximo cada aroma.",
      types: [
        { name: "Cata de Vinos", desc: "Una selección cuidada de vinos de la tierra y de autor." },
        { name: "Cata de Cervezas", desc: "Cervezas artesanales con carácter, explicadas paso a paso." },
        { name: "Cata de Licores", desc: "Destilados artesanales con un juego gamificado y premios." },
      ],
      features: [
        { title: "Explicación didáctica", desc: "Aprende a reconocer aromas, estilos y sabores." },
        { title: "Embutidos y quesos locales", desc: "Productos de la provincia de Castellón para acompañar." },
        { title: "100% personalizada", desc: "Adaptada a tus gustos, en el salón de la casa." },
        { title: "Cata gamificada", desc: "Juegos, pruebas y premios para los ganadores." },
      ],
      cta: "Reservar cata privada",
    },
    activities: {
      eyebrow: "Qué hacer",
      title: "Els Ports te espera",
      lead: "Una comarca llena de encanto, historia y naturaleza en estado puro.",
      items: [
        { title: "Senderismo", desc: "Rutas por montañas, valles y bosques. Paisajes del Alt Maestrat que quedan grabados en la memoria." },
        { title: "BTT", desc: "Caminos y senderos para todos los niveles, desde rutas suaves hasta trayectos exigentes." },
        { title: "Escalada", desc: "Paredes de roca natural y sectores para principiantes y expertos en Els Ports." },
        { title: "Pádel", desc: "Instalaciones cercanas en un entorno único, ideal para mantenerte activo." },
        { title: "Aventura", desc: "Barranquismo, espeleología y actividades guiadas para los amantes de la adrenalina." },
        { title: "Patrimonio", desc: "Murallas medievales, el castillo de Morella y el yacimiento de En Balaguer." },
      ],
    },
    rates: {
      eyebrow: "Tarifas",
      title: "Precios transparentes, sin sorpresas",
      lead: "Se alquila la casa entera. Reserva directa sin comisiones.",
      note: "Precios por estancia completa. Puede haber un mínimo de noches o tarifas especiales en puentes y temporada alta.",
      table: [
        { nights: "2 noches (domingo a jueves)", total: "230 €", perNight: "115 €/noche" },
        { nights: "2 noches (viernes a domingo)", total: "280 €", perNight: "140 €/noche" },
        { nights: "3 noches (domingo a jueves)", total: "312 €", perNight: "104 €/noche" },
        { nights: "3 noches de finde (+1 día)", total: "360 €", perNight: "120 €/noche" },
        { nights: "4 noches (domingo a jueves)", total: "374 €", perNight: "93,50 €/noche" },
        { nights: "5 noches", total: "486 €", perNight: "97,20 €/noche" },
        { nights: "6 noches", total: "583,20 €", perNight: "97,20 €/noche" },
        { nights: "7 noches", total: "642,60 €", perNight: "91,80 €/noche" },
        { nights: "8 noches", total: "734,40 €", perNight: "91,80 €/noche" },
        { nights: "9 noches", total: "777,60 €", perNight: "86,40 €/noche" },
        { nights: "10 noches", total: "864 €", perNight: "86,40 €/noche" },
      ],
      rules: [
        "Estancia mínima de 4 noches en julio y agosto.",
        "Estancia mínima de 3 noches en puentes.",
        "Se alquila la casa entera, sin compartir.",
        "Reserva directa llamando al 964 92 10 16 o escribiendo a info@casaruralelchato.com.",
      ],
      cta: "Reservar ahora",
    },
    location: {
      eyebrow: "Cómo llegar",
      title: "En el corazón de Portell de Morella",
      body: "Portell de Morella se encuentra en la comarca de Els Ports, en el norte de Castellón. Un paisaje de páramo a gran altitud, perfecto para los amantes de la naturaleza, la historia y el silencio. La casa está en pleno casco histórico, con fácil acceso en coche y aparcamiento cerca.",
      address: "Portell de Morella, Castellón · CP 12318",
      getting: [
        { title: "En coche", desc: "A 1h15 de Castellón de la Plana y 2h15 de Valencia. Carretera montañosa con vistas." },
        { title: "Aparcamiento", desc: "Aparcamiento gratuito cerca de la casa, en pleno casco histórico." },
        { title: "Aeropuertos", desc: "Valencia (2h30), Reus (2h) y Castellón (1h30) son los más cercanos." },
      ],
    },
    testimonials: {
      eyebrow: "Lo que dicen nuestros huéspedes",
      title: "Experiencias que se recuerdan",
      items: [
        { quote: "La casa es preciosa y está muy bien ubicada. Volveremos seguro.", author: "Familia del norte", source: "Booking.com" },
        { quote: "La cata privada fue lo mejor del viaje. 100% recomendable.", author: "Grupo de amigos", source: "Airbnb" },
        { quote: "Silencio, historia y muchísima tranquilidad. Un refugio perfecto.", author: "Pareja en escapada", source: "Escapada Rural" },
      ],
    },
    contact: {
      eyebrow: "Reservas",
      title: "Escríbenos, llámanos, visítanos",
      lead: "Estaremos encantados de resolver cualquier duda y ayudarte a organizar tu estancia.",
      phone: "Teléfono",
      email: "Email",
      addressLabel: "Dirección",
      addressValue: "Portell de Morella, Castellón, CP 12318",
      hours: "Atención al cliente",
      hoursValue: "Lunes a Domingo · 9:00 – 21:00",
      bookOn: "También estamos en",
    },
    footer: {
      tagline: "Casa rural con historia en el corazón de Portell de Morella.",
      nav: "Navegación",
      legal: "Legal",
      privacy: "Privacidad",
      terms: "Términos",
      rights: "Todos los derechos reservados",
      builtWith: "Construido con cariño",
    },
    gallery: {
      title: "Galería",
      lead: "Un recorrido visual por la casa, los rincones y la vida en Portell.",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Todo lo que necesitas saber antes de reservar",
      lead: "Las dudas más habituales de quienes visitan Casa Rural el Chato y Portell de Morella.",
      items: [
        {
          q: "¿Dónde está Casa Rural el Chato?",
          a: "Casa Rural el Chato está en pleno centro histórico de Portell de Morella, en la comarca de Els Ports, al norte de la provincia de Castellón (Comunidad Valenciana, España). El código postal es 12318 y estamos a 15 km de Morella.",
        },
        {
          q: "¿Cuántas personas caben en la casa?",
          a: "Nuestra casa rural tiene 3 habitaciones, 3 salones, cocina comedor y 2 baños completos más un baño de cortesía. Se alquila la casa entera y puede alojar cómodamente hasta 6 personas.",
        },
        {
          q: "¿Cuánto cuesta una noche en Casa Rural el Chato?",
          a: "El precio depende de la duración de la estancia. 2 noches de domingo a jueves son 230 € (115 €/noche), 4 noches bajan a 93,50 €/noche y 10 noches se quedan en 86,40 €/noche. Se alquila siempre la casa entera, sin compartir con otros huéspedes.",
        },
        {
          q: "¿La casa tiene calefacción?",
          a: "Sí, la casa dispone de calefacción central en todas las habitaciones y salones, así que es perfecta para visitar Portell de Morella incluso en invierno.",
        },
        {
          q: "¿Hay aparcamiento cerca de la casa?",
          a: "Sí, hay aparcamiento gratuito en las calles próximas, dentro del propio casco histórico del pueblo. Portell es pequeño y apenas hay tráfico, así que nunca tendrás problemas para aparcar.",
        },
        {
          q: "¿Se puede reservar una cata privada durante la estancia?",
          a: "Sí. Ofrecemos catas privadas de vinos, cervezas artesanas o licores de la mano de 964 Tasting Shop, directamente en la casa. Es una de nuestras experiencias más solicitadas. Para reservar solo tienes que indicarlo al hacer la reserva de la casa.",
        },
        {
          q: "¿Cuál es la estancia mínima?",
          a: "La estancia mínima general es de 2 noches. En julio y agosto la estancia mínima sube a 4 noches, y en los puentes largos a 3 noches. Nos adaptamos dentro de lo posible a tus fechas.",
        },
        {
          q: "¿Admite mascotas?",
          a: "Consúltanos en el momento de la reserva. Valoramos cada caso de forma individual, especialmente si viajas con perros pequeños o de tamaño medio bien educados.",
        },
      ],
    },
    blogPreview: {
      eyebrow: "Diario del Chato",
      title: "Guías y recomendaciones de Els Ports",
      lead: "Rutas, patrimonio, gastronomía y escapadas. Escribimos sobre lo que conocemos: nuestra tierra.",
      readMore: "Leer artículo",
      all: "Ver todos los artículos",
    },
  },

  en: {
    meta: {
      siteTitle: "Casa Rural el Chato — Historic Rural House in Els Ports, Spain",
      tagline: "A historic rural home in the heart of Portell de Morella",
      description:
        "Historic rural house in Portell de Morella, Els Ports (Castellón, Spain). 3 bedrooms, full kitchen, private wine tastings and mountain nature. Direct booking.",
    },
    nav: {
      home: "Home",
      rooms: "The House",
      rates: "Rates",
      tasting: "Private Tasting",
      activities: "What to do",
      location: "Getting here",
      gallery: "Gallery",
      contact: "Contact",
      book: "Book",
    },
    hero: {
      eyebrow: "Portell de Morella · Els Ports · Castellón",
      title: "A house with a story",
      titleItalic: "in the heart of Els Ports",
      subtitle:
        "Rent the entire house in the medieval old town. Three bedrooms, three lounges, private tastings and the silence of the mountains.",
      ctaPrimary: "Book your stay",
      ctaSecondary: "Explore the house",
      scroll: "Scroll",
    },
    intro: {
      eyebrow: "Welcome",
      title: "A retreat where time slows down",
      body1:
        "Set in the historic heart of Portell de Morella, our rural house blends modern comforts with the charm of a building steeped in history. A place for those who want to disconnect and live an authentic experience in the Alt Maestrat.",
      body2:
        "More than a place to sleep: a space to reconnect with the people you love, surrounded by nature, stone and pure mountain air. We're waiting for you.",
      quote: "\"A retreat full of history, for moments you'll never forget.\"",
      quoteAttribution: "— Casa Rural el Chato",
    },
    house: {
      eyebrow: "The House",
      title: "Rooms to breathe in",
      subtitle:
        "Three bedrooms, three lounges, a kitchen-diner and corners for every moment of the day.",
      rooms: [
        { name: "Suite del Maestrazgo", desc: "The master bedroom. Spacious, bright and overlooking the historic village." },
        { name: "Habitación Els Ports", desc: "Cosy and quiet, inspired by the landscapes of the region." },
        { name: "Sueños de Morella", desc: "Warm and intimate, perfect for unwinding after a day on the trails." },
      ],
      lounges: [
        { name: "Salita del Encuentro", desc: "A comfortable sofa and TV for quiet family evenings." },
        { name: "Sala del Refugio de la Carrasca", desc: "A soulful space to read, talk and switch off." },
        { name: "Salón del Entretenimiento", desc: "Board games, darts and a basketball hoop. Fun guaranteed." },
      ],
      features: [
        { title: "Full kitchen-diner", desc: "Fully equipped: oven, microwave, coffee machine and everything you need." },
        { title: "Central heating", desc: "Comfort guaranteed 365 days a year." },
        { title: "Two full bathrooms", desc: "Plus a guest bathroom. Comfort and privacy for everyone." },
        { title: "Washing machine", desc: "Perfect for longer stays, worry-free." },
        { title: "Outdoor space", desc: "Fresh air, starry skies and the landscapes of Els Ports." },
        { title: "Padel nearby", desc: "Soon you'll be able to play padel just a few metres from the house." },
      ],
    },
    reasons: {
      eyebrow: "30 reasons",
      title: "Why choose el Chato",
      subtitle: "A long list for a getaway you'll remember forever.",
      list: [
        { title: "Privileged location", desc: "In the heart of the old town, surrounded by nature." },
        { title: "Quiet surroundings", desc: "Perfect for disconnecting from daily stress." },
        { title: "A house with history", desc: "Traditional architectural details preserved throughout." },
        { title: "Spacious rooms", desc: "Comfortable for groups and larger families." },
        { title: "Cosy bedrooms", desc: "Well equipped for a perfect night's rest." },
        { title: "Central heating", desc: "Ideal for the colder mountain months." },
        { title: "Full kitchen", desc: "Oven, microwave, coffee machine and the essentials." },
        { title: "Large dining room", desc: "For shared meals in a warm atmosphere." },
        { title: "Entertainment room", desc: "Board games, darts and a basketball hoop." },
        { title: "Outdoor space", desc: "Breathe in the fresh air and the landscape." },
        { title: "Hiking at the door", desc: "Trails that connect you with the essence of Els Ports." },
        { title: "Mountain biking", desc: "Routes for every level, from gentle to demanding." },
        { title: "Climbing nearby", desc: "Rock climbing sectors in Els Ports just minutes away." },
        { title: "Heritage around you", desc: "Close to Morella castle and charming villages." },
        { title: "Clean air and views", desc: "Landscapes for photography lovers." },
        { title: "Quiet corners", desc: "Silence, light and rest, far from the noise." },
        { title: "Culture and tradition", desc: "Local fairs and events all year round." },
        { title: "Local gastronomy", desc: "Typical products and dishes from the Alt Maestrat." },
        { title: "Family friendly", desc: "Spaces and activities designed for kids." },
        { title: "Perfect for groups", desc: "Plenty of room for friends and family." },
        { title: "Tailored experiences", desc: "Tastings, workshops and guided visits on request." },
        { title: "Canyoning & caving", desc: "Adventure for the brave." },
        { title: "Pleasant climate", desc: "Comfortable in any season." },
        { title: "Easy access", desc: "Drive right up to the village and park nearby." },
        { title: "Personal attention", desc: "Memorable stays, cared for to the last detail." },
        { title: "Two full bathrooms", desc: "Plus a guest bathroom. No waiting." },
        { title: "Washing machine", desc: "Ideal for longer stays and travellers." },
        { title: "Private tasting at home", desc: "Wines, beers and spirits with 964 Tasting Shop." },
        { title: "Flexible stays", desc: "From 2 nights to entire weeks." },
        { title: "The whole house is yours", desc: "No sharing. Your private retreat." },
      ],
    },
    tasting: {
      eyebrow: "Signature experience",
      title: "Private tastings with 964 Tasting Shop",
      lead: "Turn your stay into a memory you won't forget.",
      body: "At Casa Rural el Chato we offer a private tasting experience that's both educational and fun, in partnership with 964 Tasting Shop. Enjoy it right in the house: each session is fully personalised and includes a guided introduction, local appetisers and everything you need to savour every aroma.",
      types: [
        { name: "Wine Tasting", desc: "A carefully chosen selection of local and signature wines." },
        { name: "Craft Beer Tasting", desc: "Artisan beers with character, explained step by step." },
        { name: "Spirits Tasting", desc: "Artisan spirits with a gamified experience and prizes." },
      ],
      features: [
        { title: "Guided introduction", desc: "Learn to recognise aromas, styles and flavours." },
        { title: "Local cheeses & cured meats", desc: "Products from the province of Castellón to pair." },
        { title: "100% personalised", desc: "Tailored to your taste, in the comfort of the lounge." },
        { title: "Gamified tasting", desc: "Games, challenges and prizes for the winners." },
      ],
      cta: "Book a private tasting",
    },
    activities: {
      eyebrow: "What to do",
      title: "Els Ports is waiting for you",
      lead: "A region full of charm, history and pure nature.",
      items: [
        { title: "Hiking", desc: "Trails through mountains, valleys and forests. Landscapes of the Alt Maestrat that stay with you." },
        { title: "Mountain biking", desc: "Paths for every level, from gentle rides to demanding routes." },
        { title: "Rock climbing", desc: "Natural rock walls and sectors for beginners and experts in Els Ports." },
        { title: "Padel", desc: "Nearby courts in a unique setting, perfect for staying active." },
        { title: "Adventure", desc: "Canyoning, caving and guided activities for adrenaline lovers." },
        { title: "Heritage", desc: "Medieval walls, Morella castle and the En Balaguer archaeological site." },
      ],
    },
    rates: {
      eyebrow: "Rates",
      title: "Transparent pricing, no surprises",
      lead: "The whole house is yours. Direct booking with no commissions.",
      note: "Prices are for the entire house. Minimum stays and special rates may apply on long weekends and high season.",
      table: [
        { nights: "2 nights (Sun–Thu)", total: "€230", perNight: "€115/night" },
        { nights: "2 nights (Fri–Sun)", total: "€280", perNight: "€140/night" },
        { nights: "3 nights (Sun–Thu)", total: "€312", perNight: "€104/night" },
        { nights: "3 nights weekend (+1 day)", total: "€360", perNight: "€120/night" },
        { nights: "4 nights (Sun–Thu)", total: "€374", perNight: "€93.50/night" },
        { nights: "5 nights", total: "€486", perNight: "€97.20/night" },
        { nights: "6 nights", total: "€583.20", perNight: "€97.20/night" },
        { nights: "7 nights", total: "€642.60", perNight: "€91.80/night" },
        { nights: "8 nights", total: "€734.40", perNight: "€91.80/night" },
        { nights: "9 nights", total: "€777.60", perNight: "€86.40/night" },
        { nights: "10 nights", total: "€864", perNight: "€86.40/night" },
      ],
      rules: [
        "Minimum 4-night stay in July and August.",
        "Minimum 3-night stay on long weekends.",
        "The whole house is rented, no sharing.",
        "Direct booking by phone at +34 964 92 10 16 or email info@casaruralelchato.com.",
      ],
      cta: "Book now",
    },
    location: {
      eyebrow: "Getting here",
      title: "In the heart of Portell de Morella",
      body: "Portell de Morella sits in the Els Ports region, in northern Castellón. A high-altitude plateau landscape, perfect for nature lovers, history enthusiasts and those seeking silence. The house is right in the historic centre, with easy car access and parking nearby.",
      address: "Portell de Morella, Castellón · CP 12318 · Spain",
      getting: [
        { title: "By car", desc: "1h15 from Castellón de la Plana and 2h15 from Valencia. A scenic mountain drive." },
        { title: "Parking", desc: "Free parking near the house, in the historic centre." },
        { title: "Airports", desc: "Valencia (2h30), Reus (2h) and Castellón (1h30) are the closest." },
      ],
    },
    testimonials: {
      eyebrow: "What our guests say",
      title: "Stays to remember",
      items: [
        { quote: "The house is beautiful and perfectly located. We'll definitely be back.", author: "A family from the north", source: "Booking.com" },
        { quote: "The private tasting was the highlight of our trip. 100% recommended.", author: "Group of friends", source: "Airbnb" },
        { quote: "Silence, history and so much calm. A perfect retreat.", author: "Couple on a getaway", source: "Escapada Rural" },
      ],
    },
    contact: {
      eyebrow: "Bookings",
      title: "Write, call or visit us",
      lead: "We're happy to answer any questions and help you plan your stay.",
      phone: "Phone",
      email: "Email",
      addressLabel: "Address",
      addressValue: "Portell de Morella, Castellón, CP 12318, Spain",
      hours: "Customer service",
      hoursValue: "Monday to Sunday · 9:00 – 21:00",
      bookOn: "You can also find us on",
    },
    footer: {
      tagline: "A historic rural home in the heart of Portell de Morella.",
      nav: "Navigation",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      rights: "All rights reserved",
      builtWith: "Built with care",
    },
    gallery: {
      title: "Gallery",
      lead: "A visual tour of the house, its corners and life in Portell.",
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Everything you need to know before booking",
      lead: "The most common questions from guests who visit Casa Rural el Chato and Portell de Morella.",
      items: [
        {
          q: "Where is Casa Rural el Chato?",
          a: "Casa Rural el Chato is right in the historic centre of Portell de Morella, in the Els Ports region, northern Castellón (Valencian Community, Spain). Postcode 12318, just 15 km from Morella.",
        },
        {
          q: "How many people can stay in the house?",
          a: "The house has 3 bedrooms, 3 lounges, a kitchen-diner and 2 full bathrooms plus a guest toilet. The whole house is rented and comfortably sleeps up to 6 people.",
        },
        {
          q: "How much does a night at Casa Rural el Chato cost?",
          a: "Prices depend on the length of stay. 2 Sun–Thu nights are €230 (€115/night), 4 nights drop to €93.50/night and 10 nights come down to €86.40/night. The whole house is always rented as a unit, no sharing.",
        },
        {
          q: "Does the house have heating?",
          a: "Yes, the house has central heating throughout, so it's perfect to visit Portell de Morella even in winter.",
        },
        {
          q: "Is there parking near the house?",
          a: "Yes, there's free parking on the nearby streets, right in the historic centre. Portell is small and there's almost no traffic, so you'll never have trouble finding a spot.",
        },
        {
          q: "Can I book a private wine tasting during my stay?",
          a: "Yes. We offer private tastings of wines, craft beers or spirits in partnership with 964 Tasting Shop, right at the house. It's one of our most requested experiences. Just let us know when you book.",
        },
        {
          q: "What's the minimum stay?",
          a: "Minimum stay is generally 2 nights. In July and August it goes up to 4 nights, and to 3 nights on long weekends. We're flexible with your dates whenever possible.",
        },
        {
          q: "Are pets allowed?",
          a: "Please ask us when booking. We assess each case individually, especially well-behaved small or medium-sized dogs.",
        },
      ],
    },
    blogPreview: {
      eyebrow: "Diario del Chato",
      title: "Guides and recommendations from Els Ports",
      lead: "Hikes, heritage, food and getaways. We write about what we know: our home.",
      readMore: "Read article",
      all: "See all articles",
    },
  },

  ca: {
    meta: {
      siteTitle: "Casa Rural el Chato — Portell de Morella, Els Ports",
      tagline: "Casa rural amb encant al cor de Portell de Morella",
      description:
        "Casa rural amb història a Portell de Morella, Els Ports (Castelló). 3 habitacions, cuina completa, tastos privats i natura. Reserva directa.",
    },
    nav: {
      home: "Inici",
      rooms: "La Casa",
      rates: "Tarifes",
      tasting: "Tast Privat",
      activities: "Què fer",
      location: "Com arribar",
      gallery: "Galeria",
      contact: "Contacte",
      book: "Reservar",
    },
    hero: {
      eyebrow: "Portell de Morella · Els Ports · Castelló",
      title: "Una casa amb història",
      titleItalic: "al cor dels Ports",
      subtitle:
        "Lloga la casa sencera en ple casc històric medieval. Tres habitacions, tres sales, tastos privats i el silenci de la muntanya.",
      ctaPrimary: "Reservar estada",
      ctaSecondary: "Descobrir la casa",
      scroll: "Desplaça",
    },
    intro: {
      eyebrow: "Benvinguts",
      title: "Un refugi on el temps s'atura",
      body1:
        "Situada al centre històric de Portell de Morella, la nostra casa rural combina les comoditats modernes amb l'encant d'una construcció plena d'història. Un lloc pensat per desconnectar i viure una experiència autèntica a l'Alt Maestrat.",
      body2:
        "Més que un lloc per dormir: un espai per retrobar-te amb els teus, envoltat de natura, pedra i l'aire pur de la muntanya. T'esperem.",
      quote: "«Un refugi ple d'història per viure moments inoblidables.»",
      quoteAttribution: "— Casa Rural el Chato",
    },
    house: {
      eyebrow: "La Casa",
      title: "Espais per respirar",
      subtitle:
        "Tres habitacions, tres sales, cuina menjador i racons per a cada moment del dia.",
      rooms: [
        { name: "Suite del Maestrazgo", desc: "L'habitació principal. Àmplia, lluminosa i amb vistes al poble històric." },
        { name: "Habitació Els Ports", desc: "Acollidora i tranquil·la, inspirada en els paisatges de la comarca." },
        { name: "Sueños de Morella", desc: "Càlida i recollida, perfecta per descansar després d'un dia de ruta." },
      ],
      lounges: [
        { name: "Salita del Encuentro", desc: "Sofà còmode i televisor per a les tardes tranquil·les en família." },
        { name: "Sala del Refugio de la Carrasca", desc: "Un espai amb ànima, per llegir, conversar i desconnectar." },
        { name: "Salón del Entretenimiento", desc: "Jocs de taula, dard i cistella de bàsquet. Diversió assegurada." },
      ],
      features: [
        { title: "Cuina menjador", desc: "Totalment equipada: forn, microones, cafetera i vaixella completa." },
        { title: "Calefacció central", desc: "Confort garantit els 365 dies de l'any." },
        { title: "Dos banys complets", desc: "Més un bany de cortesia. Comoditat i privacitat per a tothom." },
        { title: "Rentadora pròpia", desc: "Per a estades llargues sense preocupacions." },
        { title: "Espai a l'aire lliure", desc: "Aire fresc, cel estrellat i el paisatge dels Ports." },
        { title: "Pàdel a prop", desc: "Aviat podràs jugar a pàdel a pocs metres de la casa." },
      ],
    },
    reasons: {
      eyebrow: "30 raons",
      title: "Per què triar el Chato",
      subtitle: "Una llista llarga per a una escapada que recordaràs sempre.",
      list: [
        { title: "Ubicació privilegiada", desc: "Al cor del casc històric, envoltada de natura." },
        { title: "Entorn tranquil", desc: "Perfecte per desconnectar de l'estrès diari." },
        { title: "Casa amb història", desc: "Detalls arquitectònics tradicionals que es conserven." },
        { title: "Espais amplis", desc: "Còmodes per a grups i famílies." },
        { title: "Habitacions acollidores", desc: "Ben equipades per a un descans perfecte." },
        { title: "Calefacció central", desc: "Ideal per als mesos més freds a la muntanya." },
        { title: "Cuina completa", desc: "Amb forn, microones, cafetera i el necessari." },
        { title: "Menjador ampli", desc: "Per gaudir de menjars en grup." },
        { title: "Sala d'entreteniment", desc: "Jocs de taula, dard i cistella de bàsquet." },
        { title: "Espai a l'aire lliure", desc: "Per respirar i gaudir del paisatge." },
        { title: "Senderisme a la porta", desc: "Rutes que connecten amb l'essència dels Ports." },
        { title: "Camins per a BTT", desc: "Recorreguts per a tots els nivells." },
        { title: "Escalada a prop", desc: "Zones d'escalada als Ports a pocs quilòmetres." },
        { title: "Patrimoni històric", desc: "A prop del castell de Morella i pobles amb encant." },
        { title: "Aire pur i vistes", desc: "Paisatges per als amants de la fotografia." },
        { title: "Racons per llegir", desc: "Silenci, llum i descans lluny del soroll." },
        { title: "Cultura i tradició", desc: "Fires i esdeveniments locals tot l'any." },
        { title: "Gastronomia local", desc: "Productes i plats típics de l'Alt Maestrat." },
        { title: "Ideal per a famílies", desc: "Espais i activitats pensats per als infants." },
        { title: "Perfecte per a grups", desc: "Espai de sobres per a amics i família." },
        { title: "Experiències a mida", desc: "Tastos, tallers i visites guiades sota comanda." },
        { title: "Barranquisme i espeleologia", desc: "Aventura per als més valents." },
        { title: "Clima agradable", desc: "Ideal en qualsevol època de l'any." },
        { title: "Accés fàcil i pàrquing", desc: "Hi arribaràs en cotxe i aparcaràs a prop." },
        { title: "Atenció personalitzada", desc: "Estades memorables, cuidades al detall." },
        { title: "Dos banys complets", desc: "Un de cortesia. Per a tothom, sense esperes." },
        { title: "Rentadora disponible", desc: "Per a estades llargues o necessitats puntuals." },
        { title: "Tast privat a casa", desc: "Vins, cerveses i licors amb 964 Tasting Shop." },
        { title: "Estada flexible", desc: "Des de 2 nits fins a setmanes senceres." },
        { title: "La casa sencera per a tu", desc: "Sense compartir amb ningú. El teu refugi privat." },
      ],
    },
    tasting: {
      eyebrow: "Experiència exclusiva",
      title: "Tastos privats amb 964 Tasting Shop",
      lead: "Transforma la teva estada en un record inoblidable.",
      body: "A Casa Rural el Chato oferim una experiència de tast privat tan educativa com divertida, de la mà de 964 Tasting Shop. Gaudeix-la directament a casa: cada sessió és completament personalitzada i inclou una explicació didàctica, aperitius locals i tot el material necessari per tastar al màxim cada aroma.",
      types: [
        { name: "Tast de Vins", desc: "Una selecció acurada de vins de la terra i d'autor." },
        { name: "Tast de Cerveses", desc: "Cerveses artesanes amb caràcter, explicades pas a pas." },
        { name: "Tast de Licors", desc: "Destil·lats artesans amb un joc gamificat i premis." },
      ],
      features: [
        { title: "Explicació didàctica", desc: "Aprèn a reconèixer aromes, estils i sabors." },
        { title: "Embotits i formatges locals", desc: "Productes de la província de Castelló per acompanyar." },
        { title: "100% personalitzada", desc: "Adaptada als teus gustos, a la sala de la casa." },
        { title: "Tast gamificat", desc: "Jocs, proves i premis per als guanyadors." },
      ],
      cta: "Reservar tast privat",
    },
    activities: {
      eyebrow: "Què fer",
      title: "Els Ports t'espera",
      lead: "Una comarca plena d'encant, història i natura en estat pur.",
      items: [
        { title: "Senderisme", desc: "Rutes per muntanyes, valls i boscos. Paisatges de l'Alt Maestrat que queden gravats." },
        { title: "BTT", desc: "Camins i senders per a tots els nivells, des de rutes suaus fins a trajectes exigents." },
        { title: "Escalada", desc: "Parets de roca natural i sectors per a principiants i experts als Ports." },
        { title: "Pàdel", desc: "Instal·lacions properes en un entorn únic, ideals per mantenir-te actiu." },
        { title: "Aventura", desc: "Barranquisme, espeleologia i activitats guiades per als amants de l'adrenalina." },
        { title: "Patrimoni", desc: "Muralles medievals, el castell de Morella i el jaciment d'En Balaguer." },
      ],
    },
    rates: {
      eyebrow: "Tarifes",
      title: "Preus transparents, sense sorpreses",
      lead: "Es lloga la casa sencera. Reserva directa sense comissions.",
      note: "Preus per estada completa. Hi pot haver un mínim de nits o tarifes especials en ponts i temporada alta.",
      table: [
        { nights: "2 nits (diumenge a dijous)", total: "230 €", perNight: "115 €/nit" },
        { nights: "2 nits (divendres a diumenge)", total: "280 €", perNight: "140 €/nit" },
        { nights: "3 nits (diumenge a dijous)", total: "312 €", perNight: "104 €/nit" },
        { nights: "3 nits de cap de setmana (+1 dia)", total: "360 €", perNight: "120 €/nit" },
        { nights: "4 nits (diumenge a dijous)", total: "374 €", perNight: "93,50 €/nit" },
        { nights: "5 nits", total: "486 €", perNight: "97,20 €/nit" },
        { nights: "6 nits", total: "583,20 €", perNight: "97,20 €/nit" },
        { nights: "7 nits", total: "642,60 €", perNight: "91,80 €/nit" },
        { nights: "8 nits", total: "734,40 €", perNight: "91,80 €/nit" },
        { nights: "9 nits", total: "777,60 €", perNight: "86,40 €/nit" },
        { nights: "10 nits", total: "864 €", perNight: "86,40 €/nit" },
      ],
      rules: [
        "Estada mínima de 4 nits al juliol i agost.",
        "Estada mínima de 3 nits en ponts.",
        "Es lloga la casa sencera, sense compartir.",
        "Reserva directa trucant al 964 92 10 16 o escrivint a info@casaruralelchato.com.",
      ],
      cta: "Reservar ara",
    },
    location: {
      eyebrow: "Com arribar",
      title: "Al cor de Portell de Morella",
      body: "Portell de Morella es troba a la comarca dels Ports, al nord de Castelló. Un paisatge de pàramo a gran altitud, perfecte per als amants de la natura, la història i el silenci. La casa és al centre històric, amb fàcil accés en cotxe i aparcament a prop.",
      address: "Portell de Morella, Castelló · CP 12318",
      getting: [
        { title: "En cotxe", desc: "A 1h15 de Castelló de la Plana i 2h15 de València. Carretera de muntanya amb vistes." },
        { title: "Aparcament", desc: "Aparcament gratuït a prop de la casa, al casc històric." },
        { title: "Aeroports", desc: "València (2h30), Reus (2h) i Castelló (1h30) són els més propers." },
      ],
    },
    testimonials: {
      eyebrow: "Què diuen els nostres hostes",
      title: "Estades per recordar",
      items: [
        { quote: "La casa és preciosa i està molt ben ubicada. Tornarem segur.", author: "Família del nord", source: "Booking.com" },
        { quote: "El tast privat va ser el millor del viatge. 100% recomanable.", author: "Grup d'amics", source: "Airbnb" },
        { quote: "Silenci, història i molta tranquil·litat. Un refugi perfecte.", author: "Parella d'escapada", source: "Escapada Rural" },
      ],
    },
    contact: {
      eyebrow: "Reserves",
      title: "Escriu-nos, truca'ns, visita'ns",
      lead: "Estarem encantats de resoldre qualsevol dubte i ajudar-te a organitzar l'estada.",
      phone: "Telèfon",
      email: "Correu",
      addressLabel: "Adreça",
      addressValue: "Portell de Morella, Castelló, CP 12318",
      hours: "Atenció al client",
      hoursValue: "De dilluns a diumenge · 9:00 – 21:00",
      bookOn: "També ens pots trobar a",
    },
    footer: {
      tagline: "Casa rural amb història al cor de Portell de Morella.",
      nav: "Navegació",
      legal: "Legal",
      privacy: "Privacitat",
      terms: "Termes",
      rights: "Tots els drets reservats",
      builtWith: "Fet amb cura",
    },
    gallery: {
      title: "Galeria",
      lead: "Un recorregut visual per la casa, els racons i la vida a Portell.",
    },
    faq: {
      eyebrow: "Preguntes freqüents",
      title: "Tot el que has de saber abans de reservar",
      lead: "Els dubtes més habituals de qui visita Casa Rural el Chato i Portell de Morella.",
      items: [
        {
          q: "On es troba Casa Rural el Chato?",
          a: "Casa Rural el Chato és al centre històric de Portell de Morella, a la comarca dels Ports, al nord de la província de Castelló (Comunitat Valenciana). Codi postal 12318, a 15 km de Morella.",
        },
        {
          q: "Quantes persones hi caben?",
          a: "La casa té 3 habitacions, 3 sales, cuina menjador i 2 banys complets més un de cortesia. Es lloga la casa sencera i pot allotjar fins a 6 persones còmodament.",
        },
        {
          q: "Quant costa una nit a Casa Rural el Chato?",
          a: "Depèn de la durada. 2 nits de diumenge a dijous són 230 € (115 €/nit), 4 nits baixen a 93,50 €/nit i 10 nits es queden en 86,40 €/nit. Sempre es lloga la casa sencera.",
        },
        {
          q: "La casa té calefacció?",
          a: "Sí, la casa té calefacció central a totes les habitacions i sales, així que és perfecta per visitar Portell de Morella també a l'hivern.",
        },
        {
          q: "Hi ha aparcament a prop?",
          a: "Sí, hi ha aparcament gratuït als carrers propers, dins del casc històric. Portell és un poble petit i no tindràs mai problemes per aparcar.",
        },
        {
          q: "Es pot reservar un tast privat durant l'estada?",
          a: "Sí. Oferim tastos privats de vins, cerveses artesanes o licors de la mà de 964 Tasting Shop, directament a casa. És una de les experiències més demanades. Només cal indicar-ho en fer la reserva.",
        },
        {
          q: "Quina és l'estada mínima?",
          a: "L'estada mínima general és de 2 nits. Al juliol i agost puja a 4 nits, i als ponts llargs a 3 nits. Intentem adaptar-nos a les teves dates sempre que podem.",
        },
        {
          q: "S'admeten mascotes?",
          a: "Consulta'ns en el moment de la reserva. Valorem cada cas de forma individual, sobretot si viatges amb gossos petits o mitjans ben educats.",
        },
      ],
    },
    blogPreview: {
      eyebrow: "Diario del Chato",
      title: "Guies i recomanacions dels Ports",
      lead: "Rutes, patrimoni, gastronomia i escapades. Escrivim sobre el que coneixem: la nostra terra.",
      readMore: "Llegir article",
      all: "Veure tots els articles",
    },
  },

  fr: {
    meta: {
      siteTitle: "Casa Rural el Chato — Gîte de charme à Portell de Morella",
      tagline: "Une maison rurale de caractère au cœur de Portell de Morella",
      description:
        "Maison rurale historique à Portell de Morella, Els Ports (Castellón, Espagne). 3 chambres, cuisine complète, dégustations privées et nature. Réservation directe.",
    },
    nav: {
      home: "Accueil",
      rooms: "La Maison",
      rates: "Tarifs",
      tasting: "Dégustation",
      activities: "Que faire",
      location: "Accès",
      gallery: "Galerie",
      contact: "Contact",
      book: "Réserver",
    },
    hero: {
      eyebrow: "Portell de Morella · Els Ports · Castellón",
      title: "Une maison chargée d'histoire",
      titleItalic: "au cœur d'Els Ports",
      subtitle:
        "Louez la maison entière dans le centre médiéval. Trois chambres, trois salons, dégustations privées et le silence de la montagne.",
      ctaPrimary: "Réserver votre séjour",
      ctaSecondary: "Découvrir la maison",
      scroll: "Faites défiler",
    },
    intro: {
      eyebrow: "Bienvenue",
      title: "Un refuge où le temps s'arrête",
      body1:
        "Située en plein centre historique de Portell de Morella, notre maison rurale allie le confort moderne au charme d'un bâtiment chargé d'histoire. Un lieu pensé pour celles et ceux qui cherchent à déconnecter et à vivre une expérience authentique dans l'Alt Maestrat.",
      body2:
        "Bien plus qu'un lieu où dormir : un espace pour se retrouver, entouré de nature, de pierre et de l'air pur de la montagne. Nous vous attendons.",
      quote: "« Un refuge plein d'histoire, pour des moments inoubliables. »",
      quoteAttribution: "— Casa Rural el Chato",
    },
    house: {
      eyebrow: "La Maison",
      title: "Des espaces pour respirer",
      subtitle:
        "Trois chambres, trois salons, une cuisine salle à manger et des recoins pour chaque moment de la journée.",
      rooms: [
        { name: "Suite del Maestrazgo", desc: "La chambre principale. Spacieuse, lumineuse et donnant sur le village historique." },
        { name: "Habitación Els Ports", desc: "Chaleureuse et calme, inspirée des paysages de la région." },
        { name: "Sueños de Morella", desc: "Intime et douce, parfaite pour se reposer après une journée de balade." },
      ],
      lounges: [
        { name: "Salita del Encuentro", desc: "Un canapé confortable et une télé pour les soirées tranquilles en famille." },
        { name: "Sala del Refugio de la Carrasca", desc: "Un espace avec une âme, pour lire, discuter et déconnecter." },
        { name: "Salón del Entretenimiento", desc: "Jeux de société, fléchettes et panier de basket. Bonne humeur garantie." },
      ],
      features: [
        { title: "Cuisine salle à manger", desc: "Entièrement équipée : four, micro-ondes, cafetière et vaisselle complète." },
        { title: "Chauffage central", desc: "Le confort, garanti toute l'année." },
        { title: "Deux salles de bain complètes", desc: "Plus des toilettes d'invités. Confort et intimité pour tous." },
        { title: "Lave-linge", desc: "Parfait pour les longs séjours, sans souci." },
        { title: "Espace extérieur", desc: "Air pur, ciel étoilé et paysages d'Els Ports." },
        { title: "Padel à proximité", desc: "Bientôt, vous pourrez jouer au padel à quelques mètres de la maison." },
      ],
    },
    reasons: {
      eyebrow: "30 raisons",
      title: "Pourquoi choisir el Chato",
      subtitle: "Une longue liste pour une escapade dont vous vous souviendrez.",
      list: [
        { title: "Emplacement privilégié", desc: "Au cœur du centre historique, entouré de nature." },
        { title: "Environnement calme", desc: "Parfait pour échapper au stress du quotidien." },
        { title: "Maison d'histoire", desc: "Détails architecturaux traditionnels préservés." },
        { title: "Grands volumes", desc: "Confortables pour les groupes et les familles." },
        { title: "Chambres chaleureuses", desc: "Bien équipées pour un repos parfait." },
        { title: "Chauffage central", desc: "Idéal pour les mois les plus froids en montagne." },
        { title: "Cuisine équipée", desc: "Four, micro-ondes, cafetière et l'essentiel." },
        { title: "Grande salle à manger", desc: "Pour partager de bons repas en groupe." },
        { title: "Salle de jeux", desc: "Jeux de société, fléchettes et panier de basket." },
        { title: "Espace extérieur", desc: "Pour respirer et profiter du paysage." },
        { title: "Randonnée à la porte", desc: "Sentiers qui plongent au cœur d'Els Ports." },
        { title: "VTT", desc: "Itinéraires pour tous les niveaux." },
        { title: "Escalade à proximité", desc: "Sites d'escalade à quelques kilomètres." },
        { title: "Patrimoine à portée", desc: "Près du château de Morella et de villages de caractère." },
        { title: "Air pur et panoramas", desc: "Des paysages pour les amoureux de la photo." },
        { title: "Coins pour lire", desc: "Silence, lumière et repos, loin du bruit." },
        { title: "Culture et traditions", desc: "Fêtes et événements locaux toute l'année." },
        { title: "Gastronomie locale", desc: "Produits et plats typiques de l'Alt Maestrat." },
        { title: "Idéal en famille", desc: "Espaces et activités pensés pour les enfants." },
        { title: "Parfait en groupe", desc: "De la place pour amis et famille." },
        { title: "Expériences sur mesure", desc: "Dégustations, ateliers et visites guidées sur demande." },
        { title: "Canyoning et spéléologie", desc: "L'aventure pour les plus audacieux." },
        { title: "Climat agréable", desc: "Confortable en toute saison." },
        { title: "Accès facile", desc: "Arrivée en voiture et stationnement à proximité." },
        { title: "Attention personnalisée", desc: "Des séjours soignés dans les moindres détails." },
        { title: "Deux salles de bain", desc: "Plus toilettes d'invités. Sans attendre." },
        { title: "Lave-linge", desc: "Pour les longs séjours et les imprévus." },
        { title: "Dégustation privée", desc: "Vins, bières et spiritueux avec 964 Tasting Shop." },
        { title: "Séjours flexibles", desc: "De 2 nuits à plusieurs semaines." },
        { title: "Toute la maison pour vous", desc: "Sans partage. Votre refuge privé." },
      ],
    },
    tasting: {
      eyebrow: "Expérience signature",
      title: "Dégustations privées avec 964 Tasting Shop",
      lead: "Transformez votre séjour en un souvenir inoubliable.",
      body: "À la Casa Rural el Chato, nous proposons une expérience de dégustation privée à la fois éducative et ludique, en partenariat avec 964 Tasting Shop. Profitez-en directement dans la maison : chaque session est entièrement personnalisée et comprend une introduction, des apéritifs locaux et tout le nécessaire pour savourer chaque arôme.",
      types: [
        { name: "Dégustation de Vins", desc: "Une sélection soignée de vins du terroir et d'auteur." },
        { name: "Bières Artisanales", desc: "Des bières artisanales pleines de caractère, expliquées pas à pas." },
        { name: "Spiritueux", desc: "Spiritueux artisanaux avec une expérience ludique et des prix." },
      ],
      features: [
        { title: "Introduction guidée", desc: "Apprenez à reconnaître les arômes, les styles et les saveurs." },
        { title: "Charcuterie & fromages locaux", desc: "Produits de la province de Castellón pour accompagner." },
        { title: "100 % personnalisée", desc: "Adaptée à vos goûts, dans le salon de la maison." },
        { title: "Dégustation ludique", desc: "Jeux, épreuves et prix pour les gagnants." },
      ],
      cta: "Réserver une dégustation",
    },
    activities: {
      eyebrow: "Que faire",
      title: "Els Ports vous attend",
      lead: "Une région pleine de charme, d'histoire et de nature à l'état pur.",
      items: [
        { title: "Randonnée", desc: "Sentiers à travers montagnes, vallées et forêts. Les paysages de l'Alt Maestrat vous marqueront." },
        { title: "VTT", desc: "Pistes pour tous les niveaux, des balades douces aux itinéraires exigeants." },
        { title: "Escalade", desc: "Parois naturelles et secteurs pour débutants et confirmés à Els Ports." },
        { title: "Padel", desc: "Terrains à proximité dans un cadre unique, idéal pour rester actif." },
        { title: "Aventure", desc: "Canyoning, spéléologie et activités guidées pour les amateurs de sensations." },
        { title: "Patrimoine", desc: "Remparts médiévaux, château de Morella et site archéologique d'En Balaguer." },
      ],
    },
    rates: {
      eyebrow: "Tarifs",
      title: "Des prix transparents, sans surprise",
      lead: "La maison entière pour vous. Réservation directe, sans commission.",
      note: "Prix pour la maison entière. Séjours minimums et tarifs spéciaux possibles en haute saison et ponts.",
      table: [
        { nights: "2 nuits (dim.–jeu.)", total: "230 €", perNight: "115 €/nuit" },
        { nights: "2 nuits (ven.–dim.)", total: "280 €", perNight: "140 €/nuit" },
        { nights: "3 nuits (dim.–jeu.)", total: "312 €", perNight: "104 €/nuit" },
        { nights: "3 nuits week-end (+1 jour)", total: "360 €", perNight: "120 €/nuit" },
        { nights: "4 nuits (dim.–jeu.)", total: "374 €", perNight: "93,50 €/nuit" },
        { nights: "5 nuits", total: "486 €", perNight: "97,20 €/nuit" },
        { nights: "6 nuits", total: "583,20 €", perNight: "97,20 €/nuit" },
        { nights: "7 nuits", total: "642,60 €", perNight: "91,80 €/nuit" },
        { nights: "8 nuits", total: "734,40 €", perNight: "91,80 €/nuit" },
        { nights: "9 nuits", total: "777,60 €", perNight: "86,40 €/nuit" },
        { nights: "10 nuits", total: "864 €", perNight: "86,40 €/nuit" },
      ],
      rules: [
        "Séjour minimum de 4 nuits en juillet et août.",
        "Séjour minimum de 3 nuits lors des ponts.",
        "La maison entière est louée, sans partage.",
        "Réservation directe au +34 964 92 10 16 ou info@casaruralelchato.com.",
      ],
      cta: "Réserver",
    },
    location: {
      eyebrow: "Accès",
      title: "Au cœur de Portell de Morella",
      body: "Portell de Morella se trouve dans la comarque d'Els Ports, au nord de Castellón. Un paysage de haut plateau, idéal pour les amoureux de la nature, de l'histoire et du silence. La maison est en plein centre historique, avec un accès facile en voiture et un parking à proximité.",
      address: "Portell de Morella, Castellón · CP 12318 · Espagne",
      getting: [
        { title: "En voiture", desc: "1h15 de Castellón de la Plana et 2h15 de Valence. Une route de montagne spectaculaire." },
        { title: "Stationnement", desc: "Parking gratuit près de la maison, dans le centre historique." },
        { title: "Aéroports", desc: "Valence (2h30), Reus (2h) et Castellón (1h30) sont les plus proches." },
      ],
    },
    testimonials: {
      eyebrow: "Ce que disent nos hôtes",
      title: "Des séjours qui marquent",
      items: [
        { quote: "La maison est magnifique et parfaitement située. On reviendra, c'est sûr.", author: "Une famille du nord", source: "Booking.com" },
        { quote: "La dégustation privée a été le point fort du voyage. 100% recommandé.", author: "Groupe d'amis", source: "Airbnb" },
        { quote: "Silence, histoire et beaucoup de calme. Un refuge parfait.", author: "Couple en escapade", source: "Escapada Rural" },
      ],
    },
    contact: {
      eyebrow: "Réservations",
      title: "Écrivez, appelez, venez nous voir",
      lead: "Nous sommes heureux de répondre à vos questions et de vous aider à préparer votre séjour.",
      phone: "Téléphone",
      email: "Email",
      addressLabel: "Adresse",
      addressValue: "Portell de Morella, Castellón, CP 12318, Espagne",
      hours: "Service client",
      hoursValue: "Lundi au dimanche · 9h – 21h",
      bookOn: "Vous pouvez aussi nous trouver sur",
    },
    footer: {
      tagline: "Une maison rurale historique au cœur de Portell de Morella.",
      nav: "Navigation",
      legal: "Légal",
      privacy: "Confidentialité",
      terms: "Conditions",
      rights: "Tous droits réservés",
      builtWith: "Fait avec soin",
    },
    gallery: {
      title: "Galerie",
      lead: "Une visite visuelle de la maison, de ses recoins et de la vie à Portell.",
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Tout ce qu'il faut savoir avant de réserver",
      lead: "Les questions les plus fréquentes des hôtes qui visitent Casa Rural el Chato et Portell de Morella.",
      items: [
        {
          q: "Où se trouve Casa Rural el Chato ?",
          a: "Casa Rural el Chato est en plein centre historique de Portell de Morella, dans la comarque d'Els Ports, au nord de la province de Castellón (Communauté valencienne, Espagne). Code postal 12318, à 15 km de Morella.",
        },
        {
          q: "Combien de personnes peuvent y dormir ?",
          a: "La maison dispose de 3 chambres, 3 salons, une cuisine salle à manger et 2 salles de bain complètes plus des toilettes d'invités. Elle se loue entière et peut accueillir jusqu'à 6 personnes.",
        },
        {
          q: "Combien coûte une nuit à Casa Rural el Chato ?",
          a: "Le prix dépend de la durée du séjour. 2 nuits du dimanche au jeudi : 230 € (115 €/nuit), 4 nuits : 93,50 €/nuit, 10 nuits : 86,40 €/nuit. La maison entière est toujours louée comme un tout.",
        },
        {
          q: "La maison est-elle chauffée ?",
          a: "Oui, la maison dispose d'un chauffage central dans toutes les pièces. Elle est parfaite pour visiter Portell de Morella même en hiver.",
        },
        {
          q: "Y a-t-il un parking à proximité ?",
          a: "Oui, vous pouvez vous garer gratuitement dans les rues voisines, au sein du centre historique. Portell est un petit village et vous ne rencontrerez jamais de difficulté pour stationner.",
        },
        {
          q: "Peut-on réserver une dégustation privée pendant le séjour ?",
          a: "Oui. Nous proposons des dégustations privées de vins, bières artisanales ou spiritueux en partenariat avec 964 Tasting Shop, directement dans la maison. C'est l'une des expériences les plus demandées. Indiquez-le-nous lors de votre réservation.",
        },
        {
          q: "Quel est le séjour minimum ?",
          a: "Le séjour minimum est généralement de 2 nuits. En juillet et août il passe à 4 nuits, et à 3 nuits lors des longs week-ends. Nous sommes flexibles quand nous le pouvons.",
        },
        {
          q: "Les animaux sont-ils acceptés ?",
          a: "Merci de nous consulter au moment de la réservation. Nous évaluons chaque cas, particulièrement pour les petits et moyens chiens bien éduqués.",
        },
      ],
    },
    blogPreview: {
      eyebrow: "Diario del Chato",
      title: "Guides et recommandations d'Els Ports",
      lead: "Randonnées, patrimoine, gastronomie et escapades. Nous écrivons sur ce que nous connaissons : notre terre.",
      readMore: "Lire l'article",
      all: "Voir tous les articles",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return data[locale];
}
