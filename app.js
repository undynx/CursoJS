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
let btnCarr = $("#btn-carrito")
let btnCerrCarr = $("#cerrar-carrito")
let carrito = $("#carrito")


// EVENTOS --------------------------------------------------------------------

btnAdd.on("click", precioP);
btnSig.on("click", cambiarTextos);
refresh.on("click", reload);
btnCarr.click(abrirCarr);
btnCerrCarr.click(cerrarCarr);

// FUNCIONES ------------------------------------------------------------------

function ok() {
    $("#popup-ok").slideDown("slow")
        .delay(2000)
        .slideUp("slow")
};

//----------------

function error() {
    $("#popup-error").slideDown("slow")
        .delay(1000)
        .slideUp("slow")
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

    function crearCard() {
        for (let w = 0; w < arrayPlatos.length; w++) {
            carrito.append(`<div class="kart-card">
            <p class="negrita">${arrayPlatos[w].plato}</p>
            <p>$ ${arrayPlatos[w].costo}</p>
        </div>`)
        }
    }


    if (entrada1 == "vegano") {
        precio = 180
        calculoPrecio();
        crearCard();

    } else if (entrada1 == "comun") {
        precio = 200
        calculoPrecio();
        crearCard();

    } else if (entrada1 == "economico") {
        precio = 150
        calculoPrecio();
        crearCard();

    } else {
        error()
    }

};

//----------------

function cambiarTextos() {

    if (arrayPlatos.length == 0) {
        error();
    } else {
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
    }


};

//----------------

function precioZ() {

    let precio
    let entrada2 = $(`#newInput`).val().toLowerCase()


    if (entrada2 == "z1") {
        precio = 20

    } else if (entrada2 == "z2") {
        precio = 30

    } else if (entrada2 == "z3") {
        precio = 50
    }

    sessionStorage.setItem(`precioZona`, precio)


};

//----------------

function total() {

    precioZ()

    let precioZona = Number(sessionStorage.getItem(`precioZona`))
    console.log(precioZona);

    let total = 0

    for (let x = 0; x < arrayPlatos.length; x++) {
        total = total + arrayPlatos[x].precioPlato()
    }

    totalFinal = total + precioZona

    console.log(`El valor es ${totalFinal}`)

    if (isNaN(totalFinal)) {

        error()

    } else {

        div2.append(`El valor es ${totalFinal}`)

    };
};

//----------------

function reload() {
    location.reload();
};

//----------------

function abrirCarr() {
    carrito.show()
}

//----------------

function cerrarCarr() {
    carrito.hide()
}

//----------------

/*
for (let w = 0; w < arrayPlatos.length; w++) {
    console.log(`${arrayPlatos[w].plato} sale ${arrayPlatos[w].costo}`);
}

<div class="kart-card">
            <p class="negrita">Comun</p>
            <p>$200</p>
        </div>

function crearCard() {
        for (let w = 0; w < arrayPlatos.length; w++) {
            carrito.append(`<div class="kart-card">
            <p class="negrita">${arrayPlatos[w].plato}</p>
            <p>$ ${arrayPlatos[w].costo}</p>
        </div>`)
        }
    }
*/

//-----------------