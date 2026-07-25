/* ============================================================
   NOTICIAS DEL SECTOR — INPROCONFI S.A.
   ============================================================
   Sección curada de noticias. Para ACTUALIZARLA, pida a Claude:
   "actualiza las noticias de la página" — buscará noticias
   recientes de las tres categorías, con fuente real enlazada.

   Categorías válidas (los filtros se generan solos):
   - "Sector Eléctrico Ecuador"
   - "Equipos de Prueba"
   - "Ingeniería de Potencia"

   Campos:
   - categoria: una de las anteriores
   - fecha:     fecha de la noticia o de su curación
   - titulo:    titular breve
   - resumen:   2-3 líneas con los datos duros
   - angulo:    "Por qué le importa" — lectura comercial de INPROCONFI
   - fuente:    nombre del medio
   - url:       enlace a la nota original
   - destacada: OPCIONAL, true en UNA sola noticia — se muestra en
                grande al inicio de la sección

   Última curación: 25 de julio de 2026
   Todos los enlaces verificados en esa fecha.
   ============================================================ */

const NOTICIAS = [
  {
    categoria: "Sector Eléctrico Ecuador",
    fecha: "24 de julio de 2026",
    titulo: "El Gobierno acelera el plan para que la gran industria produzca su propia electricidad: plazo al 15 de diciembre de 2026",
    resumen: "El Ejecutivo supervisa el avance de los proyectos de autogeneración que deben desarrollar los grandes consumidores en alta tensión —industria manufacturera, minería, cementeras y acerías— con fecha límite el 15 de diciembre de 2026, antes del próximo estiaje.",
    angulo: "Si su planta es consumidor de alta tensión, el reloj ya corre: autogenerar exige estudios eléctricos, protecciones coordinadas, sincronismo y comisionado. Es exactamente el alcance que ejecutamos llave en mano — y el plazo no admite improvisar.",
    fuente: "Infobae",
    url: "https://www.infobae.com/america/america-latina/2026/07/24/ecuador-acelera-el-plan-para-que-la-gran-industria-produzca-su-propia-electricidad-antes-del-proximo-estiaje/",
    destacada: true
  },
  {
    categoria: "Sector Eléctrico Ecuador",
    fecha: "Julio de 2026",
    titulo: "Récord histórico de consumo eléctrico: 5.634 MW, muy por encima de lo proyectado en el Plan Maestro",
    resumen: "El 15 de julio de 2026 la demanda máxima alcanzó 5.634,31 MW a las 19:00, el pico más alto del año. Supera la proyección del Plan Maestro de Electricidad 2023-2032, que estimaba para 2026 un máximo de 5.206 MW en escenario de crecimiento normal.",
    angulo: "La demanda crece más rápido de lo que el país instala generación. Traducido a su planta: la red estará más exigida cada año, y el margen de maniobra ante una contingencia será menor que el del año pasado.",
    fuente: "Primicias",
    url: "https://www.primicias.ec/economia/demanda-electricidad-ecuador-consumo-record-julio-plan-maestro-cortes-luz-128254/"
  },
  {
    categoria: "Sector Eléctrico Ecuador",
    fecha: "Julio de 2026",
    titulo: "CENACE advierte riesgo de cortes si no entra nueva generación antes del estiaje",
    resumen: "El operador nacional estima un 25% de probabilidad de déficit eléctrico en la próxima época seca. El Gobierno gestiona extender la operación de una barcaza y ofrece incorporar 581 MW entre octubre de 2026 y 2028, mientras varios procesos de contratación han quedado desiertos.",
    angulo: "Si su producción depende solo de la red pública, la pregunta no es si habrá estiaje, sino si su planta está lista. Una evaluación de continuidad eléctrica hoy cuesta mucho menos que una parada mañana.",
    fuente: "Primicias",
    url: "https://www.primicias.ec/economia/ecuador-barcazas-electricidad-riesgo-cortes-luz-estiaje-celec-elecaustro-contratos-127651/"
  },
  {
    categoria: "Sector Eléctrico Ecuador",
    fecha: "9 de julio de 2026",
    titulo: "El Niño podría presionar el sistema eléctrico: ¿se repite la crisis energética de 2024?",
    resumen: "Los análisis del sector advierten que un nuevo ciclo de estiajes severos volvería a tensionar una matriz altamente dependiente de la hidroelectricidad, en un año en que la demanda ya rompió récords.",
    angulo: "Nuestros clientes con sincronismo en transición cerrada atravesaron 2024 sin detener la operación. La diferencia no fue la suerte: fue haber dimensionado el respaldo antes de necesitarlo.",
    fuente: "El Diario",
    url: "https://www.eldiario.ec/ecuador/el-nino-podria-presionar-al-sistema-electrico-de-ecuador-09072026/"
  },
  {
    categoria: "Equipos de Prueba",
    fecha: "Consultado: julio de 2026",
    titulo: "TRAX de Megger: un solo sistema portátil reemplaza el laboratorio de pruebas de subestación",
    resumen: "La familia TRAX concentra en un equipo liviano las pruebas de transformadores de potencia, TCs, TPs, interruptores y resistencia de contactos. El TRAX 280/279 entrega hasta 800 A y 2,2 kV (2.000 A y 12 kV con accesorios), con frecuencia ajustable de 1 a 500 Hz.",
    angulo: "Menos equipos que movilizar y menos horas de subestación desenergizada: un diagnóstico más completo en una sola intervención. EMS Testing opera esta tecnología como Value Added Partner de Megger en Ecuador.",
    fuente: "CdeComunicación",
    url: "https://material-electrico.cdecomunicacion.es/productos/16942/megger-equipo-de-pruebas-trax-para-transformadores-ligero-y-facil-de-usar"
  },
  {
    categoria: "Equipos de Prueba",
    fecha: "Consultado: julio de 2026",
    titulo: "Pruebas de aislamiento fiables incluso en subestaciones con alto ruido eléctrico",
    resumen: "La serie S1 de Megger incorpora inmunidad al ruido de 8 mA y filtrado de constante de tiempo larga ajustable, lo que permite ensayos de resistencia de aislamiento confiables en subestaciones sometidas a fuerte estrés electromagnético.",
    angulo: "Un valor de aislamiento medido con ruido de fondo no es un diagnóstico: es una cifra. La calidad del instrumento decide si su decisión de mantenimiento se apoya en un dato real.",
    fuente: "Megger",
    url: "https://www.megger.com/es/type/power-transformer-testing-and-monitoring/transformer-insulation-testing"
  },
  {
    categoria: "Ingeniería de Potencia",
    fecha: "Consultado: julio de 2026",
    titulo: "La subestación digital reduce hasta 70% el cableado de cobre y pasa a una arquitectura definida por software",
    resumen: "El bus de proceso sobre Ethernet e IEC 61850 permite que las protecciones intercambien valores muestreados y eventos con alta precisión temporal, sustituyendo el cableado de cobre por fibra óptica y desplazando el diseño desde el hardware hacia el software.",
    angulo: "Modernizar protecciones hoy con relés IEC 61850 —como los PowerLogic P5/P7 que parametrizamos y comisionamos— deja su subestación lista para esa transición sin rehacer la inversión.",
    fuente: "Burns & McDonnell",
    url: "https://blog.burnsmcd.com/embracing-iec-61850-and-the-strategic-shift-toward-digital-substations"
  },
  {
    categoria: "Ingeniería de Potencia",
    fecha: "Consultado: julio de 2026",
    titulo: "IEC 61850 se extiende más allá de la subestación: inversores, BESS y activos del borde de red",
    resumen: "El estándar se consolida como el protocolo de la transición energética: ya no solo subestaciones, sino inversores inteligentes, controladores de aerogeneradores, sistemas de gestión de baterías y almacenamiento conectado a red. R-GOOSE lleva esta filosofía fuera del patio de la subestación.",
    angulo: "Es la misma arquitectura con la que integramos microredes EcoStruxure: protecciones, generación, solar y BESS hablando un solo idioma, en lugar de islas de automatización que nadie puede supervisar junta.",
    fuente: "Software Toolbox",
    url: "https://softwaretoolbox.com/resources/what-is-iec61850"
  },
  {
    categoria: "Ingeniería de Potencia",
    fecha: "Consultado: julio de 2026",
    titulo: "Subestación digital y ciberseguridad: la otra cara de conectarlo todo",
    resumen: "Al migrar a arquitecturas IEC 61850 sobre Ethernet, la superficie de exposición crece. El diseño debe incorporar segmentación, control de accesos y monitoreo desde el inicio, no como un parche posterior.",
    angulo: "Por eso especificamos equipos con ciberseguridad embebida y diseñamos conforme IEC 62443. Conectar la subestación sin protegerla es cambiar un riesgo eléctrico por uno digital.",
    fuente: "Keentel Engineering",
    url: "https://keentelengineering.com/digital-substation-challenges-iec-61850-cybersecurity"
  }
];
