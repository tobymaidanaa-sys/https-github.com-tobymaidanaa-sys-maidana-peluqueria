# Maidana Peluquería — landing page

Landing de una sola página para el salón de Gorriti 5253, Palermo Soho.
HTML, CSS y JS vanilla. Sin build, sin dependencias, sin backend.

```
index.html
assets/
  styles.css
  script.js
  img/            placeholders — reemplazar por fotos reales
```

## Verla

Abrí `index.html` en el navegador, o levantá un servidor local:

```bash
npx http-server -p 8080
```

## Reemplazar las fotos

Los archivos de `assets/img/` son placeholders generados. Poné las fotos
reales con **el mismo nombre** y listo — no hay que tocar el HTML.

| Archivo | Dónde aparece | Medida sugerida |
|---|---|---|
| `hero.svg` | Fondo del hero | 2400 × 1400 |
| `salon.svg` | Sección "El salón" | 1000 × 1250 (vertical 4:5) |
| `trabajo-1.svg` … `trabajo-6.svg` | Galería | 900 × 900 (cuadradas) |

Si las guardás como `.jpg` en vez de `.svg`, cambiá la extensión en los
`src` de `index.html`. Las fotos se muestran en blanco y negro por CSS
(`filter: grayscale(1)`), así que podés subirlas a color.

## Datos que están escritos en el HTML

Si algo de esto cambia, se edita a mano en `index.html`:

- **WhatsApp** — `5491160227232`, con el mensaje predefinido. Aparece 4 veces:
  header, hero, sección de reserva y barra fija de mobile.
- **Dirección** — Gorriti 5253, Palermo Soho, CABA
- **Horario** — Martes a sábado, de 11 a 19 h
- **Instagram** — [@maidanapeluqueria](https://instagram.com/maidanapeluqueria)
- **Mapa** — iframe de Google Maps, sin API key

## Decisiones de diseño

**Tipografía.** Bodoni Moda para los títulos, Jost para el texto. Bodoni es
la tipografía de los mastheads de moda; Jost es un geométrico tipo Futura.
Didot + Futura es un pareo clásico de revista, y ubica al salón en el mundo
editorial en vez del de peluquería de barrio. Se cargan desde Google Fonts.

**Color.** Negro (`#0A0A0A`) y blanco roto (`#EBEBE9`). El degradado del logo
(naranja → rosa → violeta) aparece en cuatro lugares y en ninguno más: el
anillo del logo, la raya del hero, el botón de WhatsApp y el guioncito que
encabeza cada sección. Concentrarlo es lo que hace que el botón de WhatsApp
sea lo más visible de la página, que es el objetivo del sitio.

**La raya del hero.** La foto de portada está partida en dos mitades que se
abren desde el centro al scrollear, con una línea del degradado en el medio.
Es la raya al medio, el gesto básico de la peluquería. Es el único momento
con coreografía de la página; todo lo demás se queda quieto a propósito.

**El logo** está hecho en CSS, no es una imagen: escala sin pixelarse a
cualquier tamaño. Si preferís usar el archivo original, reemplazá el bloque
`.mark` en `index.html`.

## Accesibilidad

Responsive desde 320 px. Foco visible con teclado, link para saltar al
contenido, textos alternativos en las fotos, y `prefers-reduced-motion`
respetado — con esa opción activada no se mueve nada, ni la raya del hero
ni los fundidos.

## Pendiente

- Fotos reales (ver arriba).
- Favicon.
- Si el salón tiene Google Business, conviene cambiar el iframe del mapa
  por el embed de la ficha, que muestra reseñas y horario.
