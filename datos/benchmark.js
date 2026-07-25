/* ============================================================
   BENCHMARK COMPETITIVO — USO INTERNO INPROCONFI
   ============================================================
   NO publicar ni mostrar a clientes. Alimenta benchmark.html.
   Para refrescar: pida a Claude "actualiza el benchmark"
   (usa las skills competitor-profiling y prospecting).
   Última curación: 10 de julio de 2026
   ============================================================ */

/* --- 1. Competidores (del mapeo de 13 en 3 niveles) --- */
const COMPETIDORES = [
  {
    nombre: "DeltaElectric", nivel: 1, web: "deltaelectric.com.ec",
    servicios: "Protección, control y automatización industrial y de subestaciones; SCADA; estudios y pruebas eléctricas.",
    fortaleza: "El más parecido al grupo en Power Automation y protecciones; portafolio público sólido.",
    debilidad: "Sin generación industrial propia ni obra civil: no puede sostener la operación del cliente ni ejecutar llave en mano.",
    ganar: "«Cuando el estudio detecte el problema, ¿quién se lo corrige, quién le pone el respaldo y quién construye la solución?»"
  },
  {
    nombre: "HVTESTS", nivel: 1, web: "hvtests.com",
    servicios: "Estudios eléctricos, comisionado de subestaciones, pruebas en cables MV, descargas parciales, SCADA eléctrico, renta de equipos de prueba.",
    fortaleza: "Competidor técnico fuerte en diagnóstico; se promociona en descargas parciales y relés.",
    debilidad: "Alquila equipos de prueba; sin respaldo de fabricante equiparable, sin generación, sin obra.",
    ganar: "«¿Su proveedor de pruebas tiene respaldo oficial del fabricante de los equipos con los que mide, o solo los alquila?» (EMS = VAP oficial de Megger)"
  },
  {
    nombre: "TEAN Ingeniería", nivel: 1, web: "tean-ingenieria.com",
    servicios: "Diseño de proyectos eléctricos MT/BT, instalaciones industriales y comerciales, mantenimiento, automatización y control.",
    fortaleza: "Cercano en proyectos industriales privados; compite en cuentas medianas.",
    debilidad: "Sin laboratorio, sin protección sistémica, sin credenciales de canal públicas.",
    ganar: "Evidencia de máxima responsabilidad: SPS a nivel país vs. proyectos comerciales."
  },
  {
    nombre: "TecniEléctrica", nivel: 1, web: "tecnielectrica.com.ec",
    servicios: "Soluciones eléctricas integrales, subestaciones, transformadores, automatización, líneas de distribución/transmisión, solar.",
    fortaleza: "Portafolio amplio, presencia en líneas y solar.",
    debilidad: "Generalista: menos especialización demostrada en Power Automation y diagnóstico avanzado.",
    ganar: "Especialización con certificaciones: EcoXpert + VAP Megger + laboratorio ISO 17025 vs. 'hacemos de todo'."
  },
  {
    nombre: "Elecsatec", nivel: 1, web: "elecsatec.net",
    servicios: "Pruebas SAT en sistemas DC para subestaciones EAT, SFRA en transformadores, adaptación de interruptores, calibración y pruebas de relés de generador.",
    fortaleza: "Técnico de nicho en pruebas especializadas y protecciones de generador.",
    debilidad: "Nicho estrecho; sin capacidad de ejecutar el proyecto completo ni sostener la operación.",
    ganar: "«Cuando la prueba salga mal, ¿quién se lo repara y quién le sostiene la operación mientras tanto?»"
  },
  {
    nombre: "ITSEL", nivel: 2, web: "itsel.com.ec",
    servicios: "Se posiciona en protección, control, automatización y soluciones eléctricas avanzadas.",
    fortaleza: "Discurso técnico alineado al nuestro.",
    debilidad: "Poca evidencia pública de portafolio ejecutado.",
    ganar: "Pedir referencias comparables: nosotros mostramos actas, ellos discurso."
  },
  {
    nombre: "Elecdor / Elecnor Ecuador", nivel: 2, web: "elecnor.ec",
    servicios: "Construcción y mantenimiento de líneas de transmisión y subestaciones hasta 500 kV.",
    fortaleza: "Músculo para infraestructura grande; respaldo de multinacional.",
    debilidad: "Dimensionado para megaproyectos: lento y caro para el cliente industrial mediano; sin postventa cercana 24/7.",
    ganar: "«¿Quién le contesta el teléfono un domingo a las 2 a.m.?»"
  },
  {
    nombre: "SDMEL", nivel: 2, web: "sdmel.com",
    servicios: "Grupos electrógenos, mantenimiento predictivo/preventivo/correctivo, banco de carga, sincronismo, automatización IoT/SCADA, llave en mano.",
    fortaleza: "Competidor directo en generación industrial y sincronismo.",
    debilidad: "Sin estudios eléctricos profundos ni protecciones certificadas; el generador es su producto, no el sistema.",
    ganar: "«¿El proveedor del generador le firmó el estudio de coordinación de protecciones? ¿Quién responde si al transferir se le cae la planta?»"
  },
  {
    nombre: "Energy Power", nivel: 2, web: "energypower.ec",
    servicios: "Mantenimiento y reparación de generadores, sincronismo, tableros de transferencia, mantenimiento de transformadores, alquiler, cobertura nacional.",
    fortaleza: "Fuerte en postventa de generadores y alquiler; cobertura.",
    debilidad: "Orientado a producto y horas de servicio; sin ingeniería de sistema ni diagnóstico certificado.",
    ganar: "Vender continuidad medible del sistema completo, no horas técnico ni fierros."
  },
  {
    nombre: "Power Service Generation", nivel: 2, web: "powersergen.com",
    servicios: "Mantenimiento, instalación, programación y asesoría en grupos electrógenos; transferencias, sincronismo, cabinas insonoras, ductos de ventilación.",
    fortaleza: "Muy cercano en generación y soluciones asociadas (ventilación, cabinas).",
    debilidad: "Alcance limitado al entorno del generador.",
    ganar: "Del generador a la barra de 13.8 kV: nosotros respondemos por todo el sistema eléctrico."
  },
  {
    nombre: "Poweron", nivel: 2, web: "poweron.com.ec",
    servicios: "Alquiler, operación y mantenimiento de grupos electrógenos; tableros de distribución, sincronismo, celdas MT/BT; foco petróleo/minería/energía.",
    fortaleza: "Disponibilidad rápida de equipos en renta; fuerte cuando urge capacidad.",
    debilidad: "Modelo de renta: el cliente paga para siempre; sin diagnóstico ni ingeniería de fondo.",
    ganar: "TCO: comparar renta perpetua vs. sistema propio bien diseñado con payback claro."
  },
  {
    nombre: "Ecuainsetec", nivel: 3, web: "ecuainsetec.com.ec",
    servicios: "Automatización industrial de procesos, venta de marcas de automatización, capacitación, desarrollo de proyectos.",
    fortaleza: "Fuerte en automatización de procesos (no de potencia).",
    debilidad: "Coincidencia baja con nuestro núcleo.",
    ganar: "Potencial ALIADO en cuentas compartidas más que rival — explorar colaboración."
  }
];
/* Nota: EMS Testing aparece en mapas externos como competidor de nivel 1,
   pero ES PARTE DEL GRUPO — comunicar el holding lo saca de la mesa. */

