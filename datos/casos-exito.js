/* ============================================================
   CASOS DE ÉXITO — INPROCONFI S.A.
   ============================================================
   Cada caso cuenta una historia en tres actos:
   RETO → SOLUCIÓN → BENEFICIO

   Para AGREGAR un caso de éxito:
   1. Copie un bloque { ... }, (de llave a llave, con la coma)
   2. Péguelo antes del corchete final ]
   3. Edite los campos
   4. Coloque la fotografía en la carpeta  img/casos/
      y escriba su nombre en el campo "imagen"

   Campos:
   - cliente:   nombre del cliente o proyecto
   - sector:    industria del cliente (aparece como etiqueta)
   - titulo:    frase corta del logro principal
   - reto:      qué problema o necesidad tenía el cliente
   - solucion:  lista de trabajos ejecutados (una línea por elemento)
   - beneficio: qué ganó el cliente al contratar a Inproconfi
   - imagen:    foto de portada de la tarjeta (dentro de img/casos/)
   - fotos:     OPCIONAL, lista de fotos adicionales para la ficha
                desplegable (galería). Si no se indica, la ficha
                usa solo la foto de portada.

   Al hacer clic en una tarjeta se abre la FICHA DEL CASO con la
   galería de fotos y el detalle completo; desde ahí se puede
   guardar como PDF con el botón de la ficha.
   ============================================================ */

