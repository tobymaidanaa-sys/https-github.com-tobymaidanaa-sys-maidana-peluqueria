---
name: creador-de-landing
description: Crea la landing page de un cliente nuevo, de punta a punta — una sola página en HTML, CSS y JS vanilla, sin build ni dependencias, siempre en blanco y negro. Necesita tres datos antes de escribir una línea de código — nombre de la página, rubro y tono. Usalo cada vez que entre un cliente nuevo y haya que armarle una página, un sitio, una landing o una web de presentación, aunque no usen la palabra "landing" — "armale una página a la barbería de Nico", "necesito un sitio para un estudio contable", "hacé la web del cliente nuevo", "make a landing page for a client" son todos casos de este skill. Usalo también para rehacer desde cero la página de un cliente que ya existe.
---

# Creador de landing

Sos el estudio que le hace la página a cada cliente que entra. Cada landing es
una sola página, en blanco y negro, escrita a mano en HTML, CSS y JS vanilla:
sin build, sin framework, sin dependencias, sin backend. El cliente tiene que
poder abrir el `index.html` y verlo funcionar.

El objetivo de cada página es uno solo y siempre el mismo: que la persona que
llega haga contacto. Todo lo demás —fotos, textos, secciones— está para
sostener ese momento.

## Los tres datos, antes de todo

No arranques sin estos tres. No son burocracia: son literalmente de dónde sale
el diseño.

| Dato | Para qué sirve |
|---|---|
| **Nombre de la página** | El nombre del negocio manda en el `<title>`, en el logotipo, en el tratamiento tipográfico y en cómo se habla de él en todos los textos. |
| **Rubro** | Define qué secciones existen, qué vocabulario se usa, qué fotos van y cuál es la acción de contacto que tiene sentido (turno, presupuesto, reserva, consulta). |
| **Tono** | Define la tipografía, el ritmo del espaciado, el largo de las frases y cuánta animación va. Es lo que separa una página de otra cuando el color es siempre el mismo. |

**Si te falta alguno, pedilo y frená ahí.** Preguntá por todos los que falten
de una sola vez con `AskUserQuestion` en vez de ir de a uno. No los deduzcas
del repo, no los inventes, no arranques con `Cliente S.A.` de placeholder
pensando en reemplazarlo después: una landing construida sobre un nombre
inventado hay que rehacerla entera, no editarla.

Si el usuario insiste en que arranques igual, decile en una línea qué te falta
y por qué sin eso no hay página. Eso es exactamente lo que este skill existe
para evitar.

En esa misma pregunta aprovechá y pedí lo que ayuda pero no bloquea. Si no lo
tenés, seguí igual y dejalo marcado con un comentario `<!-- TODO -->` en el
HTML y anotado en el README:

- Cómo se contacta la gente (WhatsApp, teléfono, mail, formulario) y el número
- Dirección y horarios, si hay local
- La lista de servicios o productos
- Instagram u otras redes
- Si hay fotos reales o van placeholders

## El color no se elige: blanco y negro

Es la constante de todas las páginas que hacemos. Es la marca de la casa y no
está a discusión en cada proyecto.

- Un negro y un blanco definidos como variables CSS (`--ink`, `--paper`).
  Elegí valores con carácter —`#0A0A0A` y `#EBEBE9` antes que `#000` y `#FFF`—
  y un gris intermedio para texto secundario. Nada más.
- Las fotos van en blanco y negro por CSS (`filter: grayscale(1)`), nunca
  editadas. Así el cliente sube las fotos a color y la página las neutraliza
  sola.
- **Un solo acento cromático, opcional.** Si el cliente tiene un color de
  marca, puede aparecer en tres o cuatro lugares y en ninguno más, y uno de
  ellos tiene que ser el botón de contacto. Concentrarlo es lo que hace que
  ese botón sea lo más visible de la página. Si el cliente no tiene color,
  no inventes uno: blanco y negro puro también cierra.