/* --- 2. Matriz quién hace qué (● completo ◐ parcial — no) --- */
const MATRIZ_SERVICIOS = {
  columnas: ["Delta", "HVTESTS", "TEAN", "TecniE.", "Elecsatec", "SDMEL", "GRUPO"],
  filas: [
    { s: "Pruebas y diagnóstico avanzado",      v: ["◐","●","—","◐","●","—","●"] },
    { s: "Laboratorio de aceite ISO 17025",     v: ["—","—","—","—","—","—","●"] },
    { s: "Protecciones y tableros",             v: ["●","◐","◐","◐","◐","—","●"] },
    { s: "SCADA / automatización de potencia",  v: ["●","◐","◐","◐","—","◐","●"] },
    { s: "Estudios eléctricos",                 v: ["●","●","◐","◐","◐","—","●"] },
    { s: "Generación industrial y sincronismo", v: ["—","—","—","—","—","●","●"] },
    { s: "Renta de equipos / generadores",      v: ["—","◐","—","—","—","●","●"] },
    { s: "Obra civil y montaje",                v: ["—","—","◐","◐","—","—","●"] },
    { s: "Contratación pública (SERCOP)",       v: ["◐","◐","—","◐","◐","—","●"] }
  ]
};

/* --- 3. Radar de cuentas ICP (universo sugerido — VALIDAR cada una) ---
   Actualizado 10-jul-2026 con la skill prospecting. Prioridad:
   A = encaje + señal de compra verificada | B = encaje fuerte, señal
   universal (estiaje) | C = encaje parcial. Ciudad = sitio industrial. */
