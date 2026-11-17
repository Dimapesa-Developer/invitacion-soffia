# Invitación XV años · Soffia Crystina Molina González

Primera versión funcional y revisable. **Todo lo editable vive en `datos.js`** — es el
único archivo que necesitas tocar.

Para verla, sírvela en local con el servidor incluido:

```bash
cd "/Users/dimapesa/Desktop/Invitacion de Sofia" && python3 servidor.py
```

Luego entra a `http://localhost:8787`.

Usa **`servidor.py`**, no `python3 -m http.server`. El de serie deja que el navegador
guarde los archivos en caché, y entonces puedes acabar viendo una mezcla de CSS viejo
con HTML nuevo, que se ve rota sin que nada esté mal. `servidor.py` manda
`Cache-Control: no-store`, así que cada recarga trae la versión real.

Si alguna vez ves algo raro, fuerza la recarga con **Cmd + Shift + R**.

---

## Lo que falta para publicar

### Ya confirmado

- **Fecha y hora: viernes 22 de enero de 2027, 5:00 p.m.** La cuenta regresiva
  apunta a la hora de la misa, que es con lo que arranca la celebración.
- **Misa: Parroquia de Nuestra Señora de Fátima**, 5:00 p.m. Falta la dirección,
  así que su botón «Cómo llegar» está desactivado.
- **Recepción: Salón de eventos Las Marías**, C. Camino Viejo a San Blas 228,
  Villas de San Juan, 63129 Tepic, Nayarit. El botón «Cómo llegar» abre el punto
  exacto en Google Maps (21.5047164, −104.921863).
- **Fotografía de portada**, en `assets/fotos/soffia-portada.webp`. Aparece a todo
  el ancho, asomando por un rasgado del papel. Entra **cubierta de rosas**, y al
  deslizar las dos guirnaldas se apartan hacia los lados y descubren el vestido
  entero. El rostro de Soffia nunca queda tapado en ningún punto del recorrido.

### Lo que falta

| # | Dato | Dónde se pone en `datos.js` | Qué pasa mientras falta |
|---|------|------------------------------|--------------------------|
| 1 | **Dirección de la parroquia** | `sedes[0].direccion` (y `mapa` si quieres el punto exacto) | La tarjeta de la misa no muestra dirección y su botón «Cómo llegar» sale desactivado |
| 2 | **Hora en el salón** | `sedes[1].hora` | La tarjeta del salón no muestra horario |
| 3 | **Itinerario** | `itinerario: [...]` | Se muestra el de ejemplo, marcado como tal |
| 4 | **Código de vestimenta** | `vestimenta` | Se muestra el de ejemplo, marcado como tal |
| 5 | **Destino de la confirmación** | `confirmacion.tipo` + `whatsapp` o `formulario` | El botón queda desactivado y marcado |
| 6 | **Más fotografías** (opcional) | `fotos.momentos` | Solo aparece la de portada |
| 7 | **Música** | archivo en `assets/musica.mp3` | El control flotante no aparece |

### Antes de compartirla

Pon **`vistaPrevia: false`** en `datos.js`. Mientras sea `true` verás contenido de
ejemplo (fecha, sedes, itinerario y vestimenta) marcado con el distintivo superior
«Vista previa · datos de ejemplo». Ese contenido **no es real**: está solo para que
puedas juzgar el diseño.

Para ver cómo le llegará al invitado sin cambiar nada: `index.html?preview=0`.

---

## Cómo se completa cada cosa

**Fecha y hora.** `fecha.iso` es la hora local del evento y `fecha.zona` su zona
horaria (`America/Mazatlan`). Dice `'2027-01-22T17:00:00'`, la hora de la misa.
Hacia ahí cuenta el contador, y así se queda: es lo que se decidió.

**Sedes.** Cada entrada lleva `tipo`, `nombre`, `hora`, `direccion` y, si quieres, un
`mapa` con el enlace exacto. Si no pones `mapa`, el botón «Cómo llegar» se arma solo
con una búsqueda de Google Maps a partir del nombre y la dirección. No se presupone
ceremonia religiosa: pon solo los momentos que existan.

