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

   Última curación: 10 de julio de 2026
   ============================================================ */

const NOTICIAS = [
  {
    categoria: "Sector Eléctrico Ecuador",
    fecha: "Julio 2026",
    titulo: "CENACE advierte: el país necesita cerca de 894 MW adicionales para el próximo estiaje",
    resumen: "El operador nacional estima un 25% de probabilidad de déficit eléctrico en la próxima época seca si no ingresa nueva generación. Varios procesos de contratación de generación térmica han quedado desiertos durante 2026.",
    angulo: "Si su producción depende solo de la red pública, la pregunta no es si habrá estiaje, sino si su planta está lista. Una evaluación de continuidad eléctrica hoy cuesta menos que una parada mañana.",
    fuente: "Primicias",
    url: "https://www.primicias.ec/economia/ecuador-barcazas-electricidad-riesgo-cortes-luz-estiaje-celec-elecaustro-contratos-127651/"
  },
  {
    categoria: "Sector Eléctrico Ecuador",
    fecha: "15 de julio de 2026",
    titulo: "Las hidroeléctricas cubren el 74,6% de la demanda nacional; Coca Codo Sinclair aporta el 42%",
    resumen: "Según datos de CENACE, la generación hidráulica domina la matriz en temporada húmeda, con Coca Codo Sinclair como la principal fuente del país — la misma central integrada al Sistema de Protección Sistémica.",
    angulo: "La alta dependencia hidráulica es la otra cara del riesgo de estiaje: la matriz ecuatoriana necesita respaldo firme en cada planta industrial.",
    fuente: "El Universo",
    url: "https://www.eluniverso.com/noticias/economia/generacion-hidroelectrica-cubre-el-746-de-la-demanda-electrica-nacional-nota/"
  },
  {
    categoria: "Sector Eléctrico Ecuador",
    fecha: "2026",
    titulo: "Ecuador licitará 2.100 MW en tres proyectos eléctricos clave durante 2026",
    resumen: "El Gobierno anunció la adjudicación de tres proyectos de generación por 2.100 MW para reforzar la infraestructura eléctrica nacional, además de la recuperación de 132,8 MW térmicos ante un posible fenómeno de El Niño.",
    angulo: "Cada proyecto de generación nuevo exige estudios eléctricos, protecciones, comisionado y pruebas — exactamente el terreno donde el grupo tiene historial con el sistema nacional.",
    fuente: "Primicias",
    url: "https://www.primicias.ec/economia/proyectos-electricos-adjudicacion-2026-electricidad-113094/"
  },
  {
    categoria: "Equipos de Prueba",
    fecha: "Consultado: julio 2026",
    titulo: "Megger MRCT: pruebas de transformadores de corriente y relés hasta 50% más rápidas",
    resumen: "La unidad portátil más ligera de su clase ejecuta desmagnetización, relación, saturación, resistencia de devanados, polaridad y aislamiento de TCs en modo automático, con reportes vía PowerDB.",
    angulo: "Menos horas de subestación desenergizada por mantenimiento: la velocidad del equipo de prueba se traduce directamente en disponibilidad de su instalación.",
    fuente: "Voltimum",
    url: "https://www.voltimum.es/novedades-producto/mrct-megger-evolucion-pruebas"
  },
  {
    categoria: "Equipos de Prueba",
    fecha: "Consultado: julio 2026",
    titulo: "TRAX de Megger: un solo sistema de 32 kg para probar transformadores y subestación completa",
    resumen: "La familia TRAX concentra en un equipo liviano las pruebas de transformadores de potencia, TCs, TPs, interruptores y resistencia de contactos — el tipo de tecnología que EMS Testing opera como Value Added Partner de Megger en Ecuador.",
    angulo: "La modernización del parque de equipos de prueba permite diagnósticos más completos en una sola intervención — pregunte por nuestro alcance de pruebas con tecnología Megger.",
    fuente: "CdeComunicación",
    url: "https://material-electrico.cdecomunicacion.es/productos/16942/megger-equipo-de-pruebas-trax-para-transformadores-ligero-y-facil-de-usar"
  },
  {
    categoria: "Ingeniería de Potencia",
    fecha: "Consultado: julio 2026",
    titulo: "Subestaciones digitales: el bus de proceso y los sensores digitales desplazan al cableado de cobre",
    resumen: "La adopción de IEC 61850 con process bus avanza: transformadores de instrumentación convencionales reemplazados por sensores con salida digital, fibra óptica en lugar de cobre y menor huella física de las subestaciones.",
    angulo: "Modernizar protecciones hoy con relés IEC 61850 (como los PowerLogic P5/P7) deja su subestación lista para la transición digital sin rehacer la inversión.",
    fuente: "Revista Innovación Seguridad",
    url: "https://revistainnovacion.com/nota/12520/subestaciones_electricas_digitales_vanguardia_en_eficiencia_seguridad_y_estabilidad/"
  },
  {
    categoria: "Ingeniería de Potencia",
    fecha: "Consultado: julio 2026",
    titulo: "Gemelos digitales, edge computing y 5G industrial llegan a la automatización de subestaciones",
    resumen: "Las tendencias de automatización convergen con IT: simulación en gemelos digitales, detección predictiva de fallas con aprendizaje automático y comunicaciones determinísticas (TSN) para sincronización crítica.",
    angulo: "Es la misma filosofía que ya aplicamos: validar la lógica de control en simulación (ETAP, easYsim) antes de tocar el sistema real.",
    fuente: "ItresE Energía",
    url: "https://itresenergia.com/novedades/iec-61850-el-nuevo-estandar-en-automatizacion-de-subestaciones/"
  }
];
