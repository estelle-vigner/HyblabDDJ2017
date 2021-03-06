'use strict';

document.getElementById('enroute').addEventListener("click", function() {
  $.fn.fullpage.moveSectionDown();
}, false);

document.getElementById('continuer').addEventListener("click", function() {
  if (hasSelectedPoints()) {
    $.fn.fullpage.moveSectionDown();
  }
}, false);

document.getElementById('commencer').addEventListener("click", function() {
  $.fn.fullpage.moveSectionDown();
}, false);

document.getElementById('buttonEncadre1').addEventListener("click", function() {
  var value = document.getElementById('encadre1').style["z-index"];
  if (value != 0) {
      value = 0;
      $.fn.fullpage.moveSectionDown();
  } else {
    value = 11;
  }
  document.getElementById('encadre1').style["z-index"] = value;
}, false);

document.getElementById('buttonEncadre2').addEventListener("click", function() {
  var value2 = document.getElementById('encadre2').style["z-index"];
  if (value2 != 0) {
      value2 = 0;
      $.fn.fullpage.moveSectionDown();
  } else {
    value2 = 11;
  }
  document.getElementById('encadre2').style["z-index"] = value2;
}, false);

document.getElementById('buttonEncadre3').addEventListener("click", function() {
  var value2 = document.getElementById('encadre3').style["z-index"];
  if (value2 != 0) {
      value2 = 0;
      $.fn.fullpage.moveSectionDown();
  } else {
    value2 = 11;
  }
  document.getElementById('encadre3').style["z-index"] = value2;
}, false);
