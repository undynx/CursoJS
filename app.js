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
}

// identificadores 

let btnAdd = document.getElementById("agregar")
let titulo = document.getElementById("titulo")
let parr1 = document.getElementById("parr1")
let parr2 = document.getElementById("parr2")
let parr3 = document.getElementById("parr3")
let btnSig = document.getElementById("sig")
let div1 = document.getElementById("div1")

let newInput = document.createElement("input")
newInput.setAttribute("placeholder", "Escribí aquí la zona")
newInput.setAttribute("id", "newInput")

// EVENTOS --------------------------------------------------------------------

btnAdd.addEventListener("click", precioP)
btnSig.addEventListener("click", cambiar)

// FUNCIONES ------------------------------------------------------------------

function precioP() {

    alert(`Plato agregado correctamente!`)

    let precio
    let entrada1 = document.getElementById("entrada1").value

    if (entrada1 == "vegano") {
        precio = 180

    } else if (entrada1 == "comun") {
        precio = 200

    } else if (entrada1 == "economico") {
        precio = 150

    }

    let pedido = new Plato(entrada1, precio)
    arrayPlatos.push(pedido)

    console.log(arrayPlatos);

    return precio
}

//

function cambiar() {

    // cambiar los parrafos
    titulo.textContent = "Ahora elegí la zona de envío"
    parr1.textContent = `Escribí "z1", "z2" o "z3"`
    parr2.textContent = ""
    parr3.textContent = "Luego, clickeá en listo"

    //cambiar input
    div1.removeChild(entrada1)
    div1.appendChild(newInput)

    //crear boton listo
    div1.removeChild(btnSig)
    div1.removeChild(btnAdd)
    let btnListo = document.createElement("button")
    btnListo.textContent = "Listo"
    div1.appendChild(btnListo)
    btnListo.setAttribute("id", "btnListo")
    btnListo.addEventListener("click", total)
}

//

function precioZ() {
    //calculo precio de zona
    let precio
    let entrada2 = document.getElementById("newInput").value

    if (entrada2 == "z1") {
        precio = 20

    } else if (entrada2 == "z2") {
        precio = 30

    } else if (entrada2 == "z3") {
        precio = 50
    }
    return precio
}

precioZ()

//

function total() {

    let precioZona = precioZ()
    console.log(precioZona);

    let total = 0

    for (let x = 0; x < arrayPlatos.length; x++) {
        total = total + arrayPlatos[x].precioPlato()
    }

    totalFinal = total + precioZona

    console.log(`El valor es ${totalFinal}`)

    let newParr = document.createElement("p")
    newParr.innerText = `El valor es ${totalFinal}`
    div2.appendChild(newParr)

}