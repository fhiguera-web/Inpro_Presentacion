/* ============================================================
   UNIDADES DE NEGOCIO — INPROCONFI S.A.
   ============================================================
   Cada unidad tiene su propia página ampliada, que se abre en una
   ventana nueva desde la portada:  unidad.html?u=<id>

   Para EDITAR una unidad, cambie los textos de abajo.
   Para AGREGAR una fotografía a la galería:
     1. Copie la imagen dentro de img/<carpeta que corresponda>/
     2. Añada una línea  { src: "...", pie: "..." }  al arreglo "galeria"
   El pie de foto es lo que se lee bajo la imagen y al ampliarla.

   Campos:
   - id:        identificador en la URL (sin espacios ni tildes)
   - numero:    "UNIDAD 01"
   - nombre:    título de la unidad
   - lema:      frase corta de posicionamiento
   - intro:     párrafo de apertura
   - portada:   fotografía de cabecera (ancha)
   - servicios: [{ titulo, detalle }] — el catálogo de la unidad
   - secuencia: OPCIONAL, un trabajo real contado paso a paso:
                { titulo, intro, proyecto, pasos: [{ n, titulo, texto, src, pie }] }
                Los mismos pasos aparecen resumidos en la portada.
   - galeria:   [{ src, pie }] — fotografías del trabajo real
   - datos:     [{ num, txt }] — cifras de la unidad (se animan solas)
   - cierre:    párrafo de cierre antes del llamado a la acción
   ============================================================ */

