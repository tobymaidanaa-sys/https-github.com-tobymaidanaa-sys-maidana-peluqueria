/* Maidana Peluquería — interacciones.
   Tres cosas, nada más: la raya del hero, el revelado al
   scrollear y la barra de reserva en mobile. */

(function () {
  'use strict';

  var quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var head  = document.getElementById('head');
  var hero  = document.getElementById('inicio');
  var dock  = document.getElementById('dock');
  var cierre = document.getElementById('reservar');
  var anio  = document.getElementById('yr');

  if (anio) anio.textContent = new Date().getFullYear();

  /* ── la raya del hero ──────────────────────────────────
     La foto se abre desde el centro a medida que scrolleás
     el primer viewport. --part va de 0 a 1. */
  var pedido = false;

  function pintar() {
    pedido = false;
    var y = window.pageYOffset || document.documentElement.scrollTop;

    if (head) head.classList.toggle('is-stuck', y > 40);

    if (hero && !quieto) {
      var alto = hero.offsetHeight || 1;
      var p = y / alto;
      if (p < 0) p = 0;
      if (p > 1) p = 1;
      hero.style.setProperty('--part', p.toFixed(4));
    }
  }

  function alScrollear() {
    if (!pedido) {
      pedido = true;
      window.requestAnimationFrame(pintar);
    }
  }

  window.addEventListener('scroll', alScrollear, { passive: true });
  window.addEventListener('resize', alScrollear, { passive: true });
  pintar();

  /* ── revelado ──────────────────────────────────────────
     Sin IntersectionObserver se muestra todo de una: la
     página nunca queda en blanco. */
  var piezas = document.querySelectorAll('[data-reveal]');

  if (quieto || !('IntersectionObserver' in window)) {
    piezas.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var ojo = new IntersectionObserver(function (filas) {
      filas.forEach(function (fila) {
        if (fila.isIntersecting) {
          fila.target.classList.add('is-in');
          ojo.unobserve(fila.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.1 });

    piezas.forEach(function (el) { ojo.observe(el); });
  }

  /* ── barra de reserva en mobile ────────────────────────
     Aparece al salir del hero y se esconde cuando ya estás
     mirando el botón grande de reserva: nunca dos veces lo
     mismo en pantalla. */
  if (dock && hero && 'IntersectionObserver' in window) {
    dock.hidden = false;

    var fueraDelHero = false;
    var sobreElCierre = false;

    function acomodar() {
      dock.classList.toggle('is-up', fueraDelHero && !sobreElCierre);
    }

    new IntersectionObserver(function (filas) {
      fueraDelHero = !filas[0].isIntersecting;
      acomodar();
    }, { threshold: 0.15 }).observe(hero);

    if (cierre) {
      new IntersectionObserver(function (filas) {
        sobreElCierre = filas[0].isIntersecting;
        acomodar();
      }, { threshold: 0.2 }).observe(cierre);
    }
  }
})();
