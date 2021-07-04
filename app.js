/* precios 
let vegano = 180
let comun = 200
let economico = 150

let z1 = 20
let z2 = 30
let z3 = 50
*/

alert(`Bienvenide a la calculadora del menú diario!`)

class PedidoCompleto {
    constructor(plato, costo, envio) {
        this.plato = plato;
        this.costo = costo;
        this.envio = envio;
    }

    precioFinal() {
        let valorTotal = this.costo + this.envio;
        return valorTotal;
    }
}

//
//
//
//
//

let tipoMenu = prompt(`Qué deseas pedir hoy? Escribí "vegano", "comun" o "economico"`).toLowerCase();

function precioPlato() {
    if (tipoMenu == "vegano") {
        precioP = 180
    } else if (tipoMenu == "comun") {
        precioP = 200
    } else if (tipoMenu == "economico") {
        precioP = 150
    } else {
        alert(`Ups! Parece que no tenemos ese plato :(`)
    }
    return precioP
}

let precio1 = precioPlato()

//
//
//
//
//

let zona = prompt(`En qué zona estás? Escribí "z1", "z2" o "z3"`).toLowerCase();

function precioZona() {
    let precioZ
    if (zona == "z1") {
        precioZ = 20
    } else if (zona == "z2") {
        precioZ = 30
    } else if (zona == "z3") {
        precioZ = 50
    } else {
        alert(`Ups! Parece que estás en una zona a la que no llegamos :(`)
    }
    return precioZ
};

let precio2 = precioZona();

//
//
//
//
//

const PedidoDeseado = new PedidoCompleto(tipoMenu, precio1, precio2);
console.log(PedidoDeseado);

alert(`El precio de tu pedido es ${PedidoDeseado.precioFinal()}`);