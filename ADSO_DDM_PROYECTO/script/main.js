var min = 10000000;
var max = 100000000;
var numeroEfecty = Math.floor(Math.random() * (max - min + 1)) + min;
document.getElementById("resultado").innerHTML = numeroEfecty;

function validarCampo(idCampo) {
    var campo = document.getElementById(idCampo);
    var valor = parseInt(campo.value);
    if (isNaN(valor)) {
      campo.value = ""; // Si el valor no es un número, se limpia el campo
    } else {
      // Si el valor está fuera del rango, se ajusta al rango permitido
      if (valor < 0) {
        campo.value = 0;
      } else if (valor > 9) {
        campo.value = 9;
      }
    }
  }

 