# Prompt para Claude · Invitación XV años de Soffia

Diseña y construye una invitación web para los XV años de **Soffia Crystina Molina González**, con una dirección artística que combine papelería clásica y una experiencia digital contemporánea.

Conserva exactamente el nombre y sus acentos.

## Referencias

**Materialidad, elegancia y dirección artística:**
https://www.youtube.com/watch?v=eQEkqBqFF6s

**Método de creación y especificaciones:**
https://app.notion.com/p/ruben-stom/50-Mobile-Invitation-Website-with-Lovart-2-0-Claude-Code-3fec0c62e00d81caaf85faba961912d6

**Apertura, presentación fotográfica y experiencia de invitación digital:**
https://saraxv.ambarlat.com/?id=INV-112901

Consulta también `guia_invitacion_ia_para_claude.md` si está disponible.

Si puedes navegar, abre la tercera referencia, toca el sobre y recorre la página. Si no puedes, utiliza la descripción siguiente sin afirmar que la examinaste.

La referencia muestra un sobre que se abre y revela una tarjeta, seguido de una portada fotográfica, cuenta regresiva, mensajes, información del evento, galería, itinerario y confirmación.

Toma su carácter juvenil, su presentación fotográfica y sus controles modernos. Combínalos con la delicadeza del papel y las acuarelas de Ruben. Mantén una sola dirección artística durante todo el recorrido.

## Concepto

**“Una historia que comienza en papel y cobra vida al deslizar.”**

La invitación debe sentirse como una pieza de papelería que se transforma gradualmente en una experiencia digital. Cada desplazamiento revela una parte de la celebración.

El papel de algodón, las acuarelas y la tipografía elegante constituyen el hilo visual. La modernidad aparece mediante fotografías editoriales, composiciones asimétricas equilibradas, botones refinados y transiciones vinculadas al scroll.

Evita que parezca una plantilla genérica o una colección de bloques independientes.

## Dirección visual

- Rosa pastel como color principal.
- Marfil y blanco cálido como fondos.
- Rosa antiguo para acentos.
- Verde salvia en hojas.
- Oro rosado en pequeños detalles.
- Tinta cálida y suficientemente oscura para leer.

Usa papel con fibras visibles, textura sutil, bordes rasgados, rosas en acuarela translúcida y sombras suaves.

Alterna espacios centrados de papelería con fotografías amplias y composiciones más contemporáneas. Mantén continuidad entre secciones mediante bordes de papel, flores que atraviesan una unión o cambios suaves de fondo.

Puedes incorporar pequeños reflejos nacarados y detalles satinados. Evita llenar la página de glitter, partículas, estrellas o adornos repetidos.

Combina una serif editorial como Cormorant, caligrafía delicada para el nombre y una sans serif discreta para botones, horarios y etiquetas. Conserva una jerarquía clara.

## Recorrido esencial

### 1. El sobre: comienza la historia

Primera pantalla con un sobre rosa pastel de papel grueso, sello de cera en oro rosado y decoración floral mínima.

Incluye “Toca para abrir”, con interacción accesible mediante teclado.

Al activarlo, reproduce un video de aproximadamente cinco segundos:

- Cámara cenital fija.
- Movimiento de apertura creíble.
- Misma luz, perspectiva y escala durante la transición.
- La tarjeta emerge o se revela respetando la geometría del sobre.
- Sin textos generados dentro del video.

Al terminar aparece una tarjeta marfil de algodón con el contenido HTML:

“Mis XV años”

“Soffia Crystina”
“Molina González”

Fecha cuando esté confirmada.

El nombre debe ser protagonista y caber con naturalidad dentro de la tarjeta.

Sustituye el video terminado por una imagen de su último fotograma para conservar el estado abierto al bajar y regresar.

### 2. Soffia: presentación y emoción

Desde la tarjeta, conduce suavemente hacia una fotografía de Soffia, si la proporciono.

La transición debe parecer una continuación de la invitación: por ejemplo, el borde inferior del papel revela la fotografía mientras una acuarela conecta ambas composiciones.

Añade un mensaje breve y editable:

“Hay momentos que se sueñan con el corazón y se recuerdan para siempre. Me hace mucha ilusión compartir contigo mis quince años.”

Si hay más fotografías, integra dos o tres a lo largo del recorrido. Evita crear una galería extensa separada por defecto.

No uses fotografías de la festejada de referencia ni imágenes de otras personas.

### 3. Cuándo y dónde: la información importante

Presenta fecha, hora y lugar con una composición clara sobre papel texturizado.

Añade una cuenta regresiva compacta cuando exista una fecha válida y una zona horaria confirmada.

Si hay ceremonia y recepción, muestra ambos momentos dentro de esta misma sección, con sus respectivos botones “Cómo llegar”.

