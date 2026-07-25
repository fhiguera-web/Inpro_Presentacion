# INPROCONFI S.A. — Sitio web corporativo

Presentación corporativa del Grupo INPROCONFI (INPROCONFI · EMS Testing · CCEYMA):
soluciones eléctricas para entornos industriales exigentes e infraestructura crítica
—subestaciones, media tensión, transformadores, automatización, protección y
generación de respaldo.

**Sitio publicado:** _(pendiente de activar GitHub Pages)_

## Cómo verlo en local

Es HTML estático autocontenido: no necesita servidor, compilación ni base de datos.

```
git clone <url-del-repositorio>
cd WEB_INPROCONFI
```

Luego abra `index.html` con doble clic. La conexión a internet solo mejora la
tipografía Raleway y los enlaces externos al catálogo del fabricante.

Si prefiere servirlo por HTTP:

```
python -m http.server 8000
```

y abra <http://localhost:8000>.

## Estructura

```
WEB_INPROCONFI/
├── index.html        ← La página completa (diseño + contenido + ficha del asesor)
├── benchmark.html    ← Comparativa técnica de equipos
├── datos/            ← Contenido editable en JavaScript
│   ├── casos-exito.js
│   ├── productos.js
│   ├── proyectos-schneider.js
│   ├── blog-estrategias.js
│   ├── noticias.js
│   └── benchmark.js
└── img/              ← Fotografías organizadas por sección
```

## Mantenimiento

- `README_ACTUALIZACION.md` — cómo actualizar textos, casos e imágenes.
- `DOCUMENTACION_TECNICA.md` — lógica de funcionamiento y decisiones de diseño.

## Contacto

- Web: <https://inproconfi.com>
- Correo: <ventas@inproconfi.com>
- Teléfono: +593 99 577 6695

---

© INPROCONFI S.A. Todos los derechos reservados. El código, los textos, las
imágenes y las marcas de este repositorio son propiedad de INPROCONFI S.A. y se
publican únicamente con fines de difusión del sitio corporativo.