const CUENTAS_ICP = [
  { cuenta: "Pronaca",                    sector: "Alimentos / Balanceados", ciudad: "Quevedo / Quito", prioridad: "A", porque: "Ampliación de planta Quevedo (+55% capacidad, fase multianual): nueva demanda eléctrica que proteger y respaldar", estado: "Sin contactar", contacto: "Vladimir Yépez", cargo: "Gerente de Proyectos", web: "pronaca.com" },
  { cuenta: "NIRSA",                      sector: "Pesquero / Atunero",   ciudad: "Posorja (Guayas)", prioridad: "A", porque: "Nueva planta agroindustrial (apertura 2026) + planta de conservas + harina/aceite en Posorja; perfil gemelo de clientes actuales del grupo", estado: "Sin contactar", contacto: "Roberto Aguirre Ch. (GG, vía referido)", cargo: "Gerente General", web: "nirsa.com" },
  { cuenta: "La Fabril",                  sector: "Alimentos / Aceites",  ciudad: "Manta / Guayaquil", prioridad: "A", porque: "Plan de inversión con eje de SOSTENIBILIDAD ENERGÉTICA — y ya operan Power Monitoring Expert (Schneider)", estado: "Sin contactar", contacto: "Alejandro Maldonado", cargo: "Gte. Proyectos y Sostenibilidad", web: "lafabril.com.ec" },
  { cuenta: "Cervecería Nacional (AB InBev)", sector: "Bebidas",          ciudad: "Guayaquil (Pascuales)", prioridad: "B", porque: "Producción continua, metas corporativas de sostenibilidad (FV/BESS), estándares de clase mundial", estado: "Sin contactar" },
  { cuenta: "Arca Continental / Tonicorp",sector: "Bebidas / Lácteos",    ciudad: "Guayaquil", prioridad: "B", porque: "Cadena de frío crítica y embotellado continuo; pérdidas altas por corte", estado: "Sin contactar" },
  { cuenta: "Tesalia Springs (CBC)",      sector: "Bebidas",              ciudad: "Machachi (Quito)", prioridad: "B", porque: "Embotellado continuo multi-planta; señal: transición declarada a energía 100% renovable en todas sus operaciones", estado: "Sin contactar" },
  { cuenta: "Holcim Ecuador",             sector: "Cemento",              ciudad: "Guayaquil", prioridad: "A", porque: "Planta de Guayaquil EN MODERNIZACIÓN (obra en curso) + USD 30M de capex verde + gerente de producción recién nombrado: agenda técnica nueva", estado: "Sin contactar", contacto: "Ivanoff Rojas", cargo: "Gte. Producción planta Gye", web: "holcim.com.ec" },
  { cuenta: "Papelera Nacional",          sector: "Papel / Cartón",       ciudad: "Marcelino Maridueña (Guayas)", prioridad: "B", porque: "Proceso continuo con cogeneración: terreno natural de sincronismo y protecciones", estado: "Sin contactar" },
  { cuenta: "Grupasa (Grupo Papelero)",   sector: "Papel / Cartón",       ciudad: "Durán", prioridad: "B", porque: "Producción continua de cartón, planta en corredor industrial Durán", estado: "Sin contactar" },
  { cuenta: "Plásticos del Litoral (Plastlit)", sector: "Plásticos",      ciudad: "Guayaquil", prioridad: "B", porque: "Extrusión continua: cada microcorte es scrap directo", estado: "Sin contactar" },
  { cuenta: "Plásticos Rival",            sector: "Plásticos / Tubería",  ciudad: "Guayaquil", prioridad: "B", porque: "Extrusión de gran formato, alta carga instalada", estado: "Sin contactar" },
  { cuenta: "Nestlé Ecuador",             sector: "Alimentos",            ciudad: "Guayaquil", prioridad: "B", porque: "Multinacional con requisitos altos de confiabilidad y proveedores calificados (la certificación EcoXpert/ISO 17025 pesa)", estado: "Sin contactar" },
  { cuenta: "Moderna Alimentos",          sector: "Molinos / Alimentos",  ciudad: "Guayaquil / Cajabamba", prioridad: "B", porque: "Molinos de proceso continuo, múltiples sitios", estado: "Sin contactar" },
  { cuenta: "Fadesa / Envases del Litoral", sector: "Envases / Metalmecánica", ciudad: "Guayaquil", prioridad: "B", porque: "Líneas de conformado continuo, alta demanda y sensibilidad a huecos de tensión", estado: "Sin contactar" },
  { cuenta: "Corporación El Rosado",      sector: "Retail / Logística",   ciudad: "Guayaquil", prioridad: "B", porque: "Centros de distribución con cadena de frío (perfil gemelo de cliente actual del grupo)", estado: "Sin contactar" },
  { cuenta: "Corporación Favorita",       sector: "Retail / Logística",   ciudad: "Amaguaña (Quito)", prioridad: "B", porque: "El CD más grande del país, con generación propia y FV: comprador sofisticado de continuidad", estado: "Sin contactar" },
  { cuenta: "Hospital Clínica Kennedy",   sector: "Salud",                ciudad: "Guayaquil", prioridad: "B", porque: "Carga crítica vital, respaldo normativo obligatorio, 3 sedes", estado: "Sin contactar" },
  { cuenta: "Hospital Metropolitano",     sector: "Salud",                ciudad: "Quito", prioridad: "B", porque: "Hospital privado de referencia; inversión hospitalaria en expansión en el país", estado: "Sin contactar", contacto: "Alejandro Calisto", cargo: "Dir. Infraestructura y Logística", web: "hospitalmetropolitano.org" },
  { cuenta: "Grupo KFC (Int. Food Services)", sector: "Alimentos / Logística", ciudad: "Quito", prioridad: "C", porque: "CD y plantas de proceso; carga media pero multi-sitio", estado: "Sin contactar" },
  { cuenta: "Almacenes TIA (CD)",         sector: "Retail / Logística",   ciudad: "Guayaquil", prioridad: "C", porque: "Centro de distribución nacional; cadena de frío parcial", estado: "Sin contactar" }
];

