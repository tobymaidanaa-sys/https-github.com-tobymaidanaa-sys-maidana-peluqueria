# Closer Peluquería — la página

Una sola página, en HTML, CSS y JavaScript escritos a mano. No usa ningún
programa raro ni necesita internet para funcionar: son cuatro archivos, una
carpeta de fotos y otra de tipografías.

```
closer/
  index.html        la página entera (textos, secciones, links)
  assets/
    styles.css      cómo se ve
    script.js       lo poco que se mueve
    fuentes.css     declara las tipografías
    fuentes/        los archivos .woff2 de Fraunces y Karla
    img/            las fotos, el logo y el favicon
  README.md         esto
```

## Cómo verla

Doble clic en `index.html` y se abre en el navegador. No hace falta nada más.
Para publicarla, subí la carpeta `closer/` entera a donde la tengas alojada.

> El **mapa** es lo único que necesita internet: es un `iframe` de Google Maps.
> Abriendo el archivo sin conexión vas a ver un recuadro vacío en su lugar, y
> está bien: online carga.

## Los datos del negocio

Todo está escrito a mano en `index.html`. Si cambia alguno, buscalo con
`Ctrl+F` y reemplazalo **en todos los lugares donde aparece**:

| Dato | Cómo buscarlo | Veces |
|---|---|---|
| WhatsApp (link) | `wa.me/5491127149770` | 5 |
| Teléfono (link para llamar) | `tel:+5491127149770` | 2 |
| Teléfono (texto visible) | `11 2714-9770` | 3 |
| Instagram | `closer_peluqueria` | 6 |
| Dirección | `Gorriti 4735` | 6 |
| Horario largo | `10:00 a 19:30` | 2 |
| Horario corto | `10:00 a 17:00` | 2 |

Si cambia la **dirección**, acordate del mapa: lleva la dirección escrita
adentro del `src` del `iframe`, en la sección "Adentro".

El mensaje que ya viene escrito cuando alguien abre el WhatsApp es
*"Hola Closer, quiero pedir un turno"*. Está en la parte `?text=` de los
links: si lo cambiás, cambialo en los 5.

### Los horarios que están publicados

| Día | Horario |
|---|---|
| Lunes, martes, miércoles y viernes | 10:00 a 19:30 |
| Jueves | 10:00 a 17:00 |
| Sábado | 10:00 a 17:00 |
| Domingo | Cerrado |

Aparecen en dos lugares: la sección "Adentro" y el pie. Cambialos en los dos.

## Los precios

Están transcriptos del cartel del salón, en la sección "Servicios" del
`index.html`, y **no se guardan en ningún otro lado**: se editan ahí y listo.
Son dos grupos, `Servicios` y `Servicios técnicos`.

Cada renglón es así:

```html
<li class="renglon">
  <span class="renglon__n">Corte damas <span class="renglon__ac">secado incluido</span></span>
  <span class="renglon__p">$ 46.900</span>
</li>
```

