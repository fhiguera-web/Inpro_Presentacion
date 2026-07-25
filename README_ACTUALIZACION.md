# Página de Presentación INPROCONFI S.A. — Versión 2

Página HTML autocontenida que funciona como presentación de la compañía y
herramienta comercial. Se abre haciendo doble clic en `index.html` (no necesita
servidor; el internet solo mejora la tipografía Raleway y el enlace al catálogo WEG).

## Estructura de carpetas

```
WEB_INPROCONFI/
├── index.html               ← La página (diseño + ficha del asesor)
├── datos/
│   ├── casos-exito.js       ← Casos de éxito (editable, ver abajo)
│   └── productos.js         ← Fichas técnicas de productos (editable)
├── img/                     ← TODAS las fotografías, organizadas por sección
│   ├── _NUEVAS_FOTOS/       ← SUELTE AQUÍ las fotos nuevas (ver su LEEME.md)
│   ├── logo/                ← Logotipos institucionales
│   ├── empresa/             ← Fotos de historia / equipo / hero
│   ├── servicios/           ← Unidad: Servicios y Mantenimiento
│   ├── proyectos/           ← Unidades: Proyectos Industriales y Utilities
│   ├── generacion/          ← Unidad: Generación Industrial
│   ├── fotovoltaico/        ← Sección Green Energy
│   ├── productos/           ← Productos PAC (Woodward, Schneider, WEG...)
│   ├── casos/               ← Fotos de los casos de éxito
│   └── testimonios/         ← Logos de clientes
└── README_ACTUALIZACION.md  ← Este archivo
```

## Orden de la página (versión 2.1)

1. **Hero** — titular grande + propuesta integrada del grupo + foto a pantalla completa
2. **El Grupo** — holding INPROCONFI + EMS Testing + CCEYMA, con la matriz
   "Lo que otros entregan por partes, nosotros lo entregamos completo"
   (compara por CATEGORÍAS de competidor, nunca por nombres)
2b. **Proyecto Insignia SPS** (`#sps`) — banner de Coca Codo Sinclair, cifras del
   proyecto (respuesta <200 ms, 2 fases, 12+2 instalaciones, 1.500 MW), relato de
   las fases SPS2 (2019) y SPS3 Etapa 1 (2023–2025), y 5 tarjetas que trasladan esa
   capacidad a cada unidad de negocio. Fotos en `img/sps/` (Wikimedia Commons,
   licencias CC — la atribución del pie de página es OBLIGATORIA, no borrarla).
   ⚠ No hay foto libre de la subestación El Inga / patios 500 kV de Ecuador:
   reemplazar las fotos de referencia por fotografías propias de los sitios SPS
   cuando estén disponibles (Inproconfi trabajó en esas subestaciones).
3. **¿Por qué nos prefieren?** — los cinco pilares y seis diferenciadores
4. **Casos de éxito** — historias en tres actos: *El reto → La solución → El beneficio*
5. **Empresa** — historia, misión, visión y cifras
6. **Unidades de negocio** — Servicios y Mantenimiento / Proyectos Industriales /
   Infraestructura-Utilities / Generación Industrial
7. **Green Energy** — banda fotográfica a pantalla completa
8. **Productos PAC** — monitores, Woodward, Schneider, celdas WEG + banda
   partner EcoXpert Power Automation
9. **Testimonios** — Grupo Difare y Nicovita
10. **Contacto**
11. **Ficha de cliente (uso interno)** — herramienta del asesor comercial

El análisis competitivo que sustenta la sección "El Grupo" y la matriz está en:
`VENTAS B2B - ABM/Posicionamiento_Competitivo_Grupo_Inproconfi.md` (documento
interno — no publicar). Pendiente: logo oficial de CCEYMA (hoy se muestra un
monograma en `index.html`, sección `#grupo`).

## Identidad de marca aplicada (del Manual de Identidad Corporativa)

| Variable      | Color oficial | Uso                        |
|---------------|---------------|----------------------------|
| `--azul`      | `#21529E`     | Botones, títulos de acento |
| `--amarillo`  | `#F2CB04`     | Líneas y detalles sutiles  |
| `--celeste`   | `#17A2DD`     | Etiquetas de sección       |

Tipografía de títulos: **Raleway** (tipografía secundaria de la marca; se carga
de Google Fonts y si no hay internet usa la del sistema). La base de la página
es blanca con gris muy suave (`#f5f5f7`).

## Cómo editar los casos de éxito (cuentan una historia)

Abra `datos/casos-exito.js` con el Bloc de notas. Cada caso tiene tres actos:

```js
{
  cliente: "Nombre del cliente",
  sector: "Industria (etiqueta celeste)",
  titulo: "Frase corta del logro",
  reto: "Qué problema o necesidad tenía el cliente",
  solucion: [
    "Trabajo ejecutado 1",
    "Trabajo ejecutado 2"
  ],
  beneficio: "Qué ganó el cliente al contratar a Inproconfi",
  imagen: "img/casos/foto-portada.jpg",
  fotos: ["img/casos/foto-portada.jpg", "img/casos/foto-2.jpg", "img/casos/foto-3.jpg"]
},
```

Copie un bloque completo (de `{` a `},`), péguelo antes del `]` final y edítelo.
La página genera las tarjetas automáticamente.

### Ficha desplegable del caso (clic sobre la tarjeta)

Al hacer clic en cualquier tarjeta se abre la **ficha completa del caso**:
galería de fotos (las del campo `fotos`; si no existe, usa la portada),
reto, solución y beneficio, con membrete de INPROCONFI.

- **Guardar como PDF**: el botón "⬇ Guardar como PDF" abre el diálogo de
  impresión del navegador imprimiendo SOLO la ficha — en "Destino" elija
  "Guardar como PDF". Así se genera el PDF del caso para enviar al cliente.
