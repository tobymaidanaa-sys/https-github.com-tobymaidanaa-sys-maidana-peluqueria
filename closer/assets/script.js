/* ============================================================
   CLOSER PELUQUERÍA — lo poco que se mueve.

   La página es HTML y CSS. Este archivo hace tres cosas y nada más:
   marcar la cabecera cuando se scrollea, mostrar la barra de turno en
   celulares una vez que pasa el inicio, y poner el año en el pie.

   El gesto del inicio (las luces del espejo encendiéndose) es CSS puro:
   no depende de este archivo.
   ============================================================ */
(function () {
  "use strict";

  var cabecera = document.getElementById("cabecera");
  var barra    = document.getElementById("barra");
  var inicio   = document.getElementById("inicio");
  var anio     = document.getElementById("anio");

  /* El año del copyright, para no tener que tocarlo cada enero */
  if (anio) {
    anio.textContent = new Date().getFullYear();
  }

  /* La cabecera se despega del fondo apenas se scrollea */
  if (cabecera) {
    var marcarCabecera = function () {
      cabecera.classList.toggle("esta-abajo", window.scrollY > 12);
    };
    marcarCabecera();
    window.addEventListener("scroll", marcarCabecera, { passive: true });
  }

  /* La barra de turno aparece cuando el inicio sale de pantalla.
     Con IntersectionObserver, que no cuesta nada; si el navegador no
     lo tiene, la barra queda visible y listo. */
  if (barra && inicio) {
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entradas) {
        barra.classList.toggle("se-ve", !entradas[0].isIntersecting);
      }, { rootMargin: "-70px 0px 0px 0px" }).observe(inicio);
    } else {
      barra.classList.add("se-ve");
    }
  }
})();
