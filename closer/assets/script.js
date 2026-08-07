/* ===========================================================
   Closer Peluquería — el JS mínimo que necesita la página.
   Hace tres cosas y nada más:
     1. cambia el header de transparente a fondo claro al scrollear
     2. muestra la barra fija de mobile cuando el hero sale de pantalla
     3. escribe el año en el pie
   El gesto animado del hero es CSS puro: no está acá.
   =========================================================== */
(function () {
  'use strict';

  /* --- 1. Header --------------------------------------------------- */
  var head = document.getElementById('head');

  function marcarHeader() {
    if (!head) return;
    head.classList.toggle('is-scrolled', window.scrollY > 40);
  }

  marcarHeader();
  window.addEventListener('scroll', marcarHeader, { passive: true });


  /* --- 2. Barra fija de mobile -------------------------------------
     Aparece recién cuando el hero deja de verse, para no pisar el
     botón que ya está arriba. Si el navegador no soporta
     IntersectionObserver, la barra queda visible desde el arranque. */
  var barra = document.getElementById('barra');
  var hero  = document.getElementById('inicio');

  if (barra && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entradas) {
      barra.classList.toggle('is-on', !entradas[0].isIntersecting);
    }, { threshold: 0 }).observe(hero);
  } else if (barra) {
    barra.classList.add('is-on');
  }


  /* --- 3. Año del pie ----------------------------------------------- */
  var anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();

})();
