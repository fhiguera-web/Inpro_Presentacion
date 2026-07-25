# WEB_INPROCONFI — Documentación técnica y lógica de funcionamiento
**Actualizada: 5 de julio de 2026**

Página de presentación corporativa del Grupo INPROCONFI. HTML estático
autocontenido: se abre con doble clic en `index.html`, sin servidor, sin
base de datos, sin proceso de compilación. Todo el mantenimiento se hace
editando archivos de texto y reemplazando imágenes.

---

## 1. Propósito y posicionamiento

La página cumple tres funciones:

1. **Presentación comercial** del Grupo INPROCONFI (INPROCONFI + EMS Testing
   + CCEYMA) con el posicionamiento: *solución completa con un solo
   responsable* — continuidad eléctrica crítica + diagnóstico verificable +
   protecciones/automatización + generación industrial + trazabilidad.
2. **Biblioteca de evidencia**: casos de éxito con reto→solución→beneficio,
   fichas técnicas de productos exportables a PDF.
3. **Herramienta del asesor**: ficha de captura y calificación de clientes
   al final de la página.

Reglas editoriales fijas:
- **Nunca nombrar competidores** en la página; se compara por categorías.
- **Toda afirmación lleva evidencia verificable** (proyecto, norma, cifra,
  testimonio). Sin evidencia, no se afirma.
- El análisis competitivo con nombres vive en el documento interno:
  `VENTAS B2B - ABM/Posicionamiento_Competitivo_Grupo_Inproconfi.md`.

## 2. Estructura de archivos

```
WEB_INPROCONFI/
├── index.html                  ← TODO el sitio: HTML + CSS + JS embebidos
├── DOCUMENTACION_TECNICA.md    ← este documento
├── README_ACTUALIZACION.md     ← guía operativa de edición (paso a paso)
├── datos/
│   ├── casos-exito.js          ← array CASOS_EXITO (6 casos)
│   └── productos.js            ← objeto PRODUCTOS_DETALLE (10 fichas)
└── img/
    ├── _NUEVAS_FOTOS/          ← BUZÓN de entrada (ver §7)
    ├── logo/                   ← logos del grupo (inproconfi, ems, cceyma)
    ├── empresa/  servicios/  proyectos/  generacion/
    ├── fotovoltaico/  productos/  casos/  testimonios/  sps/  hero/
```

## 3. Orden de secciones de la página

| # | Sección (id) | Contenido |
|---|---|---|
| 1 | `#inicio` (hero) | Titular + 2 CTAs + collage de 5 fotos |
| 2 | `#grupo` | Holding (3 empresas) + matriz de diferenciación por categorías |
| 3 | `#sps` | Proyecto insignia SPS: banner Coca Codo, 4 cifras, relato, 5 aplicaciones |
| 4 | `#razones` | 8 razones con foto + ícono + línea de evidencia |
| 5 | `#casos` | 6 casos de éxito (tarjetas → ficha modal) |
| 6 | `#empresa` | Historia, misión, visión, cifras |
| 7 | `#unidades` | 4 unidades de negocio en filas alternadas |
| 8 | (full-bleed) | Banda "Energías renovables con criterio de ingeniería" |
| 9 | `#microgrid` | Microredes EcoStruxure: beneficios, EMA/EMO, BESS, ciclo 5 pasos |
| 10 | `#productos` | 6 tarjetas PAC + franja Woodward (5) + banda partner EcoXpert |
| 11 | (testimonios) | Difare y Nicovita |
| 12 | `#contacto` | Ubicación (Almax Plus, Bodega 04, Lote 18), tel, correo, web |
| 13 | `#ficha` | Ficha del asesor comercial (uso interno) |

La navegación fija (sticky) enlaza: Grupo · SPS · Por qué · Casos · Empresa ·
Servicios · Productos · **Ficha** (botón amarillo) · Contáctenos.

## 4. Sistema de datos (contenido editable sin tocar diseño)

### 4.1 Casos de éxito — `datos/casos-exito.js`
Array `CASOS_EXITO`. Campos por caso: `cliente, sector, titulo, reto,
solucion[], beneficio, imagen (portada), fotos[] (galería opcional)`.
El JS de index.html genera las tarjetas al cargar. Clic en tarjeta → modal
`#modal-caso` con galería (miniaturas), reto/solución/beneficio y botón
**Guardar como PDF**.

### 4.2 Fichas de productos — `datos/productos.js`
Objeto `PRODUCTOS_DETALLE` con clave por producto: `insulogix-g2, icmmonitor,
powerlogic-p5-p7, powerlogic-t300, weg-celdas, easygen-3000xt, ls-6xt, easyi,
easyview, easysim`. Campos: `marca, nombre, imagen (o null → modal solo
texto), resumen, capacidades[], aplicaciones[], nota (resaltada en amarillo),
enlace, enlaceTxt`.
Cualquier elemento con `data-producto="clave"` abre el modal `#modal-producto`.

### 4.3 Versionado anticaché
Los scripts se cargan con parámetro de versión:
`datos/casos-exito.js?v=6` y `datos/productos.js?v=4`.
**Regla: cada vez que se edite un archivo de datos, subir el número** en
`index.html`; si no, el navegador puede mostrar la versión vieja.

## 5. Lógica de los modales y PDF

- Dos modales comparten estilos (`mc-*`): ficha de caso y ficha de producto.
- Cierre: ✕, botón Cerrar, tecla Esc, o clic fuera de la tarjeta.
- **PDF**: el botón añade la clase `imprimir-caso` al `<body>` y llama a
  `window.print()`. El CSS de impresión oculta todo excepto el modal
  `.abierto`, y muestra el membrete (`.mc-marca`: logo + contactos) que en
  pantalla está oculto. El usuario elige "Guardar como PDF" en el diálogo.