const CASOS_EXITO = [
  {
    cliente: "SPS del Ecuador — CELEC EP Transelectric / CENACE",
    sector: "Sector Eléctrico Nacional",
    titulo: "La estabilidad del sistema eléctrico del Ecuador, en nuestras manos",
    reto: "El Sistema de Protección Sistémica del SNI debía expandirse para cubrir el sistema de transmisión de 500 kV y las nuevas grandes centrales. Un proyecto de máxima responsabilidad: el SPS actúa en menos de 200 milisegundos para evitar apagones en cascada en todo el país.",
    solucion: [
      "Fase II (2019): instalación y puesta en servicio de la ampliación que incorporó el enlace de 500 kV y las centrales Coca Codo Sinclair (1.500 MW) y Minas San Francisco, integradas a los centros de control de CENACE y Transelectric",
      "SPS3 Etapa 1: adquisición y puesta en servicio de equipos — pruebas de aceptación en fábrica, instalación e integración en siete subestaciones del SNI y habilitación de disparos; sistema integralmente operativo desde enero de 2025",
      "SPS3 Etapa 2: en ejecución actualmente"
    ],
    beneficio: "Tres etapas consecutivas confiadas al mismo contratista, cada una desarrollada conforme a los cronogramas y requerimientos de CELEC EP – Transelectric y CENACE. Somos una de las pocas empresas nacionales con experiencia comprobada en protección de área amplia.",
    imagen: "img/casos/sps-fase2.jpg",
    fotos: ["img/casos/sps-fase2.jpg", "img/sps/coca-codo-sinclair-presa.jpg", "img/sps/coca-codo-casa-maquinas.jpg"]
  },
  {
    cliente: "Subestaciones Yambo y Atuntaqui",
    sector: "Infraestructura Eléctrica",
    titulo: "Dos subestaciones energizadas, de la obra civil al comisionado",
    reto: "Poner en servicio dos subestaciones nuevas exigía coordinar obra civil, montaje electromecánico y comisionado sin desviaciones de cronograma.",
    solucion: [
      "Montaje electromecánico y obra civil",
      "Comisionado de equipo primario",
      "Comisionado de celdas de media tensión"
    ],
    beneficio: "Ambas subestaciones quedaron energizadas y operativas con pruebas documentadas de cada equipo: un expediente completo desde el montaje hasta la puesta en servicio, listo para cualquier auditoría.",
    imagen: "img/casos/subestacion-yambo-atuntaqui.jpg",
    fotos: ["img/casos/subestacion-yambo-atuntaqui.jpg", "img/empresa/historia-equipo-campo.jpg", "img/proyectos/montaje-electromecanico.jpg"]
  },
  {
    cliente: "Kimberly Clark",
    sector: "Industria de Consumo",
    titulo: "Una subestación de 69 kV llave en mano, integrada a la red de CNEL",
    reto: "La planta necesitaba su propio patio de seccionamiento a 69 kV y una subestación confiable, con protecciones coordinadas e integración total al sistema de la distribuidora.",
    solucion: [
      "Diseño y construcción del patio de seccionamiento 69 kV y la subestación eléctrica",
      "Diseño y construcción de tableros de protecciones y parametrización de relés",
      "Integración al SCADA de CNEL y puesta en servicio"
    ],
    beneficio: "Kimberly Clark opera hoy con suministro en alta tensión bajo su control: menor costo de energía, protecciones coordinadas y visibilidad total de su sistema eléctrico.",
    imagen: "img/casos/kimberly-clark.jpg",
    fotos: ["img/casos/kimberly-clark.jpg", "img/empresa/subestacion-portico.jpg", "img/proyectos/equipo-primario.jpg"]
  },
  {
    cliente: "Nicovita",
    sector: "Industria Acuícola",
    titulo: "Confiabilidad eléctrica que se tradujo en menos pérdidas de producto",
    reto: "Una operación de producción continua donde cada interrupción eléctrica significa pérdidas de producto y horas de trabajo irrecuperables.",
    solucion: [
      "Mantenimiento integral a la subestación de 69 kV y al sistema de media tensión de 13.8 kV",
      "Diseño y renting de sistemas de respaldo de energía por 2 MVA",
      "Implementación de proyectos eléctricos para ampliación de producción"
    ],
    beneficio: "En palabras del cliente: procesos optimizados, reducción significativa de las pérdidas de producto y ahorro de innumerables horas de trabajo. La confiabilidad dejó de ser una preocupación.",
    imagen: "img/casos/nicovita.jpg",
    fotos: ["img/casos/nicovita.jpg", "img/servicios/mantenimiento-subestacion-69kv.jpg", "img/servicios/pruebas-electricas.jpg"]
  },
  {
    cliente: "Skretting",
    sector: "Industria de Alimentos",
    titulo: "12 MVA de respaldo diseñados para no detener la producción",
    reto: "Asegurar la continuidad de una planta de alimentos ante cualquier falla de la red pública, dimensionando el respaldo con criterio de ingeniería y no por catálogo.",
    solucion: [
      "Ingeniería de detalle de sistemas de respaldo de energía por 12 MVA",
      "Suministro de generadores eléctricos de 2 MVA",
      "Mantenimiento a generadores y estudios eléctricos"
    ],
    beneficio: "La planta cuenta con un respaldo dimensionado a su demanda real y mantenido por el mismo equipo que lo diseñó: una sola responsabilidad, cero excusas.",
    imagen: "img/casos/skretting.jpg",
    fotos: ["img/casos/skretting.jpg", "img/casos/skretting-pruebas-baterias.jpg", "img/generacion/sala-generadores-real.jpg", "img/generacion/servicio-generadores.jpg", "img/casos/skretting-logo.jpg"]
  },
  {
    cliente: "Grupo Difare e Inbalnor",
    sector: "Farmacéutico / Industrial",
    titulo: "La crisis energética de 2024 pasó desapercibida",
    reto: "Los apagones nacionales de 2024 amenazaban la operación logística y productiva. La transferencia a generación debía ser imperceptible para el proceso.",
    solucion: [
      "Suministro e instalación de sistema de sincronismo de transición cerrada",
      "Mantenimiento de generadores eléctricos",
      "Soporte 24/7 durante toda la crisis energética"
    ],
    beneficio: "“Gracias a Inproconfi y su servicio 24/7, la crisis de energía en Ecuador en el 2024 pasó desapercibida.” — Grupo Difare. La operación no se detuvo ni un minuto.",
    imagen: "img/casos/difare-inbalnor.jpg",
    fotos: ["img/casos/difare-inbalnor.jpg", "img/generacion/generador-contenedor-sitio.jpg", "img/generacion/sala-generadores-real.jpg", "img/casos/difare-logo.jpg"]
  }
];