/* --- 4. Señales y oportunidades (trigger events) --- */
const SENALES = [
  { senal: "CENACE: faltan ~894 MW para el estiaje; 25% probabilidad de déficit", fuente: "Primicias, jul 2026",
    cuentas: "Toda industria sin respaldo firme", accion: "Campaña 'evaluación de continuidad antes del estiaje' a cuentas ICP; usar la noticia de la página como gancho", plazo: "AHORA — el estiaje empieza en octubre" },
  { senal: "Licitación de 2.100 MW en tres proyectos de generación durante 2026", fuente: "Primicias, 2026",
    cuentas: "EPCs y adjudicatarios de los proyectos", accion: "Posicionarse como subcontratista de protecciones, comisionado y pruebas ante los EPC ganadores (modelo B del plan ABM)", plazo: "Seguir adjudicaciones en SERCOP" },
  { senal: "Recuperación de 132,8 MW térmicos (Machala I, Esmeraldas II) ante El Niño", fuente: "Expreso, 2026",
    cuentas: "CELEC unidades de negocio térmicas", accion: "Ofrecer pruebas, diagnóstico y comisionado para las unidades a recuperar", plazo: "Machala I: agosto 2026" },
  { senal: "Procesos de generación declarados desiertos en SERCOP", fuente: "Primicias, jul 2026",
    cuentas: "CELEC / Elecaustro", accion: "Monitorear relanzamientos: condiciones suelen mejorar para el oferente", plazo: "Revisar SERCOP semanal" },
  { senal: "SPS3 en desarrollo por el propio grupo", fuente: "Interno",
    cuentas: "Todas — es la credencial viva", accion: "Usar el presente continuo en cada propuesta: 'ahora mismo protegemos el SNI'", plazo: "Permanente" }
];

/* --- 5. Adjudicaciones públicas SERCOP (benchmark de precios) ---
   SOLO datos verificados. Para ampliar: pida a Claude
   "busca adjudicaciones SERCOP de [competidor]". No inventar montos. */
const ADJUDICACIONES = [
  { proceso: "Instalación y puesta en servicio expansión SPS – Fase II", entidad: "CELEC EP – Transelectric", ganador: "INPROCONFI", monto: "USD 1.159.584", anio: "2019", nota: "Contrato TRA-CON-0045-2019; entregado a plazo, sin penalidades" },
  { proceso: "Adquisición y puesta en servicio equipos SPS3 – Etapa 1", entidad: "CELEC EP – Transelectric", ganador: "INPROCONFI", monto: "USD 1.865.000", anio: "2023", nota: "Contrato TRA-CON-0109-23; en desarrollo" }
];
