// RECURSOS ---------------------------------------------------

localStorage.getItem(`arrayPlatos`, JSON.parse(arrayPlatos));
console.log(arrayPlatos);

// IDENTIFICADORES ---------------------------------------------

let btnCarr = $("#btn-carrito")
let btnCerrCarr = $("#cerrar-carrito")
let carrito = $("#carrito")

// EVENTOS -----------------------------------------------------

btnCarr.click(abrirCarr);
btnCerrCarr.click(cerrarCarr);

// FUNCIONES ---------------------------------------------------

function abrirCarr() {
    carrito.show()
}

//----------------

function cerrarCarr() {
    carrito.hide()
}