- Sin modal abierto, imprimir la página imprime solo la ficha del asesor.

## 6. Ficha del asesor (`#ficha`, localStorage)

4 paneles: datos de contacto · calificación ICP · preferencias/consultas ·
SSO + agenda.

- **Calificación ICP**: 6 checkboxes con puntos (infraestructura propia +2,
  criticidad +2, decisión +2, presupuesto +2, normativo +1, recurrente +1).
  Puntaje en vivo: A ≥8 (cliente ideal), B 5–7, C <5. Incluye campo "costo
  de no hacer" (regla del manual de pricing: entender criticidad antes de
  cotizar).
- **Persistencia**: `localStorage` clave `inproconfi_fichas` — las fichas
  viven en el navegador del equipo del asesor. Tabla de fichas guardadas
  con Abrir/Borrar.
- **Salidas**: Copiar resumen (texto para WhatsApp/CRM), Descargar respaldo
  (JSON con todas las fichas), Guardar como PDF (vía impresión).
- Consolidación multi-asesor: cada uno exporta su JSON y lo envía al
  coordinador (no hay backend).

## 7. Flujo de imágenes

```
1. TODA foto nueva se suelta en img/_NUEVAS_FOTOS/  (ver su LEEME.md)
2. Se clasifica: optimizada (≤1600 px, JPG q85-88) y renombrada
   descriptivamente hacia la subcarpeta de su sección
3. Se conecta en index.html o en los archivos de datos
4. Los originales quedan en el buzón hasta que el usuario los depure
```

- Pedir a Claude: *"clasifica las fotos de _NUEVAS_FOTOS y úsalas en la página"*.
- **Las imágenes pegadas en el chat no llegan como archivo** — siempre hay
  que guardarlas en el buzón primero.
- Autorizaciones de imágenes de clientes: registradas en
  `README_ACTUALIZACION.md` (Skretting autorizada; Difare por confirmar).
- Fotos de Wikimedia en `img/sps/` exigen mantener la atribución del footer.
- Origen de imágenes de producto: PPTX oficiales de Schneider (son ZIP →
  `ppt/media/`), folleto WEG del CDN `static.weg.net` (el catálogo weg.net
  bloquea bots), web oficial de EMS Testing.

## 8. Identidad visual (del Manual de Identidad Corporativa)

| Token | Valor | Uso |
|---|---|---|
| `--azul` | `#21529E` | botones, títulos de acento, matriz |
| `--azul-osc` | `#163B78` | fondos oscuros (contacto, arq. microgrid) |
| `--amarillo` | `#F2CB04` | líneas de acento, evidencias, chips |
| `--celeste` | `#17A2DD` | etiquetas de sección, viñetas |
| `--gris-suave` | `#f4f6fa` | fondos alternos (sesgo azul deliberado) |

- Títulos: **Raleway** (Google Fonts, con fallback de sistema si no hay
  internet). Cuerpo: pila de sistema.
- Íconos: SVG de línea inline (`.ic-svg`, stroke currentColor). **No usar
  emojis** en la interfaz.
- Accesibilidad: `focus-visible` con contorno celeste,
  `prefers-reduced-motion` desactiva animaciones, `text-wrap:balance` en
  títulos, `tabular-nums` en cifras.
- Animación de entrada: clase `.revelar` + IntersectionObserver.

## 9. Vista previa y verificación

- Servidor local para previsualizar: config `web-inproconfi` en
  `.claude/launch.json` del proyecto CONTECON (python http.server, puerto
  8741). No es necesario para el uso normal (doble clic basta); sí para la
  verificación asistida.
- Peculiaridades conocidas del visor de preview: no dispara `loading="lazy"`
  (por eso las imágenes de casos se cargan eager) y `preview_screenshot`
  puede colgarse — verificar por DOM/eval.

## 10. Documentos comerciales relacionados (fuera de esta carpeta)

- `MARKETING/VENTAS B2B - ABM/Posicionamiento_Competitivo_Grupo_Inproconfi.md`
  — análisis de 13 competidores en 3 niveles, battlecards por categoría,
  credenciales EMS (VAP Megger, WEG T&D), reglas de comunicación.
- `MARKETING/VENTAS B2B - ABM/MANUAL/` — manual maestro de pricing y
  playbooks por línea de negocio (fuente de la lógica ICP de la ficha).
- `MARKETING/VENTAS B2B - ABM/ManualIdentidadCorporativa_INPORCONFI SA..pdf`
  — fuente de la paleta y tipografías.
- Skill de Claude `marketing-amb-pmc-ecuador` — marco de mensajes usado
  para todos los textos comerciales.

## 11. Pendientes conocidos

- Galería Difare: sumar la foto del generador "4500" cuando se guarde en el buzón.
- Confirmar autorización de la foto aérea de Difare (como se hizo con Skretting).
- Franja de logos "Confían en nosotros" (logos ya extraídos: Santa Priscila,
  Kubiec, Wyndham, Terminal Terrestre, Songa, Nicovita, CELEC EP — en
  scratchpad/portafolio).
- Fotos oficiales de productos Woodward para sus fichas (hoy solo texto:
  LS-6XT, easYi, easYview, easYsim).
- Caso de éxito del proyecto de autogeneración (renders ya clasificados en
  `img/generacion/`) cuando pueda publicarse como referencia.
- Validar con gerencia el nombre público del holding ("Grupo INPROCONFI").
- Foto del equipo conjunto de las tres empresas.
- Video disponible en el buzón sin usar (la página no reproduce video hoy).
- Fichas de varios asesores se consolidan manualmente (JSON) — un CRM real
  es el paso siguiente si el volumen crece.
