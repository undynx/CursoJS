// VARIABLES y RECURSOS --------------------------------------------------------

let arrayPlatos = []

class Plato {
    constructor(plato, costo) {
        this.plato = plato;
        this.costo = costo;
    }

    precioPlato() {
        let costoPlato = this.costo
        return costoPlato
    }
};

// identificadores 

let btnAdd = $("#agregar");
let titulo = $("#titulo");
let parr1 = $("#parr1");
let parr2 = $("#parr2");
let parr3 = $("#parr3");
let btnSig = $("#sig");
let div1 = $("#div1");
let refresh = $("#recargar")


// EVENTOS --------------------------------------------------------------------

btnAdd.on("click", precioP);
btnSig.on("click", cambiarTextos);
refresh.on("click", reload);

// FUNCIONES ------------------------------------------------------------------

function ok() {
    $("#notification").fadeIn("slow");
    $(".dismiss").click(setTimeout(function() {
        $("#notification").fadeOut("slow");
    }));
};

//----------------

function error() {
    $("#popup-error").fadeIn("slow");
    $(".dismiss").click(setTimeout(function() {
        $("#popup-error").fadeOut("slow");
    }));
};

//----------------

function precioP() {

    let precio
    let entrada1 = $(`#entrada1`).val().toLowerCase()

    function calculoPrecio() {
        let pedido = new Plato(entrada1, precio)
        arrayPlatos.push(pedido)

        console.log(arrayPlatos);
        ok();
        return precio
    }

    if (entrada1 == "vegano") {
        precio = 180
        calculoPrecio();

    } else if (entrada1 == "comun") {
        precio = 200
        calculoPrecio();

    } else if (entrada1 == "economico") {
        precio = 150
        calculoPrecio();

    } else {
        error()
    }

};

//----------------

function cambiarTextos() {

    // cambiar los parrafos
    titulo.text(`Ahora elegí la zona de envío`);
    parr1.text(`Escribí "z1", "z2" o "z3"`);
    parr2.text(``);
    parr3.text(`Luego, clickeá en listo`);

    //cambiar input
    entrada1.remove();
    div1.append(`
    <input type="text" id="newInput" placeholder="Escribí aquí la zona">`);

    //crear boton listo
    btnSig.remove();
    btnAdd.remove();
    div1.append(`
    <button id="btnListo">Listo</button>`)
    let btnListo = $("#btnListo")
    btnListo.on("click", total)

};

//----------------

function precioZ() {
    //calculo precio de zona
    let precio
    let entrada2 = $(`#newInput`).val().toLowerCase()

    if (entrada2 == "z1") {
        precio = 20

    } else if (entrada2 == "z2") {
        precio = 30

    } else if (entrada2 == "z3") {
        precio = 50
    }
    return precio

};

//----------------

function total() {

    precioZ()

    let precioZona = precioZ()
    console.log(precioZona);

    let total = 0

    for (let x = 0; x < arrayPlatos.length; x++) {
        total = total + arrayPlatos[x].precioPlato()
    }

    totalFinal = total + precioZona

    console.log(`El valor es ${totalFinal}`)

    if (isNaN(totalFinal)) {

        div2.append(`Hubo un error al realizar el cálculo. Recargá y volvé a intentarlo`)

    } else {

        div2.append(`El valor es ${totalFinal}`)

    };
};

//----------------

function reload() {
    location.reload();
};