**Itinerario.** Cada momento lleva `hora`, `titulo` e `icono`. Los iconos disponibles,
recortados de tus acuarelas, son: `arco`, `tacones`, `brindis`, `cena` y `fiesta`.

**Confirmación.** Dos caminos:
- `tipo: 'whatsapp'` + `whatsapp: '523111234567'` (lada internacional, sin signos).
- `tipo: 'formulario'` + `formulario: 'https://formspree.io/f/xxxx'` o similar.
  El formulario envía de verdad y muestra el error si falla. **Nunca simula un envío
  exitoso.**

**Fotografías.** Déjalas en `assets/fotos/` y escribe la ruta en `fotos.portada`.
La portada ya está puesta y se revela con una máscara suave ligada al scroll. El marco
es algo más alto que la foto, con el fondo del estudio prolongado por detrás, para que
el papel rasgado no muerda ni la corona ni la cola del vestido.

**Música.** Copia tu archivo como `assets/musica.mp3`. No arranca al cargar la página:
empieza cuando se abre el sobre y siempre se puede silenciar desde el botón flotante.

---

## Sobre la apertura

**La apertura es el vídeo** (`apertura.modo: 'video'` en `datos.js`). Se reproduce al
tocar el sobre, dura 4 segundos y al acabar se queda fija en su último fotograma,
sobre el que entra el texto de la tarjeta.

Del archivo que generaste con Seedance:

- Venía en H.264 720×1280 a 4,4 Mbps con pista de audio. Lo pasé a **382 KB** —de
  2,2 MB— sin audio y con `faststart`, que es lo que permite empezar a verlo antes de
  haberlo descargado entero.
- Comprobé que su **primer fotograma** coincide con la portada de la web: difieren un
  1,6 %, invisible.
- Su **último fotograma** no coincide con nuestra foto del sobre abierto, y con razón:
  en el vídeo el lacre sube pegado a la solapa, que es lo que haría de verdad, y la
  tarjeta queda más grande y más arriba. Por eso la imagen que se queda fija al acabar
  es **el propio último fotograma del vídeo** (`assets/apertura-final.webp`), no la
  foto. Cualquier otra cosa daría un salto.
- Medí la tarjeta de ese fotograma final para confirmar que el texto cabe en su zona
  de papel liso: necesita el 61 % del ancho y hay un 67 % limpio.

El póster del vídeo es el sobre cerrado, así que con red lenta se ve el sobre y no un
rectángulo negro.

**Y de ahí sale la hoja.** Cuando el vídeo termina, 0,4 s después la hoja crece desde
donde estaba la tarjeta hasta ocupar la pantalla entera, y 1,1 s más tarde aparecen
las letras ya sobre ella. La hoja (`assets/hoja.webp`, 1080 × 2160) está construida
con la tarjeta del propio vídeo: su cabecera con las rosas, su banda de papel limpio
repetida en espejo para dar altura, y una de nuestras rosas recortadas en la esquina
de abajo. Por eso el papel, el borde en relieve y la textura son exactamente los
mismos que venían del vídeo, sin que se note el relevo.

Está compuesta a 1080 × 2160 a propósito: en 9:16 el móvil le recortaba el 18 % del
ancho y se comía la rosa de la esquina. Así el recorte es de 31 px, un 8 %.

**La animación por capas sigue ahí** como alternativa y como red de seguridad: si el
navegador bloquea la reproducción, la invitación se abre sola con las capas. Para
verlas comparadas: `index.html?apertura=dom` y `index.html?apertura=video`.

---

## Comprobado

Última revisión completa: 14 de noviembre de 2026.

**Medidas.** Sin desbordamiento horizontal a 320, 375, 390, 430 y escritorio. El
recorrido entero mide 7,2 pantallas en un móvil de 375 px. Cada sección ocupa:

| | 375 px | 430 px |
|---|---|---|
| Portada | 100 % | 100 % |
| La ilusión | 58 % | 52 % |
| Soffia | 115 % | 110 % |
| Cuándo | 62 % | 56 % |
| Dónde | 100 % | 89 % |
| Itinerario | 99 % | 87 % |
| Vestimenta | 43 % | 37 % |
| Confirmación | 61 % | 51 % |
| Despedida | 83 % | 79 % |