- La ficha se cierra con la ✕, el botón Cerrar, la tecla Esc o haciendo
  clic fuera de la tarjeta.

## Cómo cambiar una fotografía

1. Guarde la foto nueva en la subcarpeta de `img/` que corresponda.
2. **Opción fácil:** póngale el MISMO nombre que la foto a reemplazar.
3. **Opción con nombre nuevo:** busque el nombre viejo en `index.html`
   (Ctrl+F en el Bloc de notas) y cámbielo.

Recomendación: fotos horizontales de al menos 1200 px de ancho, formato JPG.

## Fichas técnicas de productos

Los productos con "Ver ficha técnica →" (Megger InsuLogix G2, ICMmonitor y
toda la línea Woodward) abren una ficha desplegable con resumen, capacidades,
aplicaciones, dato destacado y enlace a la página oficial del fabricante.

- Los datos se editan en `datos/productos.js` (campos: marca, nombre, imagen,
  resumen, capacidades, aplicaciones, nota, enlace). Redacción propia en
  español a partir de la documentación pública del fabricante.
- Si un producto no tiene foto (`imagen: null`), la ficha se muestra solo
  con texto. Para agregarle foto: guardar la imagen en `img/productos/` y
  escribir la ruta en el campo `imagen`.
- El botón "Guardar como PDF" imprime solo la ficha con membrete INPROCONFI.

## Noticias del sector (`#noticias`)

Sección curada con tres categorías: Sector Eléctrico Ecuador, Equipos de
Prueba e Ingeniería de Potencia. Los datos viven en `datos/noticias.js`
(campos: categoria, fecha, titulo, resumen, angulo, fuente, url). El campo
`angulo` es la lectura comercial ("Por qué le importa") que conecta la
noticia con los servicios del grupo.

- **Para refrescarla**: pida a Claude *"actualiza las noticias de la página"*
  — buscará noticias recientes reales de las tres categorías y actualizará
  el archivo (y el `?v=` del script). Frecuencia sugerida: quincenal.
- Regla: solo noticias reales con enlace a la fuente original. Nunca
  inventar titulares ni fechas.

## Benchmark competitivo (`benchmark.html` — USO INTERNO)

Página hermana de inteligencia comercial, accesible desde el símbolo ◈
(gris, discreto) al final del menú principal. **No mostrar a clientes**:
contiene competidores con nombre, cuentas objetivo y tácticas de venta.

Secciones: competidores (12, con debilidad explotable y "cómo ganar") ·
matriz quién-hace-qué · radar de cuentas ICP · señales del mercado ·
adjudicaciones SERCOP (benchmark de precios, solo montos verificados) ·
blog interno de estrategias (6 artículos con checklist, filtrables).

Datos editables: `datos/benchmark.js` y `datos/blog-estrategias.js`.
Para refrescar: pida a Claude "actualiza el benchmark". Reglas: nunca
inventar montos de adjudicaciones; el radar ICP es universo sugerido a
validar, no lista confirmada.

⚠ Si la página se publica en internet algún día, benchmark.html debe
quedar FUERA del hosting público o detrás de autenticación real.

## Ficha de cliente (herramienta del asesor)

Está al final de la página, marcada como "Herramienta del asesor comercial".
Permite, durante o después de una reunión:

- **Datos de contacto** — empresa, RUC, contacto, cargo, teléfono, correo, sector.
- **Calificación ICP** — 6 criterios con puntaje automático (A / B / C) basados
  en el manual de ventas ABM: infraestructura propia, criticidad de la parada,
  poder de decisión, presupuesto, cumplimiento normativo e interés recurrente.
  Incluye el campo "costo de no hacer" (regla del manual: nunca discutir precio
  antes de entender criticidad y costo de no hacer).
- **Preferencias y consultas** — servicios de interés y notas libres del asesor.
- **Requisitos SSO** — checklist: inducción, permiso de trabajo, altura,
  espacios confinados, LOTO, EPP dieléctrico, IESS/pólizas, exámenes médicos.
- **Agenda** — tipo de actividad, lugar, fecha, hora y notas.

Botones:
- **Guardar ficha** — guarda en el navegador de este equipo (localStorage).
  Las fichas guardadas aparecen en una tabla con su calificación y agenda.
- **Copiar resumen** — copia un resumen de texto listo para pegar en
  WhatsApp, correo o CRM.
- **Descargar respaldo (JSON)** — descarga todas las fichas como archivo.
- **Nueva ficha** — limpia el formulario.

⚠ Las fichas viven en el navegador del equipo donde se llenan. Para
consolidarlas, cada asesor descarga su respaldo JSON y lo envía al coordinador.

## Autorizaciones de imágenes de clientes

- `img/casos/skretting.jpg` (fachada de la planta Skretting): uso autorizado
  por Skretting (confirmado por F. Higuera, julio 2026). No retirar por duda
  de derechos; si se requiere respaldo formal, solicitar el correo de
  autorización al área comercial.
- `img/casos/difare-inbalnor.jpg` (vista aérea del centro de distribución de
  Grupo Difare): imagen provista por F. Higuera (julio 2026). Recomendado:
  confirmar la autorización con Difare igual que se hizo con Skretting y
  archivar el respaldo.
- Logos de clientes (Difare, Skretting, Nicovita, etc.): uso nominativo para
  identificar clientes reales del portafolio, tomados del portafolio oficial
  de INPROCONFI donde ya aparecen publicados.

## Origen de las imágenes

Fotos extraídas del `PORTAFOLIO INPROCONFI.pdf` (jul 2026). Para la versión 3
se recomienda reemplazarlas por fotografías originales en alta resolución
(mínimo 1920 px de ancho para el hero).
