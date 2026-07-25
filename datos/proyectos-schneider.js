/* ============================================================
   PROYECTOS CON SCHNEIDER — INPROCONFI S.A.
   ============================================================
   Alimenta el bloque "Proyectos con Schneider" de la sección
   #schneider. Para agregar un proyecto: copie un bloque {...},
   y péguelo antes del corchete final.

   Campos:
   - titulo:   nombre del proyecto (sin cliente si no está autorizado)
   - cliente:  nombre del cliente o descripción genérica del sitio
   - estado:   "Entregado" | "En desarrollo"
   - alcance:  qué se hizo/hace, con las tecnologías Schneider
   - tecnologias: lista corta de productos SE involucrados
   - imagen:   foto del proyecto (img/...)

   Regla: solo proyectos reales. Los nombres de cliente se
   publican únicamente con autorización (como Skretting/Difare).
   ============================================================ */

const PROYECTOS_SCHNEIDER = [
  {
    titulo: "Celdas de media tensión con protecciones PowerLogic",
    cliente: "Planta industrial — Guayaquil",
    estado: "Entregado",
    alcance: "Suministro, montaje y puesta en servicio de celdas Schneider de media tensión con relés de protección PowerLogic: parametrización, pruebas por inyección secundaria y comisionado del tablero completo.",
    tecnologias: ["Celdas MT SM6", "PowerLogic", "Pruebas de inyección secundaria"],
    imagen: "img/proyectos/celdas-schneider-mt.jpg"
  },
  {
    titulo: "Sistema de autogeneración con microred EcoStruxure",
    cliente: "Terminal portuario — Guayaquil",
    estado: "En desarrollo",
    alcance: "Ingeniería de detalle de un sistema de autogeneración con generación térmica, fotovoltaica y almacenamiento BESS, gestionado con EcoStruxure Microgrid Operation y supervisado con EcoStruxure Power Operation — operación en paralelo con la red e isla.",
    tecnologias: ["EcoStruxure Microgrid Operation", "EcoStruxure Power Operation", "BESS"],
    imagen: "img/generacion/bess-contenedores.jpg"
  }
];