La de Soffia se pasa de pantalla a propósito: lleva la fotografía a tamaño completo.
El bloque que importa —foto más «Te invito»— sí cabe entero.

**Choques de texto con los dibujos.** 28 bloques de texto contra 9 acuarelas,
leyendo la transparencia real de cada PNG y no los rectángulos. Cero solapes, también
en el momento exacto en que aparece «Te invito» con las rosas ya abiertas.

**Recorrido.** Apertura del sobre, desvelado de la fotografía, viaje de la rosa,
pintado de los cinco iconos del itinerario y aterrizaje final en el ramo del cierre:
todo verificado de principio a fin.

**Si falla el JavaScript**, la invitación se lee entera. Los revelados parten de
visibles y es el script el que los esconde para animarlos, no al revés.

**Con «reducir movimiento»** activado todo aparece de inmediato y sin transiciones.

**Peso: 1,5 MB.** Venía de 4 MB. El 14 de noviembre se pasaron los 27 dibujos a
WebP y la carpeta `assets/` bajó de 6,9 a 2,3 MB. Las tres guirnaldas de rosas, que
eran 2,3 MB ellas solas, ahora pesan 380 KB entre las tres.

La conversión se comprobó píxel a píxel contra los originales: en los bordes
difuminados de la acuarela —lo delicado— la diferencia máxima del canal alfa es de
**1 sobre 255**, y el 99,5 % de los píxeles de color quedan dentro de 40 sobre 255.
A simple vista, al triple de aumento, son indistinguibles.

Los originales están en `originales-sin-comprimir/`, fuera de `assets/`, por si
alguna vez hay que volver atrás o reexportar algo. Esa carpeta no hace falta
subirla al publicar.

Se quedan sin convertir a propósito: `mascara-tarjeta.png`, porque es la máscara CSS
que recorta la tarjeta y son 8 KB, y la fotografía de portada, que ya era WebP.

**Límite conocido:** en pantallas de 320 px de ancho —un iPhone SE de 2016— las
secciones de «Dónde» e «Itinerario» se pasan un 15 % de la pantalla. Se lee bien y
nada se solapa, solo hay que deslizar un poco más.

**Sin usar en `assets/`:** `sello.png` (51 KB) y `flor-bajo.png` (127 KB), que es el
dibujo del que salieron las tres piezas del cierre. No se descargan nunca; solo ocupan
sitio en el disco. Dime si los borro.

## Lo que deliberadamente no lleva

Por indicación del encargo: hoteles, turismo, publicidad, padrinos, lluvia de sobres,
pases asignados y restricciones. Tampoco glitter, partículas ni estrellas. Si quieres
alguna de esas secciones, se añade después.

**Los seis PNG originales de `imagenes/` no se modificaron.** Todo lo de `assets/` se
generó a partir de ellos.


## Repaso del 14 de noviembre de 2026 · lo que se arregló

- **La hoja salía translúcida.** Se veían el sobre y la hoja a la vez: un fundido
  sucio, no un papel saliendo. Ahora la hoja es opaca de principio a fin y sale
  por **detrás del frente del sobre** (`assets/bolsillo.webp`, recortado del
  último fotograma del vídeo). El sobre baja mientras ella sube.
- **Las letras de Soffia no aparecían nunca.** El desvelado se quedaba al 84 %
  porque la sección se acababa antes: nunca se cruzaba el umbral que destapa
  «TE INVITO · SOFFIA CRYSTINA». Se le dio a la sección el recorrido que le
  faltaba y se recalibró la bajada de las letras, que tampoco llegaba a su sitio.
- **«TE INVITO» se perdía sobre el vestido.** Sin cuadro de fondo: contorno fino
  de grabado alrededor del trazo, y un punto más de cuerpo mientras va en blanco.
- **Botón muerto.** La misa no tiene dirección todavía, y aun así salía un
  «Cómo llegar» que no llevaba a ningún sitio. Ahora no sale; en vista previa
  queda el aviso punteado.
- **Se repetía el mismo mensaje.** La tarjeta decía «Sigue bajando» y justo
  debajo la flecha decía «Desliza». Se quitó el de la tarjeta.