No presupongas que habrá ceremonia religiosa.

Evita repetir la fecha y las direcciones en múltiples bloques.

### 4. Así celebraremos: itinerario breve

Incluye únicamente los momentos confirmados del evento.

Diseña una línea fina que se dibuje al hacer scroll. Cada punto revela su hora, título e icono delicado cuando el avance lo alcanza.

Mantén esta sección breve, legible y con ritmo. No inventes actividades ni horarios para llenarla.

Coloca aquí una indicación compacta de vestimenta si se proporciona, sin dedicarle una pantalla completa innecesariamente.

### 5. Nos vemos en mis XV: confirmación y cierre

Termina con un mensaje cálido, la firma de Soffia y una acción principal:

“Confirmar asistencia”.

Usa WhatsApp con destino confirmado o un formulario conectado a un servicio real. No simules envíos exitosos.

Puedes proponer como texto de cierre:

“Lo más especial de esta noche será compartirla contigo.”

Concluye con una composición de papel y flores que recuerde la tarjeta inicial, dando unidad a toda la experiencia.

## Animaciones que cuentan la historia

Diseña una secuencia coherente, no la misma animación repetida en cada elemento.

- La apertura del sobre introduce la experiencia.
- El nombre aparece gradualmente sobre la tarjeta.
- La primera fotografía se revela mediante una máscara suave.
- Los textos entran con opacidad y desplazamientos pequeños.
- Las flores pueden moverse ligeramente a una velocidad distinta del papel.
- La línea del itinerario progresa con el scroll.
- El cierre recupera los elementos visuales del comienzo.

Usa movimientos contenidos, sin rebotes, giros exagerados o cambios bruscos de escala.

Prioriza `transform` y `opacity`. Para apariciones, utiliza duraciones aproximadas de 0.8–1.4 segundos y pequeños escalonamientos. Para efectos ligados al desplazamiento, calcula el progreso dentro de cada sección.

Mantén el scroll natural. No secuestres el desplazamiento, no obligues a esperar animaciones y no conviertas cada sección en una pantalla fija.

El invitado debe poder leer a su ritmo.

Con movimiento reducido, muestra la tarjeta abierta y todos los contenidos sin transiciones.

## Selección estricta del contenido

Incluye solamente:

- Apertura y portada.
- Presentación breve de Soffia.
- Fotografías proporcionadas, integradas con moderación.
- Fecha, hora y ubicación.
- Itinerario confirmado.
- Vestimenta, si se indica.
- Confirmación y despedida.

No incluyas hoteles, restaurantes, turismo, recomendaciones locales, publicidad, redes del proveedor ni bloques adicionales de relleno.

Tampoco añadas automáticamente apartados independientes de familiares, padrinos, regalos o lluvia de sobres. Solo se incorporan si los solicito después.

No copies datos, fotografías, pases asignados, restricciones o enlaces de la invitación de ejemplo.

## Recursos

Inspecciona primero los archivos disponibles y conserva los originales.

Para la apertura se necesitan dos imágenes compatibles —sobre cerrado y tarjeta abierta— y un video que conecte ambos estados.

Para el resto, utiliza papel texturizado, rosas y hojas en acuarela, fotografías proporcionadas y pequeños iconos coherentes.

Todos los nombres, fechas y mensajes deben ser texto HTML editable, no texto incrustado en imágenes.

Si falta el video, entrega una vista estática revisable e identifica el recurso pendiente. Si faltan fotografías, adapta la composición con papelería y acuarela, sin sustituirlas por personas inventadas.

## Implementación y adaptación

Usa HTML, CSS y JavaScript sin framework ni compilación. Entrega:

- `index.html`
- `styles.css`
- `script.js`
- `assets/`

Prioriza teléfono y conserva una columna de unos 480 px en escritorio, centrada sobre un fondo marfil rosado.

Alinea el texto con el marco real de la tarjeta y del video. Recalcula sus límites según las imágenes entregadas; no reutilices coordenadas de otra invitación.

Centraliza los datos editables. Actualmente solo están confirmados:

- Nombre: Soffia Crystina Molina González.
- Celebración: XV años.
- Paleta: rosa pastel.
- Estética: papel clásico y acuarela con composición e interacción modernas.

Fecha, horarios, lugares, fotografías, vestimenta y destino de confirmación están pendientes. Usa marcadores explícitos en la vista previa y no inventes información.

Comprueba que no haya desbordamiento horizontal, que el nombre se lea completo, que el cambio de video a imagen no salte y que todos los contenidos permanezcan accesibles si falla una animación.

Entrega una primera versión funcional y visualmente cuidada, con una lista breve de los datos o recursos faltantes. No publiques hasta recibir los datos definitivos.
