/* ============================================================
   FICHAS TÉCNICAS DE PRODUCTOS — INPROCONFI S.A.
   ============================================================
   Cada producto tiene una ficha desplegable que se abre al
   hacer clic en "Ver ficha técnica" en la sección Productos.

   Campos:
   - marca:       fabricante / línea
   - nombre:      nombre comercial del producto
   - imagen:      foto (dentro de img/productos/), o null si no hay
   - resumen:     párrafo de presentación
   - capacidades: lista de capacidades técnicas principales
   - aplicaciones:lista de aplicaciones típicas
   - nota:        dato destacado (opcional, se resalta en amarillo)
   - enlace:      URL de la ficha oficial del fabricante
   - enlaceTxt:   texto del botón del enlace

   La información está redactada en español a partir de la
   documentación pública de cada fabricante (jul 2026).
   ============================================================ */

const PRODUCTOS_DETALLE = {

  "insulogix-g2": {
    marca: "Megger — Monitoreo DGA",
    nombre: "InsuLogix® G2 — Monitor de Acetileno, Hidrógeno y Humedad",
    imagen: "img/productos/megger-insulogic.jpg",
    resumen: "Monitor en línea de gases disueltos (DGA) para transformadores de potencia. Combina la detección temprana de fallas incipientes con la alerta de fallas críticas midiendo los dos gases más significativos del aceite —hidrógeno y acetileno— además de la humedad, de forma continua y sin sacar el activo de servicio.",
    capacidades: [
      "Detección de hidrógeno desde 25 ppm: indicador de fallas de baja temperatura, presente en la mayoría de fallas de transformadores",
      "Detección de acetileno desde 0,5 ppm mediante espectrómetro de diodo láser sintonizable y autocalibrado: sensibilidad comparable a la cromatografía de gases de laboratorio",
      "Medición de humedad en el aceite desde 2 ppm",
      "Diseño de válvula única: instalación en aproximadamente hora y media, sin desenergizar el transformador",
      "Sin mantenimiento preventivo requerido: bajo costo total de propiedad",
      "Interfaz de usuario en servidor web local: no requiere software especial ni entrenamiento extenso"
    ],
    aplicaciones: [
      "Transformadores de potencia de generación, transmisión y distribución",
      "Flotas de transformadores donde el monitoreo de laboratorio periódico deja ventanas ciegas",
      "Activos críticos donde un arco interno exige atención inmediata"
    ],
    nota: "El acetileno es el gas que delata arcos de alta energía dentro del transformador: detectarlo desde 0,5 ppm en línea significa enterarse el mismo día, no en el siguiente muestreo de laboratorio. Suministro y soporte local a través de EMS Testing, Value Added Partner oficial de Megger en Ecuador.",
    enlace: "https://www.megger.com/es/type/dga-monitoring",
    enlaceTxt: "Ver monitoreo DGA de Megger"
  },

  "icmmonitor": {
    marca: "Power Diagnostix by Megger",
    nombre: "ICMmonitor — Monitor de Descargas Parciales en Línea",
    imagen: "img/productos/monitor-dga.jpg",
    resumen: "Sistema de monitoreo continuo de descargas parciales para supervisar el estado del sistema de aislamiento de activos de media y alta tensión. Reúne tres instrumentos en uno —monitor de descargas parciales, analizador de espectro y detector acústico— y convierte los datos adquiridos en tendencias que anticipan la falla antes de que ocurra.",
    capacidades: [
      "Monitoreo permanente o temporal de descargas parciales en activos energizados",
      "Tres instrumentos integrados: monitor DP, analizador de espectro y detector acústico",
      "Supresión de ruido con módulo de compuerta conectable a antena o transformador de corriente: elimina interferencias de alta frecuencia (corona, radar, disparo de tiristores) sin perder datos de DP",
      "Sensores acústicos que ayudan a ubicar físicamente la fuente de la descarga",
      "Análisis de tendencias para detectar defectos en fase temprana",
      "Acceso remoto por red LAN (TCP/IP) o USB, con software de control, evaluación y diagnóstico profundo"
    ],
    aplicaciones: [
      "Transformadores de potencia y de instrumentos",
      "Máquinas rotativas (generadores y motores de media tensión)",
      "Cables aislados de media y alta tensión y sus accesorios",
      "Subestaciones aisladas en gas (GIS)"
    ],
    nota: "La combinación de analizador de espectro y detector de DP permite medir en ambientes eléctricamente ruidosos donde un monitor convencional se satura de falsas alarmas. Implementación y soporte local a través de EMS Testing, Value Added Partner oficial de Megger en Ecuador.",
    enlace: "https://www.megger.com/es/producto/monitor-de-descargas-parciales-en-linea-icmmonitor",
    enlaceTxt: "Ver ficha ICMmonitor"
  },

  "epas": {
    marca: "Schneider Electric — EcoStruxure",
    nombre: "EPAS — EcoStruxure Power Automation System",
    imagen: "img/productos/schneider-celdas-ingeniero.jpg",
    resumen: "La plataforma de automatización de potencia de Schneider Electric (evolución de PACiS) para diseñar, automatizar, configurar, monitorear, operar y mantener sistemas eléctricos de alta y media tensión. Es el corazón de la subestación digital, y la especialidad que certifica nuestra insignia EcoXpert Power Automation.",
    capacidades: [
      "Arquitectura de subestación digital sobre IEC 61850, con controladores de bahía C264, gateways y HMI",
      "Capa de automatización que optimiza la respuesta autónoma de redes AT/MT",
      "Integración con SCADA EcoStruxure Power Operation para observabilidad y control total",
      "Configuración y despliegue con las herramientas de ingeniería oficiales del ecosistema Schneider",
      "Ciberseguridad de sistema conforme a los estándares del sector eléctrico",
      "Base para programas de operación y mantenimiento más eficientes del activo eléctrico"
    ],
    aplicaciones: [
      "Subestaciones de transmisión y distribución (utilities)",
      "Subestaciones industriales de plantas con demanda crítica",
      "Modernización de sistemas PACiS existentes",
      "Integración de microredes y autogeneración al control de planta"
    ],
    nota: "Solo los partners certificados EcoXpert Power Automation despliegan EPAS: es la diferencia entre instalar equipos y entregar una subestación digital operando.",
    enlace: "https://www.se.com/ww/en/product-range/62047-ecostruxure-power-automation-system/",
    enlaceTxt: "Ver EPAS en Schneider"
  },

  "powerlogic-p5-p7": {
    marca: "Schneider Electric",
    nombre: "PowerLogic P5 & P7 — Relés de Protección",
    imagen: "img/productos/schneider-p5.jpg",
    resumen: "Familia de relés de protección PowerLogic para media tensión y aplicaciones de alta exigencia. El P5 es el relé compacto de nueva generación con ciberseguridad embebida; el P7 es la plataforma modular de alto desempeño con pantalla táctil para subestaciones y aplicaciones críticas.",
    capacidades: [
      "Protección completa de alimentadores, transformadores, motores y generadores en media tensión",
      "Ciberseguridad certificada (Achilles) y comunicación IEC 61850 para subestación digital",
      "P5: formato compacto extraíble, pantalla con diagrama unifilar y registro de eventos y formas de onda",
      "P7: arquitectura modular con módulos de E/S ampliables y HMI táctil de gran formato",
      "Integración nativa con EcoStruxure Power Operation y SCADA de terceros",
      "Configuración y pruebas con herramientas de ingeniería unificadas del ecosistema Schneider"
    ],
    aplicaciones: [
      "Protección y control de subestaciones industriales y de distribución",
      "Modernización de tableros con relés electromecánicos o de generaciones anteriores",
      "Subestaciones digitales IEC 61850",
      "Coordinación de protecciones en plantas con autogeneración"
    ],
    nota: "Como EcoXpert Power Automation, INPROCONFI parametriza, prueba por inyección secundaria y comisiona estos relés — la misma especialidad ejecutada en el SPS del Ecuador.",
    enlace: "https://www.se.com/ec/es/product-range/66494-powerlogic-p5/",
    enlaceTxt: "Ver PowerLogic P5 en Schneider"
  },

  "powerlogic-t300": {
    marca: "Schneider Electric",
    nombre: "PowerLogic T300 — RTU de Automatización de Redes",
    imagen: "img/productos/schneider-t300-sistema.jpg",
    resumen: "Unidad terminal remota (RTU) modular para la automatización de redes de distribución de media tensión: supervisa, controla y automatiza alimentadores, reconectadores y centros de transformación, llevando la inteligencia hasta el punto más lejano de la red.",
    capacidades: [
      "Arquitectura modular en riel DIN: unidad central más módulos de control y medición por bahía",
      "Monitoreo y control remoto de interruptores, seccionadores y reconectadores",
      "Detección de paso de falla e indicación para reducir tiempos de restablecimiento (SAIDI/SAIFI)",
      "Comunicaciones hacia el centro de control por IEC 60870-5-104, DNP3 y Modbus",
      "Gestión remota de configuración y firmware, con funciones de ciberseguridad",
      "Integración con EcoStruxure para operación y analítica de la red"
    ],
    aplicaciones: [
      "Automatización de alimentadores de distribuidoras eléctricas",
      "Centros de transformación y seccionamiento telecontrolados",
      "Esquemas de transferencia automática y restablecimiento remoto",
      "Modernización de redes para reducir penalizaciones por indisponibilidad"
    ],
    nota: "La automatización de la red de distribución es el paso natural después de la subestación digital: menos tiempo de falla, menos cuadrillas despachadas a ciegas.",
    enlace: "https://www.se.com/ec/es/product-range/63423-powerlogic-t300/",
    enlaceTxt: "Ver PowerLogic T300 en Schneider"
  },

  "weg-celdas": {
    marca: "WEG",
    nombre: "Celdas de Media Tensión WEG",
    imagen: "img/productos/weg-celdas.jpg",
    resumen: "Conjuntos de maniobra y control de media tensión WEG, ensamblados y probados en fábrica, para distribución, protección y maniobra en instalaciones industriales y utilities. El grupo cuenta con asistencia técnica autorizada de la línea de transmisión y distribución de WEG a través de EMS Testing.",
    capacidades: [
      "Tensiones de operación desde 2,3 kV hasta 36 kV",
      "Diseño conforme a la norma IEC 62271-200",
      "Construcción resistente a arco interno para seguridad del personal",
      "Aislamiento en aire, diseño compacto y modular",
      "Líneas para cada necesidad: MTW03, MTW04, MTW05, CCW07 y celdas aisladas en gas (GIS) HMGS",
      "Ensambladas y probadas en fábrica antes del despacho"
    ],
    aplicaciones: [
      "Subestaciones industriales de media tensión",
      "Centros de distribución de carga en plantas y utilities",
      "Protección y maniobra de transformadores y alimentadores",
      "Proyectos llave en mano con celdas, protecciones y comisionado del mismo grupo"
    ],
    nota: "Suministramos la celda, parametrizamos sus protecciones, la probamos por inyección secundaria y la ponemos en servicio: un solo responsable del tablero completo.",
    enlace: "https://www.weg.net/catalog/weg/EC/es/Tableros-El%C3%A9ctricos/Tableros-El%C3%A9ctricos/Celdas-de-Media-Tensi%C3%B3n/c/GLOBAL_WDC_PAN_QE_MVSWITCHGEAR",
    enlaceTxt: "Ver catálogo WEG"
  },

  "easygen-3000xt": {
    marca: "Woodward",
    nombre: "easYgen-3000XT — Controlador de Grupos Electrógenos",
    imagen: "img/productos/woodward-easygen.jpg",
    resumen: "Controlador de gestión de potencia que reúne en una sola plataforma la sincronización, el paralelismo, las protecciones y el reparto de carga de grupos electrógenos diésel, gas o hidroeléctricos. Es la referencia de la industria para aplicaciones críticas de generación.",
    capacidades: [
      "Operación isócrona de 1 a 32 grupos electrógenos en paralelo",
      "Sincronización automática, reparto de carga activa y reactiva, y protecciones integradas de generador",
      "Medición de potencia con precisión Clase I",
      "Integración con motores vía protocolo J1939 y comunicación entre unidades por red CAN",
      "Hardware robusto diseñado para ambientes industriales exigentes",
      "Lógica configurable para transferencias, arranques por falla de red y esquemas de prioridad"
    ],
    aplicaciones: [
      "Respaldo de emergencia y arranque automático por falla de red (AMF)",
      "Plantas de generación en paralelo con la red (utility paralleling)",
      "Cogeneración",
      "Aplicaciones marinas",
      "Plantas multigrupo con reparto de carga entre unidades"
    ],
    nota: "Un solo controlador cubre desde el grupo único de respaldo hasta plantas de 32 unidades operando en isócrono — el sistema crece sin cambiar de plataforma.",
    enlace: "https://www.woodward.com/products/industrial/easygen-3000xt/",
    enlaceTxt: "Ver ficha Woodward"
  },

  "ls-6xt": {
    marca: "Woodward",
    nombre: "LS-5 / LS-6XT — Controladores de Interruptor y Sincronización",
    imagen: null,
    resumen: "Controladores de sincronización e interruptores para sistemas de gestión de potencia que operan en paralelo con la red o en isla. Gobiernan los puntos de acople del sistema —interruptores de grupo, de barra y de interconexión— con protecciones y desacople de red integrados.",
    capacidades: [
      "Sincronización precisa de interruptores de acople y de interconexión con la red",
      "Desacople de red (mains decoupling) integrado para operación segura en paralelo",
      "Protecciones robustas incorporadas en el mismo controlador",
      "LS-6XT: gestión de hasta 64 interruptores sin controladores de grupo; LS-5: hasta 32",
      "Integración nativa con controladores easYgen vía CAN o Ethernet",
      "Esquemas de comunicación redundante para sistemas críticos"
    ],
    aplicaciones: [
      "Puntos de acople común (PCC) entre planta de generación y red pública",
      "Sistemas multigrupo con varias barras e interruptores de enlace",
      "Microredes con transición entre operación en isla y en paralelo",
      "Esquemas de transferencia con sincronización en transición cerrada"
    ],
    nota: "Con easYgen en los grupos y LS-6XT en los interruptores, toda la planta habla el mismo idioma: una sola arquitectura de control desde el motor hasta el punto de conexión con la red.",
    enlace: "https://www.woodward.com/products/industrial/ls-5-and-ls-6xt-breaker-controllers/",
    enlaceTxt: "Ver ficha Woodward"
  },

  "easyi": {
    marca: "Woodward",
    nombre: "easYi — Controlador de Almacenamiento y Recursos Distribuidos",
    imagen: null,
    resumen: "Controlador avanzado diseñado para simplificar la gestión de sistemas de almacenamiento en baterías (BESS) y recursos energéticos distribuidos (DER): plantas solares, turbinas eólicas y celdas de combustible, en operación conectada a red o en isla.",
    capacidades: [
      "Gestión de operación en red (on-grid) y en isla (off-grid)",
      "Optimización de los ciclos de carga y descarga de baterías",
      "Control de frecuencia y tensión durante la operación en isla",
      "Integración con sistemas SCADA",
      "Disponible en variantes con y sin pantalla",
      "Escalable en microredes junto a controles de motores de combustión e interruptores de la misma familia"
    ],
    aplicaciones: [
      "Sistemas BESS industriales y de microred",
      "Integración de generación fotovoltaica y eólica con almacenamiento",
      "Microredes híbridas que combinan generación térmica, renovable y baterías",
      "Regulación de frecuencia y soporte de tensión en sistemas aislados"
    ],
    nota: "Completa la familia Woodward para microredes: easYgen controla los grupos, LS-6XT los interruptores y easYi las baterías y renovables — todo bajo una misma arquitectura.",
    enlace: "https://www.woodward.com/products/industrial/easyi/",
    enlaceTxt: "Ver ficha Woodward"
  },

  "easyview": {
    marca: "Woodward",
    nombre: "easYview — Visualización del Sistema de Potencia",
    imagen: null,
    resumen: "Solución de visualización basada en web para supervisar sistemas de potencia complejos sin necesidad de conocimientos de desarrollo web: se conecta, reconoce los controladores y muestra el sistema completo en pantalla.",
    capacidades: [
      "Soporte plug-and-play para hasta 4 controladores easYgen-XT más la conexión a la red",
      "Pantallas de 7\", 10\" y 15\" según la escala del sistema (de 30 a 150 puntos de datos)",
      "Interfaz intuitiva orientada al operador de planta",
      "Personalización mediante la plataforma atvise para pantallas a la medida",
      "Integración con sistemas SCADA de terceros y otros dispositivos industriales"
    ],
    aplicaciones: [
      "Salas de control de plantas de generación multigrupo",
      "Supervisión local de microredes",
      "Tableros de sincronismo con visualización para el operador",
      "Integración de la planta al SCADA corporativo del cliente"
    ],
    nota: "",
    enlace: "https://www.woodward.com/products/industrial/easyview/",
    enlaceTxt: "Ver ficha Woodward"
  },

  "easysim": {
    marca: "Woodward",
    nombre: "easYsim — Simulación y Gemelos Digitales",
    imagen: null,
    resumen: "Herramienta de simulación en la nube que crea gemelos digitales de configuraciones de potencia completas —grupos electrógenos, interruptores e integración de renovables— para probar, entrenar y validar sin tocar el sistema real.",
    capacidades: [
      "Gemelos digitales de plantas completas con los controladores reales (easYgen-3000XT, LS-6XT)",
      "Simulación de secuencias de carga personalizadas y de fallas de red",
      "Visualización remota vía VNC",
      "Modelos estándar de grupos electrógenos y escenarios a la medida",
      "Pruebas virtuales seguras y de bajo costo antes de intervenir el sistema real"
    ],
    aplicaciones: [
      "Validación de lógicas de control antes del comisionado en campo",
      "Entrenamiento de operadores sin riesgo para la planta",
      "Reproducción de eventos y fallas para análisis posterior",
      "Ingeniería de escenarios: qué pasa si sale un grupo, si falla la red, si entra la batería"
    ],
    nota: "La misma filosofía del SPS aplicada a su planta: probar las estrategias en simulación antes de que una contingencia real las ponga a prueba.",
    enlace: "https://www.woodward.com/products/industrial/easysim/",
    enlaceTxt: "Ver ficha Woodward"
  }
};