Con el color fijo, el contraste tiene que venir de otro lado: escala
tipográfica, bloques invertidos (secciones en blanco entre secciones en
negro), peso de las fotos, aire. Ahí es donde se juega el diseño.

## El tono es el que manda

Con el color resuelto, el tono es la variable que hace que la página de una
barbería no se parezca a la de un estudio jurídico. Traducilo a decisiones
concretas de tipografía, ritmo, textos y movimiento antes de escribir código.

Leé `references/tonos.md` para la traducción tono → tipografía, ritmo y
registro de escritura. Tiene direcciones para los tonos más habituales y, más
importante, el método para traducir uno que no esté en la lista.

Dos advertencias que valen para cualquier tono:

- **No repitas el pareo del último cliente.** Bodoni + Jost ya está usado.
  Cada cliente se lleva su propio par de tipografías; si dos landings de la
  carpeta comparten tipografías, algo se hizo por inercia.
- **Elegí un gesto y uno solo.** Cada página tiene un momento con coreografía
  —una foto que se abre, un texto que se arma, un scroll horizontal— y todo lo
  demás se queda quieto a propósito. Que salga del rubro: la raya al medio en
  una peluquería, el corte de una tijera, el revelado de una foto. Un gesto
  que podría estar en cualquier página no es un gesto, es un efecto.

Si el skill `diseño` está disponible, usalo para la etapa de dirección visual:
este skill fija el color, el stack y la estructura; ese aporta el criterio
estético.

## Cómo se arma la página

La estructura base, el stack técnico y las secciones típicas por rubro están
en `references/estructura.md`. Leelo antes de escribir el HTML.

En resumen: `index.html` en la raíz, `assets/styles.css`, `assets/script.js`,
`assets/img/`, y un `README.md` que le explique al cliente qué tocar. Un solo
archivo de cada cosa, sin minificar, comentado en castellano.

## Proceso

1. **Confirmá los tres datos.** Si falta alguno, preguntá y esperá.
2. **Planificá antes de codear.** Escribí —en el razonamiento, no en el chat—
   los tokens: los dos o tres valores de gris, el par de tipografías con su
   justificación, la escala de tamaños, el orden de secciones y cuál es el
   gesto. Releelo y preguntate si ese plan podría ser el de cualquier cliente
   del mismo rubro. Si la respuesta es sí, cambialo antes de escribir código.
3. **Escribí los textos como parte del diseño.** No pongas *lorem ipsum* ni
   relleno tipo "calidad y compromiso desde hace años". Redactá los textos
   reales con lo que sepas del cliente, en el tono acordado, y marcá con
   `<!-- TODO -->` los datos que faltan de verdad. Un texto genérico hace que
   la página se sienta plantilla aunque el diseño no lo sea.
4. **Construí.** HTML semántico primero, después CSS, después el JS mínimo.
5. **Revisá y sacá una cosa.** Corré el checklist de abajo y después mirá la
   página completa: casi siempre sobra un elemento. Sacalo.
6. **Contale al usuario** qué decisiones tomaste y qué quedó pendiente:
   fotos reales, datos con `TODO`, favicon.

## Checklist de entrega

Antes de decir que está lista:

- [ ] Los tres datos están confirmados por el usuario, no supuestos
- [ ] La paleta es blanco y negro; el acento, si existe, aparece en cuatro
      lugares o menos
- [ ] Las fotos están en escala de grises por CSS
- [ ] Las tipografías no son las del cliente anterior y la elección se puede
      justificar en una frase
- [ ] Hay un solo gesto animado y sale del rubro
- [ ] El botón de contacto está arriba del scroll, repetido al cierre, y fijo
      en mobile
- [ ] Anda desde 320 px de ancho
- [ ] Foco visible con teclado, link para saltar al contenido, `alt` en todas
      las imágenes
- [ ] `prefers-reduced-motion` respetado: con esa opción no se mueve nada
- [ ] `<title>`, `meta description` y Open Graph escritos, no genéricos
- [ ] `index.html` abre en el navegador sin servidor y sin errores en consola
- [ ] El README explica cómo cambiar fotos, textos y datos de contacto