const UNIDADES = {

  /* ---------------------------------------------------------- */
  "servicios": {
    id: "servicios",
    numero: "UNIDAD 01",
    nombre: "Servicios y Mantenimiento",
    lema: "El diagnóstico que le dice qué hacer, y la cuadrilla que lo hace",
    intro: "Mantener una subestación no es esperar a que algo falle. Ejecutamos mantenimiento preventivo y correctivo de subestaciones de potencia y distribución —transformadores, disyuntores, protecciones y sistemas auxiliares— con cuadrillas propias y equipos de prueba calibrados. Cada intervención termina en un informe técnico firmado que le permite decidir con datos: qué interviene ahora, qué puede esperar y qué está a punto de costarle una parada.",
    portada: "img/servicios/pruebas-subestacion-campo.jpg",
    servicios: [
      { titulo: "Mantenimiento integral de subestaciones y switchgears",
        detalle: "Intervención programada de patio y celdas: limpieza, ajuste, verificación de mecanismos y pruebas funcionales, con protocolo firmado de cada equipo." },
      { titulo: "Transformadores de potencia",
        detalle: "Pruebas de aislamiento, relación de transformación y resistencia de devanados; análisis y tratamiento de aceite; mantenimiento del cambiador de tomas." },
      { titulo: "Diagnóstico avanzado de transformadores",
        detalle: "DFR/FDS para evaluar humedad en el papel aislante, Tan Delta, balance magnético y desmagnetización — el estado interno sin abrir la máquina." },
      { titulo: "Disyuntores e interruptores",
        detalle: "Tiempos de operación, resistencia de contactos, presión y calidad del SF6, mecanismos de mando y mantenimiento mayor en sitio." },
      { titulo: "Protecciones y relés",
        detalle: "Inyección secundaria y prueba funcional de los relés, verificación de los ajustes contra el estudio de coordinación y descarga del registro de eventos." },
      { titulo: "Análisis de aceite dieléctrico",
        detalle: "Ensayos en laboratorio acreditado ISO 17025: gases disueltos, rigidez dieléctrica y propiedades fisicoquímicas del aceite." },
      { titulo: "Pruebas en cables de media y alta tensión",
        detalle: "Descargas parciales, VLF y Tangente Delta: localiza la degradación del aislamiento antes de que se convierta en una falla en servicio." },
      { titulo: "Termografía y calidad de energía",
        detalle: "Inspección infrarroja de tableros, motores y conexiones; registro y análisis de perturbaciones de la red." },
      { titulo: "Sistemas auxiliares y banco de baterías",
        detalle: "Verificación del sistema de corriente continua que alimenta protecciones y mandos: estado y capacidad real de cada batería del banco." },
      { titulo: "Limpieza y lavado de estructuras y aisladores",
        detalle: "Lavado a presión de estructuras, cadenas de aisladores y bushings para reducir el riesgo de flameo por contaminación salina o ambiental." },
      { titulo: "Mallas de puesta a tierra",
        detalle: "Construcción y mantenimiento, con medición de resistencia y verificación de continuidad — la base de la seguridad de toda la instalación." }
    ],
    secuencia: {
      titulo: "Un mantenimiento de subestación, paso a paso",
      intro: "Una intervención programada sobre un transformador de potencia WEG en su bahía: del reconocimiento del equipo a dejarlo listo para volver a servicio. Todo trabajo sobre el tanque se ejecuta con arnés y línea de vida, con la bahía desenergizada y puesta a tierra antes de subir.",
      proyecto: "Transformador de potencia WEG · mayo de 2025",
      pasos: [
        { n: "01", titulo: "Reconocimiento del equipo",
          texto: "Inspección visual del transformador en su bahía: tanque, radiadores, conservador y conexiones antes de intervenir.",
          src: "img/servicios/mtto-trafo-01-equipo.jpg",
          pie: "Transformador de potencia en su bahía, antes de la intervención" },
        { n: "02", titulo: "Bushings de alta tensión",
          texto: "Trabajo sobre el lado de alta: limpieza, verificación de sellos y ajuste de las conexiones en el bushing H3.",
          src: "img/servicios/mtto-trafo-02-bushings.jpg",
          pie: "Intervención en el bushing H3 de alta tensión, con arnés y línea de vida" },
        { n: "03", titulo: "Bornes X0 y X1",
          texto: "Revisión de los bornes de baja tensión y del sistema de refrigeración forzada: ventiladores M101 y M102.",
          src: "img/servicios/mtto-trafo-03-bornes.jpg",
          pie: "Bornes X0 y X1 junto a los ventiladores de refrigeración forzada" },
        { n: "04", titulo: "Ajuste de conexiones",
          texto: "Ajuste y verificación del conexionado de potencia. Una conexión floja es el origen del punto caliente que aparece meses después en la termografía.",
          src: "img/servicios/mtto-trafo-04-conexiones.jpg",
          pie: "Ajuste de las conexiones de potencia sobre el transformador" },
        { n: "05", titulo: "Equipo listo para operar",
          texto: "Cierre de la intervención, retiro de las puestas a tierra temporales y entrega del protocolo firmado de todo lo ejecutado.",
          src: "img/servicios/mtto-trafo-05-panoramica.jpg",
          pie: "La bahía completa, con el transformador listo para volver a servicio" }
      ]
    },
    galeria: [
      { src: "img/servicios/pruebas-subestacion-campo.jpg", pie: "Cuadrilla ejecutando pruebas eléctricas en subestación energizada" },
      { src: "img/servicios/sub-disyuntor-altura.jpg",      pie: "Mantenimiento de disyuntor sobre la estructura de la subestación" },
      { src: "img/servicios/sub-disyuntores-cuadrilla.jpg", pie: "Cuadrilla interviniendo disyuntores en altura, con el equipo de prueba en sitio" },
      { src: "img/servicios/sub-inyeccion-secundaria.jpg",  pie: "Pruebas por inyección secundaria sobre relés de protección" },
      { src: "img/servicios/sub-seccionadores.jpg",         pie: "Transformadores de instrumento y seccionadores en el pórtico de la subestación" },
      { src: "img/servicios/sub-banco-baterias.jpg",        pie: "Prueba del banco de baterías del sistema auxiliar de corriente continua" },
      { src: "img/servicios/sub-lavado-presion.jpg",        pie: "Lavado a presión de estructuras en la subestación" },
      { src: "img/servicios/sub-panoramica-cuadrilla.jpg",  pie: "Frente de trabajo completo durante un mantenimiento programado" },
      { src: "img/servicios/sub-frente-trabajo.jpg",        pie: "Zona de trabajo señalizada y cuadrilla desplegada en la subestación" },
      { src: "img/servicios/mtto-trafo-02-bushings.jpg",    pie: "Intervención en el bushing H3 de alta tensión" },
      { src: "img/servicios/mtto-trafo-altura.jpg",         pie: "Trabajo en altura sobre el tanque, con arnés y línea de vida" },
      { src: "img/servicios/mtto-trafo-03-bornes.jpg",      pie: "Bornes X0 y X1 del transformador de potencia" },
      { src: "img/servicios/mtto-trafo-04-conexiones.jpg",  pie: "Ajuste de las conexiones de potencia" },
      { src: "img/servicios/mtto-trafo-refrigeracion.jpg",  pie: "Sistema de refrigeración forzada del transformador" },
      { src: "img/servicios/mtto-trafo-01-equipo.jpg",      pie: "Transformador de potencia WEG en su bahía" },
      { src: "img/servicios/mtto-trafo-bahia.jpg",          pie: "Vista de la bahía con el transformador intervenido" },
      { src: "img/servicios/mtto-trafo-05-panoramica.jpg",  pie: "Panorámica de la subestación tras la intervención" },
      { src: "img/servicios/pruebas-transformadores.jpg",   pie: "Pruebas de diagnóstico sobre transformador de potencia" },
      { src: "img/servicios/analisis-aceite.jpg",           pie: "Toma de muestra de aceite dieléctrico para análisis de laboratorio" },
      { src: "img/servicios/pruebas-cables.jpg",            pie: "Ensayo de descargas parciales en cable de media tensión" },
      { src: "img/servicios/termografia-subestacion.jpg",   pie: "Inspección termográfica de patio de subestación" },
      { src: "img/servicios/termografia-tablero.jpg",       pie: "Termografía de tablero: puntos calientes antes de que sean falla" },
      { src: "img/servicios/termografia-motor-1.jpg",       pie: "Termografía de motor industrial en operación" },
      { src: "img/servicios/termografia-motor-2.jpg",       pie: "Seguimiento térmico comparativo del mismo activo" },
      { src: "img/servicios/mantenimiento-subestacion-69kv.jpg", pie: "Mantenimiento en subestación de 69 kV" },
      { src: "img/servicios/mantenimiento-subestaciones.jpg",    pie: "Trabajo programado de mantenimiento de subestación" },
      { src: "img/servicios/comisionado-celdas.jpg",        pie: "Comisionado de celdas de media tensión" },
      { src: "img/servicios/pruebas-electricas.jpg",        pie: "Instrumentación de prueba desplegada en sitio" },
      { src: "img/servicios/pruebas-generadores.jpg",       pie: "Pruebas sobre grupo generador" }
    ],
    datos: [
      { num: "17025", txt: "Laboratorio acreditado ISO para análisis de aceite" },
      { num: "24/7",  txt: "Disponibilidad de soporte técnico" },
      { num: "500 kV",txt: "Nivel de tensión más alto intervenido" }
    ],
    cierre: "Cada intervención termina con un protocolo firmado: qué se midió, con qué instrumento, cuál fue el resultado y qué se recomienda. Ese expediente es suyo, y sirve ante cualquier auditoría, aseguradora o ente de control. ¿Tiene un mantenimiento programado o una emergencia? Envíenos el unifilar y el alcance: respondemos con propuesta técnica y cronograma."
  },

  /* ---------------------------------------------------------- */
  "proyectos-industriales": {
    id: "proyectos-industriales",
    numero: "UNIDAD 02",
    nombre: "Proyectos Industriales",
    lema: "De la ingeniería en papel a la planta energizada",
    intro: "Ejecutamos el proyecto eléctrico completo con un solo responsable: estudios, ingeniería de detalle, suministro, montaje electromecánico, integración y puesta en marcha. Sin repartir la culpa entre tres contratistas cuando algo no coincide en campo.",
    portada: "img/proyectos/montaje-transformador-grua.jpg",
    servicios: [
      { titulo: "Montajes electromecánicos",
        detalle: "Estructuras, equipo primario, canalizaciones y conexionado, con control de torque, alineación y trazabilidad de materiales." },
      { titulo: "Equipos primarios de subestación",
        detalle: "Suministro e instalación de transformadores, interruptores, seccionadores y pararrayos, con las pruebas de recepción correspondientes." },
      { titulo: "Celdas de media tensión",
        detalle: "Suministro, montaje e integración de celdas, incluyendo el comisionado de sus protecciones y enclavamientos." },
      { titulo: "Estudios eléctricos e ingeniería",
        detalle: "Ingeniería básica y de detalle, flujos de carga, cortocircuito y coordinación de protecciones — modelado en ETAP antes de tocar el sistema real." },
      { titulo: "Sistemas SCADA",
        detalle: "Implementación de la supervisión y control del sistema eléctrico, con integración de los equipos de campo al centro de control." },
      { titulo: "Transformadores: montaje, secado y diagnóstico",
        detalle: "Montaje en sitio, secado en campo y diagnóstico integral antes de energizar — la puesta en servicio con el equipo en condición verificada." },
      { titulo: "Comisionado y puesta en marcha",
        detalle: "Baja, media y alta tensión: pruebas punto a punto, verificación funcional y energización asistida." }
    ],
    secuencia: {
      titulo: "Un montaje electromecánico, paso a paso",
      intro: "El izaje y montaje de un grupo electrógeno sobre su base definitiva, maniobrando entre estructuras y líneas existentes. Cada maniobra se ejecuta con plan de izaje, aparejos con certificación vigente y el área acordonada bajo supervisión permanente.",
      proyecto: "Grupo electrógeno de 915 kVA · marzo de 2025",
      pasos: [
        { n: "01", titulo: "Posicionamiento",
          texto: "Grúa telescópica estabilizada sobre terreno compactado, con el equipo aún sobre la plataforma de transporte.",
          src: "img/proyectos/izaje-01-posicionamiento.jpg",
          pie: "Grúa telescópica estabilizada junto al punto de descarga" },
        { n: "02", titulo: "Aparejamiento",
          texto: "Eslingas y grilletes con certificación vigente, verificación de los puntos de izaje del equipo y prueba de carga en suspensión.",
          src: "img/proyectos/izaje-02-aparejamiento.jpg",
          pie: "Aparejamiento del grupo electrógeno antes del izaje" },
        { n: "03", titulo: "Izaje",
          texto: "Maniobra controlada por encima de estructuras y líneas existentes, con vientos de guía y área acordonada.",
          src: "img/proyectos/izaje-03-izaje.jpg",
          pie: "Grupo electrógeno suspendido durante la maniobra de izaje" },
        { n: "04", titulo: "Descenso",
          texto: "Aproximación milimétrica hasta la base, sorteando el poste y la estructura del área de descarga.",
          src: "img/proyectos/izaje-04-descenso.jpg",
          pie: "Descenso del equipo hacia su base definitiva" },
        { n: "05", titulo: "Instalación",
          texto: "Nivelación sobre la losa, anclaje y conexionado. De aquí siguen las pruebas de arranque y la puesta en servicio.",
          src: "img/proyectos/izaje-05-instalado.jpg",
          pie: "Grupo electrógeno posicionado sobre su base, listo para anclaje y conexionado" }
      ]
    },
    galeria: [
      { src: "img/proyectos/izaje-03-izaje.jpg",            pie: "Grupo electrógeno de 915 kVA suspendido durante el izaje" },
      { src: "img/proyectos/izaje-grua-sitio.jpg",          pie: "Grúa telescópica y equipo en el punto de descarga" },
      { src: "img/proyectos/izaje-02-aparejamiento.jpg",    pie: "Aparejamiento con eslingas y grilletes certificados" },
      { src: "img/proyectos/izaje-carga-suspendida.jpg",    pie: "Carga suspendida sobre el área de maniobra" },
      { src: "img/proyectos/izaje-maniobra-estructuras.jpg",pie: "Maniobra entre estructuras y líneas existentes" },
      { src: "img/proyectos/izaje-04-descenso.jpg",         pie: "Descenso del grupo hacia su base" },
      { src: "img/proyectos/izaje-05-instalado.jpg",        pie: "Equipo posicionado sobre la losa" },
      { src: "img/proyectos/planta-autogeneracion-exterior.jpg", pie: "Planta de autogeneración: sala de generadores, BESS y edificio de control" },
      { src: "img/proyectos/montaje-electromecanico.jpg",   pie: "Montaje electromecánico en obra" },
      { src: "img/proyectos/montaje-estructuras-1.jpg",     pie: "Izaje y montaje de estructuras de patio" },
      { src: "img/proyectos/montaje-estructuras-2.jpg",     pie: "Armado de pórticos y soportería" },
      { src: "img/proyectos/montaje-equipo-primario-1.jpg", pie: "Instalación de equipo primario de subestación" },
      { src: "img/proyectos/montaje-equipo-primario-2.jpg", pie: "Posicionamiento y nivelación de equipo primario" },
      { src: "img/proyectos/montaje-transformador-grua.jpg",pie: "Maniobra de montaje de transformador de potencia" },
      { src: "img/proyectos/transformadores-2500kva-patio.jpg", pie: "Transformadores de 2.500 kVA instalados en patio" },
      { src: "img/proyectos/celdas-media-tension.jpg",      pie: "Celdas de media tensión montadas en sala eléctrica" },
      { src: "img/proyectos/celdas-schneider-mt.jpg",       pie: "Celdas Schneider Electric de media tensión" },
      { src: "img/proyectos/equipo-primario.jpg",           pie: "Equipo primario energizado tras el comisionado" },
      { src: "img/proyectos/montaje-campo.jpg",             pie: "Trabajo de montaje en campo" },
      { src: "img/proyectos/comisionado-tableros.jpg",      pie: "Comisionado de tableros de protección y control" }
    ],
    datos: [
      { num: "69 kV",  txt: "Subestaciones ejecutadas llave en mano" },
      { num: "915 kVA",txt: "Último grupo electrógeno montado e instalado" },
      { num: "2500",   txt: "kVA por transformador instalado en patio" }
    ],
    cierre: "Un solo contrato, un solo interlocutor y un solo responsable del resultado. Es la razón por la que nuestros clientes nos vuelven a llamar para la siguiente etapa."
  },

  /* ---------------------------------------------------------- */
  "utilities": {
    id: "utilities",
    numero: "UNIDAD 03",
    nombre: "Proyectos de Infraestructura — Utilities",
    lema: "La experiencia que se construye en el sistema nacional",
    intro: "Trabajamos para las entidades que operan la red del país. La expansión del Sistema de Protección Sistémica del Ecuador —el esquema que actúa en menos de 200 milisegundos para evitar apagones en cascada— fue ejecutada por este equipo en tres etapas consecutivas.",
    portada: "img/proyectos/pruebas-reles-inyeccion.jpg",
    servicios: [
      { titulo: "Ingeniería de detalle para entidades del Estado",
        detalle: "Diseño conforme a la normativa y a los requerimientos técnicos del contratante, con la documentación que exige el proceso público." },
      { titulo: "Tableros de protección y control",
        detalle: "Fabricación e instalación: diseño del tablero, cableado, pruebas en fábrica (FAT) y montaje en sitio." },
      { titulo: "Relés de protección",
        detalle: "Suministro, parametrización y configuración, incluidos esquemas sobre IEC 61850." },
      { titulo: "Pruebas por inyección secundaria",
        detalle: "Verificación de relés y medidores inyectando señales reales: se comprueba que la protección actúa como fue calculada." },
      { titulo: "Cortocircuito y coordinación de protecciones",
        detalle: "Estudios que determinan los ajustes: qué debe disparar, en qué tiempo y en qué orden, para aislar la falla sin apagar lo que no corresponde." },
      { titulo: "Comisionado y puesta en marcha",
        detalle: "Integración a los centros de control, habilitación de disparos y pruebas de extremo a extremo del esquema completo." }
    ],
    galeria: [
      { src: "img/proyectos/pruebas-reles-inyeccion.jpg",   pie: "Pruebas de relés de protección por inyección secundaria" },
      { src: "img/proyectos/comisionado-tableros.jpg",      pie: "Comisionado de celdas con equipo de prueba Megger TRAX" },
      { src: "img/casos/sps-fase2.jpg",                     pie: "Sistema de Protección Sistémica — Fase II" },
      { src: "img/sps/coca-codo-sinclair-presa.jpg",        pie: "Coca Codo Sinclair, central integrada al SPS (foto de referencia)" },
      { src: "img/sps/coca-codo-casa-maquinas.jpg",         pie: "Casa de máquinas de Coca Codo Sinclair (foto de referencia)" },
      { src: "img/sps/hidroelectrica-agoyan.jpg",           pie: "Central hidroeléctrica Agoyán (foto de referencia)" },
      { src: "img/casos/subestacion-yambo-atuntaqui.jpg",   pie: "Subestaciones Yambo y Atuntaqui, del montaje al comisionado" },
      { src: "img/empresa/subestacion-transformador-patio.jpg", pie: "Transformador de patio en subestación" },
      { src: "img/proyectos/celdas-media-tension.jpg",      pie: "Celdas de media tensión en sala eléctrica" },
      { src: "img/proyectos/equipo-primario.jpg",           pie: "Equipo primario de subestación en servicio" }
    ],
    datos: [
      { num: "200",  txt: "Milisegundos: tiempo de actuación del SPS" },
      { num: "3",    txt: "Etapas consecutivas del SPS ejecutadas" },
      { num: "7",    txt: "Subestaciones del SNI intervenidas en SPS3" }
    ],
    cierre: "Somos una de las pocas empresas nacionales con experiencia comprobada en protección de área amplia. Cuando el alcance es el sistema del país, la referencia ya está escrita."
  },

  /* ---------------------------------------------------------- */
  "generacion": {
    id: "generacion",
    numero: "UNIDAD 04",
    nombre: "Generación Industrial",
    lema: "Que el corte de red sea un dato del informe, no una parada de planta",
    intro: "Diseñamos, suministramos, instalamos y mantenemos el respaldo energético de su operación. Dimensionado sobre su perfil de carga real —no por catálogo— y con la transferencia resuelta al nivel que su proceso exige: desde una automática convencional hasta sincronismo en transición cerrada, donde la planta ni se entera del cambio.",
    portada: "img/generacion/edificio-autogeneracion.jpg",
    servicios: [
      { titulo: "Venta y renting de generadores",
        detalle: "Equipos propios y de alta potencia en alquiler, para picos de demanda, contingencias o proyectos temporales." },
      { titulo: "Instalación y transferencias automáticas",
        detalle: "Montaje del grupo, obra eléctrica asociada y tablero de transferencia con la lógica de operación que el proceso requiere." },
      { titulo: "Sincronismo en transición cerrada",
        detalle: "El generador se sincroniza con la red antes de tomar la carga: el retorno a red pública ocurre sin interrupción perceptible para el proceso." },
      { titulo: "Mantenimiento preventivo y correctivo",
        detalle: "Rutinas programadas, atención de fallas y pruebas con carga que confirman que el equipo va a arrancar el día que haga falta." },
      { titulo: "Contratos de mantenimiento y control operativo",
        detalle: "Cobertura contratada con indicadores y reporte periódico del estado de cada equipo." },
      { titulo: "Transformadores hasta 500 kVA",
        detalle: "Mantenimiento del transformador asociado a la instalación de respaldo." },
      { titulo: "Electricista especializado in house",
        detalle: "Personal técnico destacado en su planta, con conocimiento del sistema y capacidad de respuesta inmediata." }
    ],
    galeria: [
      { src: "img/generacion/edificio-autogeneracion.jpg",   pie: "Edificio de autogeneración con generadores y radiadores" },
      { src: "img/generacion/sala-generadores-real.jpg",     pie: "Sala de generadores en operación" },
      { src: "img/generacion/sala-generadores.jpg",          pie: "Disposición de grupos electrógenos en sala" },
      { src: "img/generacion/generador-cummins.jpg",         pie: "Grupo generador instalado y conexionado" },
      { src: "img/generacion/generador-contenedor-sitio.jpg",pie: "Generador contenerizado desplegado en sitio" },
      { src: "img/generacion/generadores-radiadores.jpg",    pie: "Sistema de disipación de los grupos" },
      { src: "img/generacion/generadores-escape.jpg",        pie: "Sistema de escape de la sala de generación" },
      { src: "img/servicios/pruebas-generadores.jpg",        pie: "Pruebas eléctricas sobre grupo generador" },
      { src: "img/generacion/servicio-generadores.jpg",      pie: "Servicio de mantenimiento sobre grupo generador" },
      { src: "img/generacion/central-termica-sala-maquinas.jpg", pie: "Sala de máquinas de central térmica" },
      { src: "img/generacion/casa-maquinas-exterior.jpg",    pie: "Casa de máquinas — vista exterior" },
      { src: "img/generacion/bess-contenedores.jpg",         pie: "Almacenamiento BESS en contenedores con transformadores" },
      { src: "img/generacion/planta-exterior-bess.jpg",      pie: "Planta con generación y almacenamiento integrados" }
    ],
    datos: [
      { num: "12",   txt: "MVA de respaldo diseñados para un solo cliente" },
      { num: "2",    txt: "MVA por generador suministrado" },
      { num: "24/7", txt: "Soporte durante la crisis energética de 2024" }
    ],
    cierre: "Durante los apagones nacionales de 2024 nuestros clientes con sincronismo en transición cerrada no detuvieron la operación. El respaldo no se improvisa el día del corte: se diseña antes."
  }
};
