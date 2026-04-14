export type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type BlogFAQ = {
  q: string;
  a: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  heroImage: string;
  heroAlt: string;
  intro: string;
  sections: BlogSection[];
  faq?: BlogFAQ[];
  related?: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  // =============================================================
  {
    slug: "que-hacer-portell-de-morella",
    title: "Qué hacer en Portell de Morella: guía completa del pueblo medieval de Els Ports",
    description:
      "Descubre todo lo que puedes hacer en Portell de Morella, uno de los pueblos más bonitos de Els Ports (Castellón). Patrimonio, senderismo, gastronomía y planes con niños en esta guía completa.",
    date: "2026-01-12",
    readingTime: "9 min",
    tags: ["Portell de Morella", "Els Ports", "Qué hacer", "Castellón"],
    heroImage: "/images/photo-14.jpg",
    heroAlt: "Iglesia de Portell de Morella con el cartel del pueblo en primer plano",
    intro:
      "Portell de Morella es uno de esos pueblos de los que te enamoras nada más cruzar sus puertas. Escondido en la comarca de Els Ports, al norte de la provincia de Castellón, este rincón del Alt Maestrat conserva todo el encanto medieval que otros pueblos han perdido. En esta guía completa encontrarás todo lo que puedes hacer en Portell de Morella en un fin de semana, una semana o una escapada de varios días: patrimonio histórico, rutas de senderismo, gastronomía local y planes para ir con niños o en pareja.",
    sections: [
      {
        heading: "¿Dónde está Portell de Morella y cómo llegar?",
        paragraphs: [
          "Portell de Morella se sitúa en el norte de la provincia de Castellón, dentro de la comarca de Els Ports, una de las zonas más montañosas y auténticas de la Comunidad Valenciana. El pueblo queda a unos 15 kilómetros de Morella, a 1h15 en coche desde Castellón de la Plana y a poco más de dos horas desde Valencia. Está a más de mil metros de altitud, lo que explica su clima fresco incluso en pleno verano y su paisaje de páramo salpicado de masías y caminos antiguos.",
          "Para llegar en coche se toma la CV-14 o la N-232, dependiendo de si vienes desde la costa o desde el interior. Aunque las carreteras son de montaña, el trayecto es una pequeña experiencia en sí misma: cada curva descubre una panorámica distinta, con la sierra del Maestrat, los campos en terrazas y los pueblos colgados de lo alto. Hay aparcamiento gratuito en el propio casco histórico, justo al lado de nuestra casa rural.",
        ],
      },
      {
        heading: "Paseo por el casco medieval: lo imprescindible",
        paragraphs: [
          "Lo primero que hay que hacer en Portell de Morella es, simplemente, caminar. Su casco histórico se recorre en menos de una hora, pero cada esquina merece una parada. Las calles conservan el trazado medieval, con arcos de piedra, escalones gastados por los siglos y portales que datan del siglo XV y XVI. La iglesia parroquial, con su torre campanario de sillería y su portada barroca, preside la plaza mayor y es uno de los lugares más fotografiados del pueblo.",
          "El recinto amurallado es otro de los elementos más singulares. A través de una audioguía gratuita con cinco paradas, puedes recorrer las murallas medievales y comprender cómo vivía el Portell del siglo XIV, cuando esta zona era frontera entre reinos y cada puerta tenía su propia función defensiva. Es un paseo ligero, apto para todas las edades, y perfecto para empezar a conocer la historia del lugar.",
          "No te pierdas la Casa de la Villa, las fuentes antiguas, los lavaderos tradicionales y los detalles en hierro forjado de los balcones. Un paseo tranquilo al atardecer por el casco antiguo es probablemente la mejor introducción al alma de Portell.",
        ],
      },
      {
        heading: "Senderismo en Els Ports: rutas desde el propio pueblo",
        paragraphs: [
          "Si has venido buscando naturaleza, Portell de Morella es un punto de partida inmejorable. Varias rutas oficiales del GR-331 (Els Ports) pasan literalmente por el pueblo, y desde la puerta de tu alojamiento puedes conectar con senderos señalizados para todos los niveles.",
          "La ruta más popular es el Sender Les Albarades – Casas de San Juan (SL-CV 133), un recorrido circular de dificultad media que combina bosque de pino laricio, masías abandonadas, tramos por antiguos caminos de herradura y vistas impresionantes al Maestrazgo. En primavera, con los almendros en flor, el paisaje es de los que se recuerdan durante años.",
          "Otra opción muy recomendable es acercarse al Paraje Natural Municipal de la Rambla Celumbres, un enclave compartido con Cinctorres y Castellfort donde el barranco esconde pozas naturales, formaciones calizas y una tranquilidad absoluta. En verano es el lugar perfecto para combinar senderismo y baño.",
        ],
      },
      {
        heading: "Patrimonio y cultura en los alrededores",
        paragraphs: [
          "A pocos kilómetros de Portell encontrarás algunos de los pueblos más bonitos de España. Morella, con su imponente castillo coronando el casco medieval, es visita obligada: se puede subir a pie hasta lo alto, pasear por la judería, visitar el convento de San Francisco y comer en alguno de sus restaurantes tradicionales. Dedícale al menos medio día.",
          "Cinctorres es otra parada imprescindible, especialmente para las familias: el pueblo esconde un yacimiento paleontológico (el MCD – Museo Temps de Dinosaures) con huellas reales de dinosaurios del Cretácico. Para los niños (y los no tan niños) es una experiencia inolvidable.",
          "Otros pueblos cercanos que vale la pena visitar son Forcall, Villafranca del Cid, Castellfort y Ares del Maestrat. Todos comparten la arquitectura de piedra, las calles estrechas y la misma quietud que hace de esta zona uno de los secretos mejor guardados del interior valenciano.",
        ],
      },
      {
        heading: "Gastronomía local: qué comer en Portell de Morella",
        paragraphs: [
          "La cocina del Alt Maestrat es rotunda, de montaña, y muy reconocible. En Portell y alrededores encontrarás platos como los fideos con carne, las croquetas caseras de cocido, el cordero al horno, las setas en temporada, las olletas de la tierra (guisos contundentes de legumbres y verduras), el tombet de carn i verdures y, por supuesto, los embutidos artesanos. Las longanizas, sobrasada y morcillas de la zona son de referencia.",
          "Para cerrar la comida no puede faltar un trozo de flaó o algún postre de requesón, herencia clara de siglos de tradición ganadera. Y si te gusta el vino, estás en la puerta de la D.O. Terra Alta y de los Vins de la Terra de Castelló, con bodegas pequeñas que están dando muchísimo que hablar en los últimos años.",
          "En Casa Rural el Chato ofrecemos además una experiencia única que no encontrarás en ninguna otra casa rural de Els Ports: catas privadas con @964TASTINGSHOP. Son sesiones personalizadas de vinos, cervezas artesanas o licores directamente en el salón de la casa, con explicación didáctica y embutidos y quesos locales para maridar. Es la manera perfecta de descubrir los sabores de la provincia sin salir del alojamiento.",
        ],
      },
      {
        heading: "Planes con niños en Portell de Morella",
        paragraphs: [
          "Portell es un destino muy familiar. Los niños pueden correr por las calles del casco antiguo sin preocupación porque apenas hay tráfico, y las plazas pequeñas funcionan como pequeños patios de juego naturales. Las rutas de senderismo fáciles permiten caminar en familia sin complicaciones y descubrir fuentes, masías y miradores sin grandes desniveles.",
          "A media hora del pueblo puedes combinar naturaleza con cultura en Cinctorres (huellas de dinosaurio), en Morella (castillo, murallas y pastelerías tradicionales) o en Forcall (su plaza porticada es una joya). Un día entero en Morella suele ser el gran favorito: subir al castillo, comer algo típico y volver al pueblo con tiempo de descansar.",
          "Dentro de nuestra casa rural tenemos además una sala de entretenimiento con juegos de mesa, diana y canasta de baloncesto, pensada precisamente para que los peques (y los mayores) tengan donde divertirse cuando cae la tarde.",
        ],
      },
      {
        heading: "Cuándo visitar Portell de Morella",
        paragraphs: [
          "Portell se puede visitar durante todo el año, pero cada estación tiene su propio encanto. En primavera los almendros y cerezos florecen y las rutas de senderismo están en su mejor momento. El verano es fresco, con temperaturas muy agradables incluso en julio y agosto gracias a la altitud (más de 1000 m). Es ideal si huyes del calor de la costa.",
          "El otoño es probablemente la estación más fotogénica, con los bosques en tonos cobrizos y los primeros fríos invitando a la chimenea y a la mesa. Y el invierno, aunque más frío, es mágico: el casco histórico con nieve o bajo cielos despejados de alta montaña es una estampa que pocos turistas conocen. Nuestra casa rural tiene calefacción central, así que incluso en enero se está como en casa.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuántos días se necesitan para visitar Portell de Morella?",
        a: "Un fin de semana (2-3 noches) es suficiente para conocer el pueblo y hacer una ruta de senderismo. Si quieres combinarlo con Morella, Cinctorres y alguna excursión más, lo ideal son 4 o 5 noches.",
      },
      {
        q: "¿Qué hay que ver imprescindible en Portell de Morella?",
        a: "El casco histórico amurallado, la iglesia parroquial, las fuentes y lavaderos tradicionales, y al menos una ruta corta por el entorno (por ejemplo, el SL-CV 133 Les Albarades). En 2 horas se puede recorrer lo básico del pueblo.",
      },
      {
        q: "¿Se puede ir de Portell de Morella a Morella en coche?",
        a: "Sí, Morella está a unos 15 km por carretera y se tarda unos 20-25 minutos en coche. Es una excursión ideal para hacer en medio día.",
      },
      {
        q: "¿Hay restaurantes en Portell de Morella?",
        a: "Sí, hay restaurantes y bares locales donde probar la cocina tradicional del Alt Maestrat. Al ser un pueblo pequeño conviene reservar con antelación, sobre todo los fines de semana.",
      },
    ],
    related: ["senderismo-els-ports-mejores-rutas", "escapada-fin-de-semana-els-ports", "morella-castillo-que-ver"],
  },

  // =============================================================
  {
    slug: "senderismo-els-ports-mejores-rutas",
    title: "Senderismo en Els Ports: las 7 mejores rutas para hacer desde Portell de Morella",
    description:
      "Descubre las mejores rutas de senderismo en Els Ports de Morella. GR-331, Les Albarades, Rambla Celumbres y más. Dificultad, duración y consejos desde Portell de Morella.",
    date: "2026-01-18",
    readingTime: "11 min",
    tags: ["Senderismo", "Els Ports", "GR-331", "Rutas"],
    heroImage: "/images/photo-11.jpg",
    heroAlt: "Señal del GR-331 Els Ports y del Sender SL-CV 133 Les Albarades",
    intro:
      "Els Ports es una de las comarcas más salvajes y mejor conservadas del interior valenciano, y Portell de Morella es un punto de partida perfecto para recorrerla a pie. Desde el propio pueblo parten varias rutas oficiales del GR-331 y de los Senderos de Pequeño Recorrido (SL-CV), y en un radio de pocos kilómetros encontrarás caminos para todos los niveles: desde paseos familiares hasta etapas exigentes para senderistas experimentados. Esta es nuestra guía honesta con las 7 mejores rutas de senderismo en Els Ports que puedes hacer desde Portell de Morella.",
    sections: [
      {
        heading: "1. Sender SL-CV 133 · Les Albarades – Casas de San Juan",
        paragraphs: [
          "Es la ruta más popular del pueblo y, para muchos, la mejor introducción a Els Ports. Se trata de un recorrido circular señalizado que sale del casco urbano de Portell y atraviesa pinares, antiguos caminos de herradura, masías abandonadas y parajes de alto valor paisajístico. La distancia ronda los 11 kilómetros con un desnivel moderado, y se puede completar en unas 4 horas a paso tranquilo.",
          "El tramo más espectacular es el que discurre por las Albarades, muros de piedra seca catalogados como patrimonio inmaterial por la UNESCO. Son obras de cantería hechas por los pastores hace siglos, y verlas in situ es emocionante. Recomendado para senderistas con un mínimo de forma física, pero apto para niños mayores de 10 años acostumbrados a caminar.",
        ],
      },
      {
        heading: "2. GR-331 · Etapa por Portell de Morella",
        paragraphs: [
          "El GR-331 es el Gran Recorrido que cruza Els Ports y pasa por Portell. Si eres de los que disfruta caminando durante todo un día, esta es tu ruta. Puedes hacer una etapa lineal hacia Castellfort o hacia Cinctorres y organizarte el regreso con dos coches o con transporte privado.",
          "El itinerario es un continuo sube y baja por los barrancos y lomas característicos del Maestrazgo, con tramos de sombra generosa en verano y vistas abiertas al Sistema Ibérico. Es una buena forma de encadenar varios pueblos con encanto en un mismo viaje: Portell, Cinctorres, Castellfort y La Todolella pueden conectarse con diferentes etapas del GR-331.",
        ],
      },
      {
        heading: "3. Paraje Natural Municipal Rambla Celumbres",
        paragraphs: [
          "Si buscas una ruta más suave pero espectacular, la Rambla Celumbres es una apuesta segura. Situada en el triángulo formado por Castellfort, Cinctorres y Portell de Morella, es un paraje natural protegido con formaciones calizas, pozas, cuevas y bosque de ribera. El barranco se puede recorrer parcialmente a pie sin grandes dificultades.",
          "En verano es uno de los lugares favoritos de la comarca para combinar senderismo con baño en pozas naturales. En primavera y otoño se disfruta del mejor caudal y de la vegetación en estado óptimo. Ideal para familias y para quienes prefieren rutas cortas pero de gran belleza paisajística.",
        ],
      },
      {
        heading: "4. Ruta al Yacimiento de En Balaguer",
        paragraphs: [
          "El yacimiento de En Balaguer es un enclave arqueológico situado en plena montaña, en el término municipal de Portell. Es uno de los yacimientos ibéricos más interesantes de la zona y el acceso se hace a pie por una pequeña ruta señalizada que parte desde la carretera.",
          "Además del valor histórico del lugar (hay visitas guiadas 3D y paneles explicativos), la ruta en sí atraviesa paisajes muy fotogénicos entre la sierra de Gúdar y la costa del Maestrat. Es una ruta corta, de menos de 2 horas, perfecta para combinar con otras actividades durante el mismo día.",
        ],
      },
      {
        heading: "5. Circular por las masías tradicionales",
        paragraphs: [
          "Els Ports conserva uno de los patrimonios rurales más valiosos de España: las masías. Son casas de campo aisladas construidas en piedra, a veces auténticas pequeñas aldeas autosuficientes, muchas de ellas abandonadas desde hace décadas.",
          "Existen varias rutas circulares en los alrededores de Portell que permiten visitar varias masías en una misma caminata, con tramos de bosque, miradores y fuentes antiguas. Son rutas muy del gusto de los senderistas que buscan algo más que paisaje: quieren tocar la historia. Pregunta en el propio pueblo o en tu alojamiento cuál es la mejor opción según tu nivel.",
        ],
      },
      {
        heading: "6. Subida al Castillo de Morella",
        paragraphs: [
          "No es una ruta desde Portell propiamente dicha, pero a 15 minutos en coche tienes Morella, y la subida a pie al castillo es una de las experiencias imprescindibles del Maestrazgo. El sendero parte del casco histórico y asciende por un camino empedrado hasta la antigua fortaleza. El desnivel no es enorme, pero conviene ir con calma y con agua, especialmente en verano.",
          "Las vistas desde lo alto del castillo son posiblemente las mejores de toda la comarca: el casco amurallado de Morella a tus pies, la sierra del Maestrat al fondo y los tejados rojos extendiéndose como un cuadro. Un plan perfecto para empezar o terminar el día.",
        ],
      },
      {
        heading: "7. BTT: rutas en bicicleta de montaña",
        paragraphs: [
          "Aunque no es senderismo en sentido estricto, Els Ports es también uno de los mejores destinos de BTT del interior valenciano. Las mismas pistas forestales y caminos rurales que usan los senderistas son perfectos para pedalear, y hay rutas balizadas tanto para iniciados como para ciclistas de montaña experimentados. Si vienes con la bici, Portell es una base ideal: poco tráfico, carreteras secundarias con pocas rectas y muchísimos kilómetros por descubrir.",
        ],
      },
      {
        heading: "Consejos antes de salir a caminar por Els Ports",
        paragraphs: [
          "Aunque Els Ports no es una zona de alta montaña, sí es una zona de montaña media y el clima puede cambiar rápido. Estos son nuestros consejos básicos:",
        ],
        list: [
          "Lleva siempre agua suficiente (mínimo 1,5 L por persona incluso en días suaves).",
          "Calzado de senderismo cerrado, no zapatillas de correr. Muchos caminos tienen piedra suelta.",
          "En verano evita las horas centrales del día: sal antes de las 9 h o después de las 17 h.",
          "Descárgate los tracks en la aplicación Wikiloc o similar. La cobertura móvil no siempre es buena.",
          "Respeta el patrimonio: las masías abandonadas son propiedad privada y muchas albergan fauna.",
          "En otoño-invierno lleva una capa extra: en Els Ports refresca muy rápido al caer el sol.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué es el GR-331?",
        a: "El GR-331 es el Gran Recorrido señalizado de Els Ports, uno de los senderos homologados por la FEDME. Atraviesa la comarca de norte a sur pasando por los pueblos más emblemáticos, entre ellos Portell de Morella.",
      },
      {
        q: "¿Hay rutas fáciles para hacer con niños en Els Ports?",
        a: "Sí, hay varias rutas cortas y con poco desnivel aptas para familias, como los tramos del Paraje Natural Rambla Celumbres o pequeños circulares alrededor del propio pueblo de Portell. Siempre conviene preguntar en el alojamiento por la ruta más adecuada según la edad de los niños.",
      },
      {
        q: "¿Cuál es la mejor época para hacer senderismo en Els Ports?",
        a: "La primavera (abril-junio) y el otoño (septiembre-noviembre) son ideales: temperaturas suaves, poca gente en las rutas y paisajes en su mejor momento. El verano es viable gracias a la altitud, y en invierno es una zona de frío seco pero muy fotogénica.",
      },
    ],
    related: ["que-hacer-portell-de-morella", "escapada-fin-de-semana-els-ports", "btt-els-ports-rutas-bicicleta"],
  },

  // =============================================================
  {
    slug: "escapada-fin-de-semana-els-ports",
    title: "Escapada rural de fin de semana a Els Ports: guía perfecta desde Portell de Morella",
    description:
      "Planifica tu escapada rural de fin de semana en Els Ports, Castellón. Qué ver, dónde dormir y qué hacer en 2 o 3 días. Una guía realista desde Portell de Morella.",
    date: "2026-01-24",
    readingTime: "8 min",
    tags: ["Escapada rural", "Fin de semana", "Els Ports", "Castellón"],
    heroImage: "/images/photo-02.jpg",
    heroAlt: "Fachada de piedra de Casa Rural el Chato en Portell de Morella",
    intro:
      "Si buscas una escapada rural de fin de semana donde desconectar de verdad, Els Ports es probablemente el secreto mejor guardado del interior valenciano. Poca gente, paisajes de montaña media, pueblos medievales conservados y un ritmo pausado que recuerda cómo era viajar antes de que todo se convirtiera en una carrera de turistas. Esta guía te propone un itinerario realista para un fin de semana (2 o 3 noches) saliendo desde Portell de Morella, una de las bases más cómodas de toda la comarca.",
    sections: [
      {
        heading: "¿Por qué elegir Portell de Morella como base?",
        paragraphs: [
          "A la hora de organizar una escapada por Els Ports, la pregunta obvia es: ¿dónde me alojo? Morella suele ser la primera opción para muchos turistas por su castillo y su fama, pero precisamente por eso está más saturada, es más cara y pierde parte de la tranquilidad que se busca en este tipo de viaje.",
          "Portell de Morella, en cambio, está a 15 minutos en coche de Morella y a media hora del resto de pueblos principales (Cinctorres, Forcall, Castellfort), pero conserva intacta la sensación de pueblo pequeño, silencioso y auténtico. Alquilar una casa rural entera en el casco histórico, sin vecinos y con aparcamiento a pocos metros, marca completamente la diferencia. Es la base que recomendaríamos a cualquier amigo.",
        ],
      },
      {
        heading: "Día 1 · Llegada y primera toma de contacto",
        paragraphs: [
          "El viernes por la tarde es el momento ideal para llegar. El trayecto desde la costa es de poco más de una hora, suficiente para descomprimir pero no tanto como para agotar el día. Al llegar a Portell, lo mejor que puedes hacer es no hacer nada: dejar las maletas, abrir las ventanas, subir la calefacción si es invierno y dar un primer paseo por el casco histórico.",
          "Sin prisa, camina por las calles empedradas, asómate a las plazas, entra en la iglesia, déjate perder por los callejones. Al atardecer, el pueblo se vuelve especialmente silencioso: oirás vencejos, campanas, el viento bajando de la sierra. Para cenar, la mejor opción es comprar producto local y cenar en la propia casa rural, aprovechando la cocina comedor y el ambiente de los techos con vigas de madera.",
          "Si vienes en grupo y quieres un plan diferente desde el primer día, puedes reservar una cata privada con @964TASTINGSHOP directamente en la casa: vinos, cervezas artesanas o licores de la provincia de Castellón, con explicación didáctica y embutidos y quesos locales. Es de lo mejor que hemos hecho nunca como anfitriones y siempre es el plan favorito de los huéspedes.",
        ],
      },
      {
        heading: "Día 2 · Senderismo por la mañana, patrimonio por la tarde",
        paragraphs: [
          "El sábado es el día fuerte del fin de semana. Después de un desayuno tranquilo, lo ideal es salir a caminar. Desde el propio pueblo parten varias rutas homologadas del GR-331 Els Ports y del Sender SL-CV 133 Les Albarades. Elige una ruta de 2-3 horas adaptada a tu nivel y regresa a la casa con tiempo de ducha y descanso antes de comer.",
          "Por la tarde, cambia de marcha y dedica el tiempo al patrimonio. La mejor opción es acercarte a Morella (20 minutos en coche) y dedicar la tarde a pasear por sus murallas, subir al castillo y perderse por sus calles medievales. Si te sobra tiempo, visita el convento de San Francisco o alguna de las tiendas de productos locales del centro.",
          "Para cenar, puedes quedarte en Morella y probar uno de sus restaurantes tradicionales (es famosa por los platos de trufa en temporada) o volver a Portell y cenar en casa con calma. Las dos opciones tienen su encanto.",
        ],
      },
      {
        heading: "Día 3 · Naturaleza y vuelta sin prisa",
        paragraphs: [
          "Si tienes el domingo libre, no vuelvas directamente a casa. Vale la pena reservar la mañana para una última experiencia en la comarca. Dos buenas ideas: visitar el Paraje Natural Rambla Celumbres (un barranco espectacular compartido entre Castellfort, Cinctorres y Portell) o acercarte a Cinctorres a ver las huellas de dinosaurio del MCD, uno de los yacimientos paleontológicos más importantes de Europa.",
          "Después del plan de la mañana, come algo ligero, recoge la casa con calma y emprende el viaje de vuelta a media tarde. Saldrás con la sensación de haber vivido un fin de semana completo, no una escapada exprés. Eso es exactamente lo que buscamos cuando diseñamos la estancia en Casa Rural el Chato: que los huéspedes se vayan con tiempo, no con prisa.",
        ],
      },
      {
        heading: "Cuánto cuesta una escapada de fin de semana en Els Ports",
        paragraphs: [
          "El gran atractivo de Els Ports frente a otros destinos rurales es que sigue siendo asequible. En Casa Rural el Chato, por ejemplo, un fin de semana de 2 noches (viernes a domingo) para toda la casa entera (hasta 6 personas) cuesta 280 €, lo que sale a menos de 50 € por persona y noche. Un fin de semana largo de 3 noches de jueves a domingo son 360 €, y estancias más largas bajan hasta los 86 € por noche en total.",
          "Con ese presupuesto base puedes sumar comidas en restaurantes locales (15-25 € por comensal en menú del día, más caro por la noche en restaurantes de especialidad), gasolina para el viaje y alguna actividad extra como una cata privada o una visita guiada. En total, un fin de semana completo para 4 personas puede salir por unos 150-200 € por persona incluyendo alojamiento, comidas y combustible. Muy por debajo de la media de otros destinos rurales de moda.",
        ],
      },
      {
        heading: "Qué llevar para una escapada a Els Ports",
        paragraphs: [
          "Els Ports es montaña media. Incluso en verano las noches refrescan. Nuestra lista básica para cualquier época del año incluiría:",
        ],
        list: [
          "Calzado cómodo y cerrado (mejor botas o zapatillas de trail).",
          "Una chaqueta de abrigo aunque sea verano, para las noches y las mañanas.",
          "Gafas de sol y crema solar (la altitud engaña y quema más de lo esperado).",
          "Mochila pequeña con agua y algo de picar para las rutas.",
          "Cargadores y cables: la cobertura móvil es buena pero hay tramos con sombras.",
          "Una buena novela o un juego de mesa: vas a tener tiempo y tranquilidad.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Es Els Ports un buen destino para una escapada romántica?",
        a: "Sí, la tranquilidad, la autenticidad del entorno y el hecho de poder alquilar una casa rural entera para dos personas hacen de Els Ports un destino ideal para una escapada en pareja lejos del bullicio.",
      },
      {
        q: "¿Cuánto cuesta un fin de semana en casa rural en Portell de Morella?",
        a: "En Casa Rural el Chato, 2 noches de fin de semana (viernes a domingo) cuestan 280 € por la casa entera (hasta 6 personas). Es decir, menos de 50 € por persona y noche si vais en grupo.",
      },
      {
        q: "¿Hay buenas conexiones en coche desde Valencia o Barcelona?",
        a: "Sí. Desde Valencia son poco más de 2 horas en coche. Desde Barcelona o Tarragona, unas 2h30-3h. La carretera final es de montaña pero está en buen estado y bien señalizada.",
      },
    ],
    related: ["que-hacer-portell-de-morella", "senderismo-els-ports-mejores-rutas", "cata-privada-casa-rural-castellon"],
  },

  // =============================================================
  {
    slug: "cata-privada-casa-rural-castellon",
    title: "Cata privada en casa rural en Castellón: la experiencia @964TASTINGSHOP en Portell de Morella",
    description:
      "Descubre la experiencia de cata privada de vinos, cervezas artesanas y licores en Casa Rural el Chato, en Portell de Morella. Una cata exclusiva en tu propio alojamiento, con productos de Castellón.",
    date: "2026-01-30",
    readingTime: "7 min",
    tags: ["Cata de vinos", "Experiencia", "Castellón", "964TASTINGSHOP"],
    heroImage: "/images/photo-09.jpg",
    heroAlt: "Cocina comedor con vigas de madera donde se celebran las catas privadas",
    intro:
      "¿Y si tu casa rural no fuese solo un lugar donde dormir, sino el escenario de una experiencia gastronómica difícil de olvidar? En Casa Rural el Chato, en Portell de Morella, ofrecemos algo que no encontrarás fácilmente en otras casas rurales de Castellón: catas privadas de vinos, cervezas artesanas y licores, directamente en el salón o la cocina comedor de la casa, de la mano de @964TASTINGSHOP. Esta es la historia completa de cómo funciona, qué incluye y por qué es una de las experiencias favoritas de nuestros huéspedes.",
    sections: [
      {
        heading: "¿Qué es 964 Tasting Shop?",
        paragraphs: [
          "964 Tasting Shop es un proyecto nacido en Castellón con una idea muy sencilla: acercar los productos locales de calidad al público de forma divertida y educativa. No es una tienda al uso: trabajan con bodegas, cerveceras artesanas y destilerías pequeñas de la provincia y alrededores, y diseñan experiencias de cata a medida para grupos pequeños.",
          "La sinergia con Casa Rural el Chato surgió de forma natural. Los huéspedes ya elegían Portell de Morella buscando una experiencia distinta, y la posibilidad de añadir una cata privada sin tener que salir del alojamiento completó la propuesta. A día de hoy es una de las actividades más reservadas de la casa.",
        ],
      },
      {
        heading: "Cómo funciona una cata privada en Casa Rural el Chato",
        paragraphs: [
          "Cuando reservas una cata privada, lo único que tienes que elegir es el tipo de experiencia: cata de vinos, cata de cervezas artesanas o cata de licores. A partir de ahí, todo lo demás lo organizamos nosotros: se monta en la propia casa rural, en el salón o en la cocina comedor, y el catador de 964 Tasting Shop llega con los productos, las copas, los platos de acompañamiento y todo el material necesario.",
          "La sesión dura aproximadamente 90-120 minutos. Comienza con una explicación didáctica: cómo se mira un vino, cómo se huele, cómo se prueba, qué aromas buscar, cómo se clasifican los estilos. No es ni pedante ni aburrido: la filosofía es enseñar lo justo para que disfrutes más de cada sorbo sin convertirlo en una clase magistral. Cualquier persona, incluso sin experiencia previa, puede disfrutarla.",
          "Durante la cata se prueban entre 4 y 6 referencias distintas. Cada una se explica con su origen, su proceso de elaboración y sus particularidades. Entre una y otra, se ofrecen embutidos y quesos locales de la provincia de Castellón para acompañar: longanizas, cecinas, queso fresco o semicurado de la zona, y algún detalle sorpresa en función del producto. Todo está pensado para maridar, no para llenar.",
        ],
      },
      {
        heading: "Los tres tipos de cata disponibles",
        paragraphs: [
          "Tenemos tres formatos fijos, y se puede personalizar cualquiera de ellos según el grupo:",
          "La cata de vinos está pensada para quienes quieren descubrir vinos de la tierra y de autor. Se prueban tintos, blancos y, si la temporada lo permite, algún rosado o vino dulce. El recorrido suele incluir vinos de la D.O. Castellón, de la Terra Alta y de otras pequeñas D.O. cercanas que están dando mucho que hablar.",
          "La cata de cervezas artesanas es la opción favorita de los grupos de amigos. Se prueban cervezas elaboradas por microcerveceras de la provincia, con estilos muy variados (rubias, ipas, stouts, sours...). La explicación incluye cómo se elabora cada estilo y qué buscar al catar una cerveza artesana.",
          "La cata de licores es probablemente la más original: destilados artesanos, licores tradicionales de la zona (incluido algún pacharán o hierbas muy particulares) y, para los grupos más animados, un juego gamificado con puntuación y premios finales. Es la cata más divertida de las tres y suele convertirse en el plato fuerte de las escapadas de grupo.",
        ],
      },
      {
        heading: "¿Para quién es ideal una cata privada en casa rural?",
        paragraphs: [
          "Hemos tenido grupos muy distintos, y la experiencia funciona con casi todos. Es ideal para grupos de amigos que quieren hacer algo diferente a la típica salida de fin de semana, para parejas que buscan una experiencia gastronómica íntima y diferente, para celebraciones especiales (cumpleaños, despedidas, aniversarios) y para equipos de empresa que quieren hacer un team building distinto al habitual en un entorno que predispone a relajarse y conversar.",
          "También la recomendamos para quienes visitan Els Ports por primera vez y quieren entender la cultura del vino y los productos locales con contexto. Muchas veces los huéspedes nos dicen que, después de la cata, su relación con los vinos y cervezas de la comarca cambia por completo: empiezan a fijarse en cosas en las que antes no se fijaban.",
          "Lo que sí recomendamos siempre es reservar con antelación: al ser una actividad personalizada, el catador organiza agenda con cada grupo por separado y no siempre hay disponibilidad el mismo fin de semana.",
        ],
      },
      {
        heading: "Cómo reservar tu experiencia de cata privada",
        paragraphs: [
          "Reservar es muy sencillo: cuando contactas para alquilar la casa rural, solo tienes que indicarnos que te interesa una cata privada, el tipo de experiencia y el número aproximado de personas. Nosotros nos encargamos de coordinarlo directamente con 964 Tasting Shop y de confirmarte la disponibilidad y el precio final antes de tu llegada.",
          "Puedes escribirnos a info@casaruralelchato.com o llamarnos al 964 92 10 16. Estamos acostumbrados a organizar escapadas con actividades a medida, y nuestra prioridad es que la experiencia encaje exactamente con lo que estás buscando. No hay dos catas iguales, y esa es precisamente la gracia.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Se puede hacer la cata privada solo durante el fin de semana?",
        a: "No. La cata privada se puede organizar cualquier día de la semana, siempre que haya disponibilidad del catador. Lo recomendable es reservar con un mínimo de una semana de antelación.",
      },
      {
        q: "¿Cuánto cuesta una cata privada en Casa Rural el Chato?",
        a: "El precio depende del tipo de cata, el número de personas y los productos seleccionados. Al ser una experiencia personalizada, preferimos confirmar el precio final una vez sabemos tus preferencias. Escríbenos a info@casaruralelchato.com y te pasamos un presupuesto en 24 horas.",
      },
      {
        q: "¿Es apta para personas sin experiencia previa en catas?",
        a: "Totalmente. La explicación está diseñada para que cualquiera, incluso sin experiencia, pueda disfrutarla y aprender algo nuevo. No es una cata profesional, es una experiencia divulgativa y divertida.",
      },
    ],
    related: ["que-hacer-portell-de-morella", "escapada-fin-de-semana-els-ports"],
  },

  // =============================================================
  {
    slug: "morella-castillo-que-ver",
    title: "Morella: qué ver en el pueblo medieval más famoso del Maestrazgo",
    description:
      "Guía completa para visitar Morella (Castellón): castillo, murallas, casco histórico, restaurantes y qué ver en el pueblo más famoso del Maestrazgo a solo 15 km de Portell.",
    date: "2026-02-05",
    readingTime: "8 min",
    tags: ["Morella", "Maestrazgo", "Castellón", "Qué ver"],
    heroImage: "/images/photo-16.jpg",
    heroAlt: "Vista de Morella y las montañas del Maestrazgo al fondo",
    intro:
      "Morella es, sin exagerar, uno de los pueblos medievales mejor conservados de toda España. Con su castillo dominando el casco histórico desde lo alto, sus murallas intactas y sus calles empedradas, es parada obligatoria para cualquier viajero que se acerque a Els Ports. Está a tan solo 15 km de Portell de Morella, lo que la convierte en la excursión perfecta si te alojas en nuestra casa rural. Esta es la guía completa de qué ver, qué hacer y dónde comer en Morella.",
    sections: [
      {
        heading: "Un poco de historia: por qué Morella es tan especial",
        paragraphs: [
          "Morella ha sido un cruce de caminos desde la época ibérica, pero fue en la Edad Media cuando alcanzó su máximo esplendor. Fronteriza entre reinos cristianos y almohades, y después entre la Corona de Aragón y Castilla, la villa fue clave en la geopolítica medieval del noreste peninsular. Todavía hoy, su castillo y sus murallas recuerdan ese papel estratégico: no están ahí por decoración, sino porque esta tierra fue defendida durante siglos.",
          "Morella está declarada Conjunto Histórico-Artístico desde 1931 y forma parte de la asociación Los Pueblos más Bonitos de España. Y sí, es un pueblo turístico, no vamos a mentir: en temporada alta se llena. Pero fuera de los fines de semana puntas conserva una autenticidad que otros pueblos turísticos han perdido, y siempre hay calles secundarias en las que perderse en paz.",
        ],
      },
      {
        heading: "El castillo de Morella: imprescindible",
        paragraphs: [
          "El castillo es, con diferencia, la visita número uno de Morella. Situado sobre una peña caliza de 1070 metros, domina todo el casco histórico y ofrece una de las panorámicas más espectaculares del interior valenciano. Se sube a pie desde el casco antiguo por un camino empedrado que atraviesa el antiguo convento de San Francisco. La subida no es muy larga (unos 20-30 minutos), pero el desnivel es notable: ve con calma, agua y buen calzado.",
          "Una vez arriba, encontrarás restos de murallas, patios, torres y explanadas desde las que se ve Morella a los pies, la sierra del Maestrat al fondo y, en los días claros, incluso la costa mediterránea. La visita se puede hacer con audioguía y hay paneles explicativos que contextualizan el pasado militar y civil del recinto. Dedícale al menos 1 hora y media.",
        ],
      },
      {
        heading: "Paseo por el casco histórico",
        paragraphs: [
          "Después del castillo, lo mejor es bajar al casco histórico y perderse sin prisa. El pueblo está amurallado y tiene varias puertas de acceso: entra por cualquiera de ellas y deja que las calles te guíen. No hay forma de perderse de verdad y cada callejón esconde alguna sorpresa.",
          "No te pierdas la basílica arciprestal de Santa María la Mayor, una joya del gótico levantino con una portada decorada y un interior sorprendentemente amplio. Otros puntos destacados son la Casa de la Villa, el antiguo convento de San Francisco (que alberga el Museo Tiempo de Historia), la judería, y las plazas con soportales donde se celebraban los antiguos mercados.",
          "Un consejo: dedica algo de tiempo a las calles que suben y bajan en paralelo a la calle Blasco de Alagón, la arteria principal. Es en esas calles secundarias donde realmente se saborea el Morella de siempre, lejos de las tiendas turísticas.",
        ],
      },
      {
        heading: "Qué comer en Morella",
        paragraphs: [
          "Si hay un motivo culinario por el que Morella es famosa, ese es la trufa negra. La comarca del Maestrat es uno de los grandes productores de trufa de Europa, y durante los meses de temporada (noviembre a marzo) los restaurantes de Morella ofrecen menús monográficos con platos que van desde la ensalada de trufa hasta el arroz, los huevos o la pasta trufados. Es una experiencia muy recomendable.",
          "Fuera de la temporada de trufa, la cocina tradicional sigue siendo rotunda y deliciosa: cordero al horno, croquetas caseras de cocido, cazuelas de setas, embutidos locales y postres como el flaó o los cuajados con requesón. Los restaurantes con más prestigio son pequeños, así que conviene reservar con antelación, especialmente en fines de semana y festivos.",
          "Si tu plan es combinar una visita a Morella con la vuelta a la casa rural en Portell, te recomendamos reservar comida sobre las 14h y dejar el café en una terraza del casco histórico. Así aprovechas la mejor luz para pasear después y vuelves a Portell sin prisa al atardecer.",
        ],
      },
      {
        heading: "Cómo llegar desde Portell de Morella",
        paragraphs: [
          "Desde Portell de Morella hay 15 km por carretera hasta Morella, un trayecto de unos 20-25 minutos en coche por una vía de montaña muy panorámica. Es imposible perderse: hay una única carretera principal que conecta ambos pueblos. Si te alojas en Casa Rural el Chato, Morella se convierte en una excursión de medio día muy cómoda que puedes hacer cualquier mañana o tarde de tu estancia.",
          "Nuestra recomendación es ir por la mañana (evitas las horas de más calor en verano), comer arriba y bajar andando del castillo hacia el casco histórico, y volver a Portell para cenar con calma en la casa. O, si prefieres cenar en Morella, reservar mesa en uno de los restaurantes de referencia. Las dos opciones son buenas, pero volver a la tranquilidad de Portell es siempre una buena idea.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto tiempo se necesita para visitar Morella?",
        a: "Con medio día es suficiente para ver el castillo, pasear por el casco histórico y comer. Si quieres visitar además algún museo o hacer alguna ruta corta por los alrededores, lo ideal es dedicarle un día entero.",
      },
      {
        q: "¿Se puede visitar el castillo de Morella con niños?",
        a: "Sí, pero hay que tener en cuenta que la subida tiene desnivel. Niños a partir de 6-7 años que caminen bien lo disfrutan mucho. Con carritos de bebé no es recomendable por la pendiente y el empedrado.",
      },
      {
        q: "¿Cuál es la mejor época para visitar Morella?",
        a: "Primavera y otoño son las mejores estaciones por el clima y por la afluencia turística. Si vas en temporada de trufa (noviembre a marzo) tendrás además la ventaja de poder probar los menús especiales. Verano es más caluroso pero sigue siendo buena época por la altitud.",
      },
    ],
    related: ["que-hacer-portell-de-morella", "senderismo-els-ports-mejores-rutas", "escapada-fin-de-semana-els-ports"],
  },

  // =============================================================
  {
    slug: "gastronomia-maestrazgo-que-comer",
    title: "Gastronomía del Maestrazgo: qué comer en Els Ports y Portell de Morella",
    description:
      "Descubre la gastronomía del Maestrazgo y Els Ports: platos tradicionales, productos locales, quesos, embutidos, trufa y los mejores sabores de Portell de Morella.",
    date: "2026-02-14",
    readingTime: "9 min",
    tags: ["Gastronomía", "Maestrazgo", "Els Ports", "Productos locales"],
    heroImage: "/images/photo-26.jpg",
    heroAlt: "Cocina comedor tradicional con productos locales del Maestrazgo",
    intro:
      "La cocina del Maestrazgo es una de las más auténticas y menos conocidas de España. En Els Ports, los platos se siguen elaborando como se hacían hace un siglo, con productos de cercanía, técnicas pacientes y un respeto absoluto por la estacionalidad. Si vienes a Portell de Morella a disfrutar de un fin de semana rural, vas a comer de verdad. Esta es nuestra guía para entender la gastronomía del Maestrazgo y saber qué platos y productos locales no puedes dejar de probar.",
    sections: [
      {
        heading: "El Maestrazgo: un territorio de productos honestos",
        paragraphs: [
          "La comarca del Alt Maestrat y Els Ports ocupa la zona más montañosa del norte de Castellón, una tierra de alta montaña media donde la ganadería extensiva, las legumbres y los cereales de secano han marcado la dieta durante siglos. El resultado es una cocina rotunda, pensada para días de frío y trabajo físico, pero con una riqueza de sabores que pocas cocinas rurales de España pueden igualar.",
          "Si tuviéramos que resumirla en una frase: es la cocina de la gente que vivía cerca de sus animales, de sus huertos y de sus bosques. Nada viene de lejos. Todo tiene un origen local. Y casi todo se come donde se produce. Esa filosofía, que hoy está tan de moda en la alta cocina (kilómetro cero, producto de temporada, trazabilidad), aquí nunca se perdió.",
        ],
      },
      {
        heading: "La trufa negra: el diamante del Maestrazgo",
        paragraphs: [
          "Pocos lo saben, pero la comarca del Maestrat es uno de los grandes productores de trufa negra (Tuber melanosporum) de toda Europa. Durante los meses de temporada (noviembre a marzo), los robles y encinas del entorno de Morella, Villafranca, Vistabella y todo Els Ports dan una de las trufas más cotizadas del mundo.",
          "Muchos restaurantes de Morella ofrecen durante estos meses menús monográficos de trufa, con platos que van desde la ensalada tibia de trufa hasta el huevo trufado, los arroces, las pastas frescas o los quesos madurados en trufa. Es una experiencia gastronómica que justifica por sí sola una escapada al Maestrazgo en invierno, y en Casa Rural el Chato siempre recomendamos aprovechar la temporada si el calendario lo permite.",
          "Si te interesa, además de comer trufa, vivirla de primera mano, hay experiencias de búsqueda con perros truferos por algunas de las fincas de la zona. Pregúntanos al reservar y te ayudamos a organizarlo.",
        ],
      },
      {
        heading: "Platos tradicionales que no te puedes perder",
        paragraphs: [
          "Más allá de la trufa, la cocina cotidiana de Els Ports está llena de platos sencillos pero enormemente reconocibles. Esta es una pequeña selección de los imprescindibles:",
        ],
        list: [
          "Olleta de la tierra: guiso de legumbres con verduras, carne y embutido, cocinado a fuego lento durante horas. Contundente, reconfortante y muy propio de estas sierras.",
          "Fideos con carne (fideuà de secano): plato de fiesta, con fideos gordos, costilla, pollo de corral y un caldo muy trabajado. Sabe a celebración.",
          "Cordero al horno: una de las cumbres de la cocina del Maestrat. Cordero joven criado en libertad, con patatas, romero y un horno de leña cuando es posible.",
          "Tombet de carn i verdures: un guiso de carne con verduras de temporada, emparentado con el tumbet mallorquín pero con su propia personalidad.",
          "Cazuelas de setas: en otoño, los pinares del entorno dan rovellons, boletus, trompetas de la muerte y otras variedades que acaban en cazuelas o salteados maravillosos.",
          "Conejo con caracoles: otra receta de caza y campo, con caracoles serranos, hierbas aromáticas y un sofrito largo.",
        ],
      },
      {
        heading: "Quesos y embutidos: el orgullo de la comarca",
        paragraphs: [
          "Els Ports tiene una tradición ganadera muy viva, especialmente en ovino y caprino. Eso se traduce en quesos de gran calidad: frescos, semicurados y curados, en algunos casos con acabados especiales (en aceite, con trufa, con romero). Probar estos quesos con un buen pan rústico y unas gotas de aceite de oliva virgen de la zona es una de las comidas ligeras más memorables del viaje.",
          "Los embutidos son otro de los capítulos imprescindibles. Las longanizas, las morcillas, las cecinas y los chorizos del Maestrat se elaboran con recetas familiares que pasan de generación en generación. Muchos se curan al aire frío y seco de la montaña, lo que les da un sabor imposible de replicar en otra zona. Si pasas por una carnicería local, aprovecha: vas a llevarte algo especial.",
          "En nuestras catas privadas con 964 Tasting Shop, precisamente, los embutidos y quesos locales son el acompañamiento obligado. Es una de las formas más completas de descubrir los sabores de la provincia de Castellón sin moverte del salón de la casa rural.",
        ],
      },
      {
        heading: "Postres y dulces tradicionales",
        paragraphs: [
          "La repostería del Maestrazgo tiene ese toque conventual que se encuentra en muchas zonas rurales del interior de España. Pastas de almendra, rollos de anís, galletas caseras, mantecados de manteca y, en las fiestas, dulces más elaborados como los casquetes (pequeñas empanadillas rellenas de cabello de ángel).",
          "El flaó merece una mención aparte: es un dulce tradicional elaborado con requesón, huevos y hierbas aromáticas, de herencia clarísima en toda la zona mediterránea interior. En Morella, en Portell y en los pueblos de alrededor se sigue haciendo como se ha hecho siempre. Probarlo recién hecho es uno de esos pequeños lujos que justifican el viaje.",
          "Y no nos olvidamos del dulce del requesón en todas sus formas: con miel, con azúcar, con frutos secos. La tradición ganadera da lugar a un uso muy creativo del requesón fresco, tanto en salado como en dulce.",
        ],
      },
      {
        heading: "Vinos y bebidas locales",
        paragraphs: [
          "El vino ha vuelto con fuerza al interior de Castellón. Pequeñas bodegas están recuperando variedades autóctonas (tempranillo, garnacha, macabeo) en altitud, con resultados que están dando mucho que hablar. Los Vinos de la Tierra de Castelló son un descubrimiento reciente incluso para muchos sumilleres españoles.",
          "Además, la cercanía con la D.O. Terra Alta (ya en Tarragona) hace que sea fácil encontrar referencias excepcionales de garnacha blanca y tinta en cualquier carta bien trabajada de Els Ports. Si te gusta el vino, aprovecha.",
          "Entre los destilados y licores, hay toda una cultura de hierbas (pacharán, licores de hierbas de montaña, orujos) que vale la pena explorar. En nuestras catas de licores privadas solemos incluir alguna referencia local para que los huéspedes descubran sabores que no encontrarán en ninguna tienda de ciudad.",
        ],
      },
      {
        heading: "Dónde comer: restaurantes y consejos prácticos",
        paragraphs: [
          "En Portell de Morella y los pueblos cercanos hay restaurantes y bares locales donde probar la cocina tradicional en versión auténtica. No hay grandes cadenas ni propuestas turísticas impostadas: lo que hay es cocina de siempre hecha con producto cercano.",
          "En Morella encontrarás además algún restaurante con propuesta más elaborada, especialmente en temporada de trufa. Los precios son muy razonables comparados con la costa: un menú del día por 15-25 € es lo habitual, y los restaurantes de cocina más trabajada suelen moverse en 30-45 € por persona.",
          "Nuestro consejo es siempre reservar con antelación los fines de semana y los festivos. Son pueblos pequeños, los restaurantes tienen pocas mesas y la demanda se concentra en franjas muy concretas. Una llamada el día antes te evita sorpresas.",
        ],
      },
      {
        heading: "Cocinar en la casa rural: una experiencia en sí misma",
        paragraphs: [
          "Una de las cosas que más disfrutan los huéspedes de Casa Rural el Chato es poder cocinar en la casa. La cocina comedor está totalmente equipada, tiene vigas de madera a la vista y un ambiente que te invita a tomarte el acto de cocinar con calma.",
          "Comprar productos frescos en las carnicerías, panaderías y pequeños colmados del pueblo y preparar una comida sin prisa es parte del encanto de una escapada rural. Es la contrapartida perfecta a las cenas fuera: combinar un par de restaurantes en Morella o Portell con una cena casera en la propia casa rural es una forma muy recomendable de organizar el fin de semana.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Dónde se puede comer trufa en el Maestrazgo?",
        a: "En Morella, durante la temporada de trufa (noviembre a marzo), varios restaurantes ofrecen menús degustación monográficos. Portell de Morella está a 15 km de Morella, así que hacer una comida especial allí durante tu estancia es muy sencillo.",
      },
      {
        q: "¿Qué productos locales puedo llevarme de Els Ports?",
        a: "Quesos artesanos, embutidos curados al aire de la montaña (longanizas, cecina), miel, aceite de oliva virgen, legumbres locales, dulces tradicionales como el flaó y algún buen vino de los Vins de la Terra de Castelló. Todo se puede comprar en los pequeños comercios del pueblo.",
      },
      {
        q: "¿Las catas privadas incluyen comida?",
        a: "Las catas privadas de Casa Rural el Chato incluyen embutidos y quesos locales de la provincia de Castellón como acompañamiento. No son una comida completa, pero sí son un aperitivo muy generoso que se disfruta con calma y que encaja muy bien antes de cenar.",
      },
    ],
    related: ["cata-privada-casa-rural-castellon", "que-hacer-portell-de-morella", "morella-castillo-que-ver"],
  },

  // =============================================================
  {
    slug: "cinctorres-dinosaurios-familia",
    title: "Cinctorres y las huellas de dinosaurios: el plan perfecto con niños en Els Ports",
    description:
      "Descubre Cinctorres y su yacimiento de huellas de dinosaurios. El plan ideal con niños desde Casa Rural el Chato en Portell de Morella. Qué ver y cómo llegar.",
    date: "2026-03-02",
    readingTime: "8 min",
    tags: ["Cinctorres", "Dinosaurios", "Niños", "Els Ports"],
    heroImage: "/images/photo-16.jpg",
    heroAlt: "Paisaje montañoso de Els Ports con pueblo medieval al fondo",
    intro:
      "¿Sabías que a apenas media hora en coche de Portell de Morella hay uno de los yacimientos paleontológicos más importantes de Europa? Cinctorres, un pueblo medieval de Els Ports, esconde un museo con huellas reales de dinosaurios del Cretácico inferior que deja a cualquier niño (y a la mayoría de los adultos) con la boca abierta. Si estás organizando una escapada rural con niños al Maestrazgo, esta es sin duda una de las visitas imprescindibles. Te contamos cómo aprovecharla al máximo.",
    sections: [
      {
        heading: "Dónde está Cinctorres y cómo llegar",
        paragraphs: [
          "Cinctorres es un pueblo de la comarca de Els Ports situado a unos 20 kilómetros de Portell de Morella y a 10 km de Morella. Se llega por carreteras de montaña tranquilas, con muy poco tráfico y vistas preciosas. Desde Casa Rural el Chato el trayecto dura unos 25-30 minutos en coche, perfecto para una excursión de medio día con vuelta a tiempo de comer.",
          "El pueblo en sí ya es una joya: arquitectura medieval, casas de piedra, plaza con soportales, una iglesia parroquial con torre campanario y rincones que apenas han cambiado en siglos. Antes o después de visitar el museo, te recomendamos dedicar al menos media hora a pasear por sus calles: es una parte importante de la experiencia.",
        ],
      },
      {
        heading: "El Museo Temps de Dinosaures (MCD)",
        paragraphs: [
          "El MCD (Museo Temps de Dinosaures) de Cinctorres es el protagonista de la visita. Está instalado en un edificio sobrio pero muy bien museografiado, y expone las huellas reales de dinosaurios halladas en la zona junto con reproducciones a tamaño real, paneles interactivos, vídeos explicativos y todo lo necesario para que la visita sea comprensible para cualquier edad.",
          "Lo más impresionante del museo es que no estamos hablando de reproducciones: son las huellas originales. Los visitantes pueden verlas a muy poca distancia, entender cómo se formaron hace más de 120 millones de años, qué tipo de dinosaurio las dejó (desde grandes saurópodos hasta pequeños dinosaurios bípedos) y cómo los paleontólogos consiguen reconstruir un ecosistema entero a partir de estas marcas en la roca.",
          "Para los niños es alucinante. No hay nada comparable a estar de pie delante de una huella real de dinosaurio, sentir la escala y entender que ese animal caminó justo por donde ellos están pisando ahora. Muchos salen con ganas de ser paleontólogos, o al menos con una curiosidad por la historia de la Tierra que nada más que una visita a Cinctorres puede despertar.",
        ],
      },
      {
        heading: "Los yacimientos al aire libre",
        paragraphs: [
          "Además del museo, hay yacimientos paleontológicos al aire libre en el término municipal de Cinctorres que se pueden visitar en algunas épocas del año. Pregunta en la propia oficina del museo cuáles están accesibles durante tu visita y si ofrecen visitas guiadas. Caminar hasta un yacimiento real, con sus paneles explicativos y su contexto geológico, es una experiencia que complementa perfectamente la visita al museo.",
          "Importante: los yacimientos son patrimonio protegido. Nunca se pueden tocar ni retirar materiales. Se disfrutan con la vista y con la explicación, pero nada más. Es una buena oportunidad para enseñar a los más pequeños la importancia de respetar el patrimonio natural y arqueológico.",
        ],
      },
      {
        heading: "Cómo organizar el día con niños",
        paragraphs: [
          "Nuestra recomendación para una excursión familiar desde Portell de Morella es aproximadamente la siguiente:",
        ],
        list: [
          "09:30 h – Desayuno tranquilo en la casa rural.",
          "10:30 h – Salida en coche hacia Cinctorres (30 min).",
          "11:00 h – Visita al Museo Temps de Dinosaures (1h30-2h de duración, incluido el tiempo para curiosear sin prisa).",
          "13:00 h – Paseo por el casco histórico de Cinctorres y aperitivo en alguno de los bares del pueblo.",
          "14:00 h – Comida en un restaurante local de Cinctorres o vuelta a Portell para comer en la casa rural (cada opción tiene su encanto).",
          "Tarde – Siesta ligera, paseo tranquilo por Portell o una ruta corta por los alrededores si el clima acompaña.",
        ],
      },
      {
        heading: "Combinar Cinctorres con otras actividades familiares",
        paragraphs: [
          "Si vas a pasar varios días en la zona, Cinctorres puede formar parte de un circuito familiar más amplio. Morella (con su castillo, perfecto para niños que disfruten imaginándose caballeros) está a 15 minutos, y el Paraje Natural Municipal Rambla Celumbres (con sus pozas naturales en verano) queda justo al lado de Cinctorres. Podrías combinar museo de dinosaurios + castillo de Morella + tarde de pozas en verano en un programa de 2-3 días que a los niños les va a encantar.",
          "En Portell de Morella hay además algo que suele pasar desapercibido pero que marca la diferencia: muy poco tráfico. Los niños pueden correr por las calles del casco antiguo sin preocupación, y las plazas pequeñas funcionan como patios de juego naturales. Después de un día intenso en el museo, volver a la tranquilidad de Portell es casi terapéutico.",
        ],
      },
      {
        heading: "Consejos prácticos antes de ir",
        paragraphs: [
          "El museo tiene horarios que varían según la temporada. Consulta siempre la página web del MCD o llama antes de ir, especialmente si vas entre semana o en temporada baja. En verano y festivos conviene llegar pronto para evitar esperas si el pueblo está más concurrido.",
          "La visita es accesible para todas las edades, pero los niños a partir de 4-5 años son los que más la disfrutan (ya comprenden bien qué es un dinosaurio y siguen con atención las explicaciones). Con niños más pequeños también se puede hacer, pero quizás con menos concentración.",
          "En la propia casa rural guardamos un pequeño dossier con información práctica de la zona y recomendaciones para visitas con niños. Si necesitas cualquier consejo concreto sobre tu visita, escríbenos antes de llegar y te ayudamos a planearla.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta la entrada al museo de dinosaurios de Cinctorres?",
        a: "Los precios son muy asequibles, alrededor de 3-5 € por adulto con descuentos para niños, estudiantes y familias numerosas. Consulta tarifas actuales en la web del museo antes de ir.",
      },
      {
        q: "¿Se puede visitar Cinctorres en medio día desde Portell de Morella?",
        a: "Sí, perfectamente. El trayecto dura unos 25-30 minutos en coche y la visita al museo se hace en 1h30-2h. Es ideal combinar la mañana en Cinctorres con comida y tarde tranquila de vuelta en Portell.",
      },
      {
        q: "¿Los yacimientos de dinosaurios al aire libre son siempre visitables?",
        a: "Depende de la temporada y las condiciones. Algunos son accesibles todo el año, otros solo con visita guiada. Pregunta siempre en el propio museo al llegar para saber cuáles están abiertos el día de tu visita.",
      },
    ],
    related: ["que-hacer-portell-de-morella", "escapada-fin-de-semana-els-ports", "morella-castillo-que-ver"],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getRelatedPosts(slug: string): BlogPost[] {
  const post = getPost(slug);
  if (!post?.related) return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  return post.related
    .map((s) => getPost(s))
    .filter((p): p is BlogPost => p !== undefined)
    .slice(0, 3);
}
