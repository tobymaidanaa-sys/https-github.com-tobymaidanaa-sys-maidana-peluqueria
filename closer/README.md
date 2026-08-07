# Closer Peluquería — la página

Una sola página, en HTML, CSS y JavaScript escritos a mano. No usa ningún
programa raro ni necesita internet para funcionar: son cuatro archivos y una
carpeta de fotos.

```
closer/
  index.html        la página entera (textos, secciones, links)
  assets/
    styles.css      cómo se ve
    script.js       lo poco que se mueve
    img/            las fotos
  README.md         esto
```

## Cómo verla

Doble clic en `index.html` y se abre en el navegador. No hace falta nada más.
Para publicarla, subí la carpeta `closer/` entera a donde la tengas alojada.

## Cómo cambiar las fotos

Hoy están los placeholders grises. Reemplazalos por fotos reales **con el mismo
nombre de archivo** y no hay que tocar el HTML.

| Archivo | Dónde aparece | Medida sugerida |
|---|---|---|
| `assets/img/hero.svg` | Retrato del inicio, al lado del nombre | 1000 × 1300 px (vertical) |
| `assets/img/trabajo-1.svg` | Galería, la primera (la más alta) | 900 × 1350 px (vertical) |
| `assets/img/trabajo-2.svg` | Galería | 900 × 1200 px (vertical) |
| `assets/img/trabajo-3.svg` | Galería | 900 × 1200 px (vertical) |
| `assets/img/trabajo-4.svg` | Galería | 900 × 1200 px (vertical) |
| `assets/img/salon.svg` | Sección "El salón" | 1000 × 1250 px (vertical) |

Son todas verticales porque el material real de una peluquería es el retrato:
una foto apaisada corta el pelo justo donde se ve el trabajo. La del salón
también, porque muestra el local a lo largo.

### El logo

El logo (la C con la tijera) todavía no está en la página: hoy el header
muestra el logotipo escrito en la tipografía de títulos. Para ponerlo:

1. Guardalo como `assets/img/logo.svg` — **SVG con fondo transparente y el
   dibujo en negro**. No sirve un PNG con fondo blanco: arriba del todo el
   header está sobre el fondo oscuro y se vería un rectángulo blanco.
2. En el `index.html`, buscá `head__logo-img` y sacale los `<!--` y `-->` a
   esa línea.

La página lo invierte sola: blanco mientras el header está sobre el fondo
oscuro del inicio, negro cuando pasa a fondo claro. Con ese mismo archivo se
puede generar el favicon, que hoy es una "C" provisoria.

Dos cosas importantes:

1. **Subilas a color.** La página las pasa a blanco y negro sola, por CSS. Si
   algún día quieren verlas a color, se saca una línea del `styles.css`
   (`img{ filter:grayscale(1); }`).
2. Si guardás las fotos en `.jpg` en vez de `.svg`, hay que cambiar la
   extensión en el `index.html` (buscá `trabajo-1.svg` y demás). Es más fácil
   dejarlas con el nombre exacto de la tabla, pero en `.jpg` funciona igual
   con ese único cambio.

## Datos escritos a mano en el HTML

Todo está en `index.html`. Si cambia alguno, buscalo con `Ctrl+F` y
reemplazalo **en todos los lugares donde aparece**:

| Dato | Cómo buscarlo | Cuántas veces aparece |
|---|---|---|
| WhatsApp (link) | `wa.me/5491127149770` | 5 |
| Teléfono (link para llamar) | `tel:+5491127149770` | 1 |
| Teléfono (texto visible) | `11 2714-9770` | 3 |
| Instagram | `closerpeluqueria` | 3 (link, texto visible y un comentario) |
| Nombre del negocio | `Closer` | en el título, el logo, el pie y los textos |

El mensaje que ya viene escrito cuando alguien abre el WhatsApp es
*"Hola Closer, quiero pedir un turno"*. Está en la parte `?text=` de los links:
si lo cambiás, cambialo en los 5.

## Qué quedó pendiente

Están marcados en el `index.html` con el comentario `<!-- TODO -->`, así se
encuentran rápido:

- [ ] **Fotos reales.** Hoy hay placeholders grises en los 6 lugares.
- [ ] **El logo** como `assets/img/logo.svg` (ver la sección de arriba).
- [ ] **Precios de los servicios.** Los 6 dicen "Consultar".
- [ ] **Confirmar el texto de "Adentro".** La frase sobre el turno reservado
      la escribimos nosotros, no vino del cliente: hay que chequear que sea
      cierta antes de publicar.
- [ ] **Dirección del salón** y **horarios de atención**: dicen "A confirmar".
- [ ] **Mapa de Google**: cuando haya dirección, se pega el `iframe`
      (en Google Maps: Compartir → Insertar un mapa → copiar el código).
- [ ] **Usuario real de Instagram.** Está puesto `@closerpeluqueria` como
      supuesto.
- [ ] **Favicon** (el iconito de la pestaña): hoy es una "C" provisoria.
- [ ] **Imagen para compartir** (`og:image`): una foto de 1200 × 630 px
      guardada como `assets/img/og.jpg`, y descomentar la línea del `<head>`.

## Las decisiones de diseño, por si alguien retoca esto más adelante

**Color.** Blanco y negro, sin excepción. Un negro apenas suavizado (`#0B0B0B`)
y un blanco cálido de papel de revista (`#EDEBE7`), más un gris para el texto
secundario. No hay color de acento: si algún día Closer define uno de marca,
tiene que aparecer en cuatro lugares como máximo y uno de ellos tiene que ser
el botón de WhatsApp. Meterlo en más lugares le saca fuerza justo al botón que
importa.

Como el color es fijo, el contraste lo hacen otras cosas: secciones negras
alternadas con secciones claras, títulos muy grandes contra textos muy chicos,
y mucho aire entre bloques.

**Tipografías.** *Instrument Serif* para los títulos y *Archivo* para el texto.
La serif tiene el contraste alto de una tapa de revista de moda —es lo que le
da el aire editorial— y su itálica funciona como acento, que es de dónde sale
el énfasis cuando no hay color. Archivo es un neogrotesco neutro que sostiene
el texto largo sin pelearse con los títulos. Las dos vienen de Google Fonts y
se cargan en el `<head>`.

**El gesto.** La página tiene un solo momento animado, y es el inicio: el
nombre "Closer" entra con las letras muy separadas y se van juntando, mientras
la foto se aproxima. El nombre significa *más cerca*, así que la animación dice
literalmente lo mismo que la marca. Todo el resto de la página está quieto a
propósito: si se le agregan más animaciones, esa deja de leerse como un gesto y
pasa a ser decoración.

**El botón de contacto.** Es el elemento más importante y por eso aparece tres
veces: arriba de todo, en la sección "Turnos" y en el cierre. En celulares hay
además una barra fija abajo que aparece apenas se pasa el inicio.

**Accesibilidad.** La página se puede recorrer entera con el teclado (el foco
se ve), todas las fotos tienen texto alternativo, y si alguien tiene activada
la opción del sistema de "reducir movimiento", no se mueve nada.
