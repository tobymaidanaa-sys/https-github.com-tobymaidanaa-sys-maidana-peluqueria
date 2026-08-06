# Estructura y stack

## Archivos

```
index.html          la página entera
assets/
  styles.css        un solo archivo, comentado, con las variables arriba
  script.js         lo mínimo, en un IIFE
  img/              fotos o placeholders
README.md           qué tocar para actualizar la página
```

Un archivo de cada cosa. Sin minificar y comentado en castellano: el cliente
—o quien venga después— tiene que poder abrirlo y entender qué mira.

## Stack

- HTML semántico: `header`, `section`, `nav`, `footer`, un solo `h1`.
- CSS a mano. Variables en `:root` para colores, tipografías, ancho de
  contenedor y easing. `clamp()` para los tamaños en vez de una pila de
  media queries.
- JS vanilla, sin librerías. Si la página no necesita JS, no lleva JS.
- Tipografías de Google Fonts con `preconnect` y `display=swap`. Si el
  cliente tiene tipografía propia, va como archivo local en `assets/`.
- Sin build, sin npm, sin backend, sin analytics salvo que lo pidan.
- Imágenes con `loading="lazy"` salvo la del hero, y `alt` en todas.

### Cuidado con la especificidad del CSS

El error más fácil de cometer acá es escribir selectores que se cancelan
entre sí, sobre todo en el espaciado de las secciones. Manejá el padding
desde una sola clase (`.section`) y que los modificadores (`.section--tight`)
tengan la misma especificidad y vayan después. Las variantes de color tocan
color, nunca espaciado.

Otro clásico: el header fijo tapa el título cuando alguien entra por un link
del menú. Se arregla con `scroll-margin-top` en las secciones.

## Esqueleto de la página

El orden es casi siempre este. Sacá lo que no aplique al rubro; no agregues
secciones para llenar.

1. **Header** — nombre o logotipo, tres o cuatro links, botón de contacto.
   Que cambie de estado al scrollear.
2. **Hero** — la afirmación más característica del cliente, la foto más
   fuerte y el botón de contacto. Es la tesis de la página: acá va el gesto.
3. **Qué hace** — servicios, productos o especialidades. Lista clara, con
   precios si el cliente los da.
4. **Prueba** — galería de trabajos, testimonios, casos, logos de clientes.
   Lo que exista de verdad. Si no hay nada, no inventes una sección de
   testimonios falsos.
5. **Quiénes son** — el local, el equipo, la historia. Una foto y un párrafo
   corto.
6. **Cómo llegar / cómo contactar** — dirección, horarios, mapa embebido de
   Google Maps (sin API key), redes.
7. **Cierre** — repetición del botón de contacto, grande, sin distracciones.
8. **Footer** — datos mínimos y el año por JS (`new Date().getFullYear()`).
9. **Barra fija en mobile** — el botón de contacto siempre a mano, que
   aparece después del hero.

## Secciones por rubro

Puntos de partida, no recetas. Lo que importa es cuál es la acción de
contacto que corresponde.

| Rubro | Secciones propias | La acción |
|---|---|---|
| Peluquería, barbería, estética | servicios con precios, galería de trabajos, el local | pedir turno |
| Gastronomía | carta o destacados, ambiente, horarios | reservar mesa / pedido |
| Estudio profesional (contable, jurídico) | áreas de práctica, el equipo con credenciales, casos | consulta |
| Oficio (herrería, carpintería, obra) | trabajos hechos con antes/después, zona de cobertura | pedir presupuesto |
| Salud, bienestar | prestaciones, obras sociales, el consultorio | turno |
| Comercio, producto | catálogo, dónde comprar, envíos | comprar / consultar stock |
| Evento, curso | qué es, cuándo, programa, quién lo da | inscribirse |

## Contacto

El botón de contacto es lo más importante de la página. Va arriba del scroll,
se repite en el cierre y queda fijo en mobile.

Si es WhatsApp, usá `https://wa.me/<número>?text=<mensaje>` con el número en
formato internacional sin `+` ni espacios y un mensaje predefinido escrito en
el tono del cliente. El mensaje predefinido baja mucho la fricción: la persona
sólo aprieta enviar.

Poné el número en un solo lugar del razonamiento y repetilo idéntico en todos
los links. Anotá en el README cuántas veces aparece, así se puede cambiar sin
buscar.

## Placeholders de imágenes

Cuando no hay fotos reales, generá SVG en escala de grises con la medida
correcta y un nombre descriptivo (`hero.svg`, `local.svg`, `trabajo-1.svg`).
Que se vean claramente como placeholders, no como diseño terminado.

En el README poné una tabla con el archivo, dónde aparece y la medida
sugerida, y aclarar que si las guardan con el mismo nombre no hay que tocar
el HTML. Como las fotos se ven en blanco y negro por CSS, el cliente puede
subirlas a color.

## El README

Corto y para el cliente, no para un programador. Cuatro cosas:

1. Cómo ver la página (abrir el `index.html`).
2. Cómo reemplazar las fotos.
3. Qué datos están escritos a mano en el HTML y dónde (contacto, dirección,
   horarios, redes) — con cuántas veces aparece cada uno.
4. Qué quedó pendiente.

Sumá un párrafo con las decisiones de diseño y su porqué: por qué esas
tipografías, dónde va el acento si hay, cuál es el gesto. Cuando alguien
retoque la página dentro de seis meses, eso es lo que evita que la rompa.