- `renglon__n` es el nombre del servicio.
- `renglon__ac` es la aclaración chica de abajo ("secado incluido", "sin
  formol", "solo raíz"). Si no hace falta, se borra ese `<span>` entero.
- `renglon__p` es el precio.
- `<b class="ast">*</b>` es el asterisco de *"a partir de ese valor"*. Va sólo
  en los precios que en el cartel lo tienen, y remite a la nota del final.
- `renglon--titulo` es un renglón sin precio, que encabeza un grupo
  (hoy, "Máscaras"). Los de abajo llevan `renglon--hija`, que los sangra.

Para agregar o sacar un servicio, se copia o se borra un `<li>` entero.

## Cómo cambiar las fotos

Están todas las fotos reales del salón. Para cambiar alguna, guardá la nueva
**con el mismo nombre de archivo** y no hay que tocar el HTML.

| Archivo | Dónde aparece | Qué muestra hoy |
|---|---|---|
| `hero.jpg` | Adentro del espejo del inicio | Peinado de cola alta, de perfil |
| `nosotros.jpg` | Sección "Nosotros", a la derecha | Corte largo en capas, castaño oscuro |
| `trabajo-1.jpg` | Galería | Balayage rubio sobre pelo largo |
| `trabajo-2.jpg` | Galería | Iluminación con contorno, ondas rubias |
| `trabajo-3.jpg` | Galería | Color cobrizo sobre rulos |
| `trabajo-4.jpg` | Galería | Mechas con contorno, castaño oscuro |
| `trabajo-5.jpg` | Galería | Iluminación con contorno, rubio claro |
| `trabajo-6.jpg` | Galería | Corte mullet corto |
| `trabajo-7.jpg` | Galería | Corte largo en capas con reflejos |
| `trabajo-8.jpg` | Galería | Pelo largo castaño, de espaldas |
| `trabajo-9.jpg` | Galería | Corte en media melena con rulos |
| `salon.jpg` | Sección "Adentro" | El local |

Van todas **verticales**: 900 × 1200 px las de la galería, 1000 × 1333 px las
dos destacadas. No hace falta recortarlas a medida: la página las encuadra
sola con `object-fit`. Si una queda mal encuadrada, se ajusta el
`object-position` de esa sección en el `styles.css`.

Si cambiás una foto, cambiá también su texto alternativo (el `alt=` en el
`index.html`), que describe lo que se ve para quien no puede verla. **Un `alt`
que no coincide con la foto es peor que no tenerlo**, porque engaña.

Son todas verticales porque el material real de una peluquería es el retrato:
una foto apaisada corta el pelo justo donde se ve el trabajo. La del salón
también, porque muestra el local a lo largo.

### Si las fotos vienen del iPhone

Las fotos del iPhone salen en **HEIC**, y **ningún navegador las muestra**. Hay
que convertirlas a JPEG antes de subirlas. Además vienen enormes (4284 × 5712
px, 3 MB cada una): conviene bajarlas a los tamaños de la tabla y guardarlas
con calidad 82, que es donde dejan de pesar sin que se note.

### El logo

`assets/img/logo.svg` es el logo (la C con la tijera) **redibujado en vectores
a ojo, a partir de la imagen que mandó el cliente**. No es el archivo original:
es una reconstrucción. Si aparece el original del diseñador —un `.ai`, `.eps` o
`.svg`—, reemplazá ese archivo con el mismo nombre y no hay que tocar nada más.

Lo que sí tiene que cumplir el archivo: **SVG, fondo transparente y el dibujo
en negro**. El pie lo invierte por CSS para que se lea claro sobre el marrón.

El símbolo aparece **una sola vez en toda la página, en el pie**. Arriba va el
wordmark tipográfico "Closer Peluquería", con las dos palabras del mismo tamaño
y el mismo formato: es texto, no una imagen.

`assets/img/favicon.svg` es el iconito de la pestaña y lleva **sólo la C**, sin
la tijera: a 32 píxeles la tijera se convierte en una mancha.

## Qué quedó pendiente

Están marcados en el `index.html` con el comentario `<!-- TODO -->`, así se
encuentran rápido:

- [ ] **Fecha de actualización de los precios.** Conviene mostrarla, para que
      nadie llegue con una lista vieja.
- [ ] **Imagen para compartir** (`og:image`): una foto de 1200 × 630 px
      guardada como `assets/img/og.jpg`, y descomentar la línea del `<head>`.
- [ ] **El logo original**, si existe: hoy está la reconstrucción vectorial.

## Las reseñas

Son reales, copiadas de Google palabra por palabra, y están escritas a mano en
la sección "Reseñas" del `index.html`. Para agregar una, se copia un
`<li class="resena">` entero y se cambian el texto, el nombre y la fecha.

**No se inventan ni se retocan.** Los errores de tipeo son de quien las
escribió y se dejan como están: la propia sección dice que van sin retoques, y
corregirlas sería desmentirla. Si alguna vez hay que sacar una, se borra el
`<li>` y listo.

Las estrellas son cinco caracteres `★` con un `aria-label` al lado que dice la
puntuación en palabras, para quien navega con lector de pantalla: los símbolos
solos no se leen bien.

## Las decisiones de diseño, por si alguien retoca esto más adelante

**La idea.** La bio del salón dice *"cabellos que reflejan tu mejor versión"*.
De ahí sale todo: la página está armada alrededor de un **espejo de peluquería**.
El inicio es un espejo montado sobre un panel de pared, con una franja de luz a
cada lado —las mismas que tiene el local de verdad, se ven en la foto del salón—
y al cargar la página **las luces se encienden**. Es el único momento animado.

Esa franja de luz vuelve, reducida a una barrita rosa, como marca de cada
encabezado de sección, y como línea superior de los tres valores. Es el hilo que
cose la página: si se le agregan más adornos, deja de leerse.

**Color.** La paleta la definió el cliente: beige, rosa bebé, marrón y gris,
todos mate. Están en `styles.css` como variables, arriba de todo:

| Variable | Valor | Para qué |
|---|---|---|
| `--arena` | `#E7DED1` | el fondo de la página |
| `--crema` | `#F3EDE4` | tarjetas y secciones claras |
| `--cacao` | `#4A3A31` | texto, estructura y botón principal |
| `--cacao-hondo` | `#332721` | las dos bandas oscuras |
| `--rosa` | `#DFC1BC` | el acento suave: luces, barritas, CTA del cierre |
| `--gris` | `#635A53` | texto secundario |
| `--gris-tenue` | `#685E56` | etiquetas y metadatos |

Cambiá el valor en un solo lugar y cambia en toda la página. **Ojo con aclarar
los grises**: por encima de `#6B615A` el texto chico deja de cumplir el
contraste mínimo de accesibilidad. Todo el texto de la página pasa WCAG AA hoy.

**Tipografías.** *Fraunces* para los títulos y *Karla* para el texto. Fraunces
es una serif de contraste alto pero de formas blandas: da lo femenino y cuidado
sin caer en la serif de tapa de revista que usa todo el mundo. Su itálica es el
acento —"reflejan", "empieza con un mensaje"— y funciona como énfasis sin
necesidad de meter otro color. Karla sostiene el texto largo sin pelearse.

Las dos están **guardadas en el proyecto** (`assets/fuentes/`), no traídas de
Google Fonts. Así la página carga más rápido, no le pasa datos de las visitas a
un tercero, y funciona con doble clic aunque no haya internet.

**Sin numerar.** Los servicios y los valores no llevan `01 / 02 / 03`. Numerar
sirve cuando el orden significa algo —un proceso, una cronología—, y acá no:
son seis servicios simultáneos y tres valores simultáneos. Numerarlos sería
decorar.

**El botón de contacto.** Es el elemento más importante y por eso aparece tres
veces: arriba de todo, en la sección "Turnos" y en el cierre. En celulares hay
además una barra fija abajo que aparece apenas se pasa el inicio. El del cierre
va en rosa sobre el marrón, que es el único lugar donde el acento suave se usa
en grande.

**Accesibilidad.** La página se puede recorrer entera con el teclado (el foco se
ve), todas las fotos tienen texto alternativo, el contraste de todo el texto
cumple WCAG AA, y si alguien tiene activada la opción del sistema de "reducir
movimiento", no se mueve nada.
