//-------------- Selección de Elementos --------------//
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const alerta = document.querySelector(".texto-alerta");
const respuesta = document.querySelector(".resultado");
const contenido = document.querySelector(".lateral-container");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

//------------- Botón de encriptar -------------//
btnEncriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let texto = txtEncriptar.value;
  let txt = texto
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']"/g, "");

  if (texto == "") {
    alerta.style.background = "#0A3871";
    alerta.style.color = "#ffff";
    alerta.style.fontWeight = "800";
    alerta.textContent = "El campo de texto no debe estar vacío";

    setTimeout(() => {
      alerta.removeAttribute("style");
    }, 1500);
  } else if (texto !== txt) {
    alerta.style.background = "#0A3871";
    alerta.style.color = "#ffff";
    alerta.style.fontWeight = "800";
    alerta.textContent = "No debe tener acentos y caracteres especiales";

    setTimeout(() => {
      alerta.removeAttribute("style");
    }, 1500);
  } else if (texto !== texto.toLowerCase()) {
    alerta.style.background = "#0A3871";
    alerta.style.color = "#ffff";
    alerta.style.fontWeight = "800";
    alerta.textContent = "Todo el texto debe ser en minúsculas";

    setTimeout(() => {
      alerta.removeAttribute("style");
    }, 1500);
  } else {
    texto = texto.replace(/a/gm, "ai");
    texto = texto.replace(/e/gm, "enter");
    texto = texto.replace(/i/gm, "imes");
    texto = texto.replace(/o/gm, "ober");
    texto = texto.replace(/u/gm, "ufat");

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
  }
});

//------------- Botón de desencriptar -------------//
btnDesencriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let texto = txtEncriptar.value;
  let txt = texto
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']"/g, "");

  if (texto == "") {
    alerta.style.background = "#0A3871";
    alerta.style.color = "#ffff";
    alerta.style.fontWeight = "800";
    alerta.textContent = "El campo de texto no debe estar vacío";

    setTimeout(() => {
      alerta.removeAttribute("style");
    }, 1500);
  } else if (texto !== txt) {
    alerta.style.background = "#0A3871";
    alerta.style.color = "#ffff";
    alerta.style.fontWeight = "800";
    alerta.textContent = "No debe tener acentos y caracteres especiales";

    setTimeout(() => {
      alerta.removeAttribute("style");
    }, 1500);
  } else if (texto !== texto.toLowerCase()) {
    alerta.style.background = "#0A3871";
    alerta.style.color = "#ffff";
    alerta.style.fontWeight = "800";
    alerta.textContent = "Todo el texto debe ser en minúsculas";

    setTimeout(() => {
      alerta.removeAttribute("style");
    }, 1500);
  } else {
    texto = texto.replace(/ai/gm, "a");
    texto = texto.replace(/enter/gm, "e");
    texto = texto.replace(/imes/gm, "i");
    texto = texto.replace(/ober/gm, "o");
    texto = texto.replace(/ufat/gm, "u");

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
  }
});

//-------Boton de Copiar-------//
btnCopiar.addEventListener("click", (e) => {
  e.preventDefault();
  let copiar = respuesta;
  copiar.select();
  document.execCommand("copy");
});
