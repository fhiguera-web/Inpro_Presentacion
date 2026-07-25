/* ============================================================
   BLOG INTERNO DE ESTRATEGIAS — USO INTERNO INPROCONFI
   ============================================================
   Artículos de formación comercial para el equipo. Alimenta
   benchmark.html. Para agregar: copie un bloque {...}, y edítelo.
   Categorías: ABM, Cierre, Prospección, Propuesta de valor,
   Marketing, Redes y marca personal.
   ============================================================ */

const ARTICULOS = [
  {
    categoria: "Cierre",
    titulo: "El cierre por 'costo de no hacer'",
    lectura: "4 min",
    resumen: "La regla de oro del manual de pricing: nunca discutas un número antes de que el cliente haya puesto precio a su problema.",
    cuerpo: `
<p>El error clásico: el cliente pide precio en la primera reunión y el vendedor lo da. Desde ese momento, la conversación es sobre <em>nuestro</em> número, no sobre <em>su</em> problema.</p>
<p>La secuencia correcta invierte el orden. Antes de cotizar, el prospecto debe responder — con sus propias cifras — tres preguntas:</p>
<ol>
<li><b>¿Cuánto cuesta una hora de parada de su planta?</b> (producto perdido + mano de obra ociosa + compromisos incumplidos)</li>
<li><b>¿Cuántas horas de corte tuvo en el último año?</b> (o cuántas tendrá con el próximo estiaje)</li>
<li><b>¿Qué pasa si la falla es del transformador principal?</b> (plazo de reposición: meses, no días)</li>
</ol>
<p>Multiplicadas, esas respuestas son el <b>costo de no hacer</b>. Solo entonces se presenta la propuesta — que ahora no es un gasto, sino un descuento sobre ese costo. El campo existe en la ficha de la página: úsalo en cada visita.</p>`,
    checklist: ["En la próxima visita, no des precio: haz las 3 preguntas", "Registra el costo de no hacer en la ficha del prospecto", "Abre tu siguiente propuesta con ese número, no con el tuyo"]
  },
  {
    categoria: "Cierre",
    titulo: "Tres opciones siempre: Base, Control y Elite",
    lectura: "3 min",
    resumen: "Una sola opción invita a negociar el precio. Tres opciones invitan a elegir el alcance.",
    cuerpo: `
<p>Del manual maestro: toda propuesta lleva tres paquetes. No es un truco — cambia la pregunta del cliente de «¿me lo rebajas?» a «¿cuál me conviene?».</p>
<ul>
<li><b>Base:</b> resuelve el problema puntual. Precio ancla inferior.</li>
<li><b>Control:</b> el recomendado — resuelve el problema y deja monitoreo/prevención. Aquí debe caer el 60% de los cierres.</li>
<li><b>Elite:</b> continuidad gestionada (retainer, SLA, 24/7). Ancla superior que hace ver razonable a Control.</li>
</ul>
<p>Regla de disciplina: <b>el vendedor recomienda uno</b> (normalmente Control) y explica por qué. Nunca entregar el menú sin guía. Y todo se registra: paquete recomendado, elegido, descuento y motivo — sin registro no hay mejora.</p>`,
    checklist: ["Reescribe tu propuesta activa en formato 3 opciones", "Define qué es Elite para tu línea de servicio", "Registra recomendado vs. elegido en cada cierre"]
  },
  {
    categoria: "Prospección",
    titulo: "Calificar en 10 minutos con la ficha de la página",
    lectura: "3 min",
    resumen: "Los 6 criterios ICP no son burocracia: son el filtro que evita perseguir cuentas que nunca van a comprar.",
    cuerpo: `
<p>Un prospecto A (8-10 puntos) merece visita esta semana. Un C (&lt;5) merece un correo trimestral. El error caro es tratarlos igual.</p>
<p>Los dos criterios que más pesan — y que más se olvidan de verificar:</p>
<p><b>Poder de decisión:</b> ¿tu contacto firma, recomienda o solo escucha? Pregunta sin rodeos: «si esto tiene sentido técnico y económico, ¿cómo es el proceso de aprobación aquí?». La respuesta te dice a quién falta conocer.</p>
<p><b>Criticidad real:</b> no todas las plantas sufren igual un corte. Una extrusora pierde toneladas de scrap; una bodega seca, casi nada. La pregunta del embudo: «¿qué pasó la última vez que se fue la luz?» — la historia que te cuenten vale más que cualquier folleto que les dejes.</p>
<p>El embudo A/B/C de la página te muestra tu cartera de un vistazo. La meta sana: 30% A, 40% B — si todo es C, el problema es la puntería, no el mercado.</p>`,
    checklist: ["Recalifica tus 5 cuentas activas con la ficha", "Identifica al decisor real en cada cuenta A", "Exporta el CSV y revísalo en tu reunión comercial semanal"]
  },
  {
    categoria: "ABM",
    titulo: "ABM en 90 días para el sector eléctrico ecuatoriano",
    lectura: "5 min",
    resumen: "El account-based marketing no es enviar más correos: es tratar 15 cuentas como 15 mercados de uno.",
    cuerpo: `
<p>El ciclo de venta técnico en Ecuador dura de 6 a 24 meses. El ABM lo acorta concentrando el esfuerzo donde hay fit real. El plan de 90 días:</p>
<p><b>Días 1-30 — Selección y mapa:</b> elige 15 cuentas del radar ICP (benchmark). Para cada una, mapea el comité: gerente técnico (valida), gerente de mantenimiento (sufre el problema), gerente financiero (aprueba). Tres nombres por cuenta, mínimo.</p>
<p><b>Días 31-60 — Valor antes de pedir:</b> cada contacto recibe algo útil ANTES de cualquier pitch: el caso de éxito de su industria (la página los filtra por sector), una nota técnica sobre el estiaje, una invitación a ver una prueba en vivo. El técnico valida, el gerente aprueba: cada rol recibe su mensaje, no el mismo PDF.</p>
<p><b>Días 61-90 — Conversión:</b> a las cuentas que respondieron, ofrecer la evaluación técnica de diagnóstico (baja barrera). A las que no, segunda pieza de valor y rotación al siguiente trimestre.</p>
<p>El modelo dual del plan: <b>Modelo A</b> venta directa a industria; <b>Modelo B</b> a través de EPCs e integradores que ganan licitaciones (ver señales del benchmark). Pipelines separados, mensajes distintos.</p>`,
    checklist: ["Elige tus 15 cuentas del radar ICP", "Mapea 3 contactos por cuenta en LinkedIn", "Prepara la pieza de valor #1: el caso de éxito de su industria"]
  },
  {
    categoria: "Propuesta de valor",
    titulo: "No vendas el servicio: vende la diferencia",
    lectura: "4 min",
    resumen: "Todos dicen 'calidad y experiencia'. La propuesta de valor real es lo que el competidor no puede firmar.",
    cuerpo: `
<p>Prueba ácida: si tu frase de venta la puede decir HVTESTS o SDMEL sin mentir, no es propuesta de valor — es ruido. Las nuestras, las que nadie más firma:</p>
<ul>
<li><b>«Ahora mismo protegemos el sistema eléctrico del país»</b> — SPS3 en desarrollo. Ningún competidor puede decirlo.</li>
<li><b>«Un solo responsable de la prueba a la obra»</b> — diagnóstico (EMS) + ingeniería (Inproconfi) + construcción (CCEYMA). Los demás cubren fragmentos.</li>
<li><b>«Respaldo oficial del fabricante»</b> — EcoXpert de Schneider, VAP de Megger, WEG T&D. El resto alquila o improvisa.</li>
<li><b>«Todo queda por escrito»</b> — actas y protocolos de cada intervención, cultura SPS.</li>
</ul>
<p>En cada propuesta, al menos una de estas cuatro debe aparecer en la primera página. La matriz del benchmark te dice cuál usar según contra quién compites.</p>`,
    checklist: ["Revisa tu última propuesta: ¿aparece alguna de las 4?", "Identifica contra quién compites en cada cuenta activa", "Elige la diferencia que ese competidor no puede firmar"]
  },
  {
    categoria: "Redes y marca personal",
    titulo: "LinkedIn para ingenieros: la marca que genera reuniones",
    lectura: "5 min",
    resumen: "El comprador industrial investiga a la persona antes de responder el correo. Tu perfil es tu primera propuesta.",
    cuerpo: `
<p>Regla de la casa: en este sector no venden los anuncios, venden las personas con autoridad técnica. Plan mínimo viable — 30 minutos por semana:</p>
<p><b>El perfil (una vez):</b> titular que diga el problema que resuelves, no el cargo. «Ayudo a plantas industriales a no parar por fallas eléctricas» rinde más que «Gerente Comercial». Foto en campo con EPP: es tu credencial visual.</p>
<p><b>El contenido (1 post/semana):</b> alterna tres formatos que ya tienes en la página comercial: el caso (qué pasó en una planta como la tuya), la señal (qué significa el estiaje para tu operación) y la evidencia (una termografía con su historia — la falla que se detectó a tiempo). Nada de «orgullosos de anunciar».</p>
<p><b>El listening (10 min/semana):</b> comenta con criterio técnico los posts de tus 15 cuentas ABM. Un comentario útil vale más que 10 likes; te vuelve visible para el comité completo sin haber pedido nada.</p>
<p>La métrica que importa no son los seguidores: son las conversaciones iniciadas por semana.</p>`,
    checklist: ["Reescribe tu titular de LinkedIn con el problema que resuelves", "Publica esta semana 1 post con una termografía o caso", "Comenta 3 publicaciones de tus cuentas objetivo"]
  }
];
