let MenuCompleto = []

class PedidoCompleto {
    constructor(costo, envio) {
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

alert(`Bienvenide a la calculadora de menú`)

/*function precioP() {
    let precio
    if (platoElegido == "vegano") {
        precio = 180
    } else if (platoElegido == "comun") {
        precio = 200
    } else if (platoElegido == "economico") {
        precio = 150
    } else {
        alert(`Ups! Parece que no tenemos ese plato :( Recargá y volvé a intentarlo`)
        throw new RangeError(`Ups! Parece que no tenemos ese plato :(`)
    }
    return precio
}*/

let platoElegido = prompt(`Qué deseas pedir hoy? Escribí "comun", "vegano" o "economico"`).toLowerCase()

function precioP() {
    let precio
    do {
        if (errorPlato == true) {
            platoElegido = prompt(`Parece que no tenemos ese plato, escribí "comun", "vegano" o "economico"`).toLowerCase()
            errorPlato = false
        }
        if (platoElegido == "vegano") {
            precio = 180
        } else if (platoElegido == "comun") {
            precio = 200
        } else if (platoElegido == "economico") {
            precio = 150
        } else {
            errorPlato = true
        }
    } while (errorPlato == true)

    return precio
}

let errorPlato = false

let precioPlato = precioP()

//
//
//

/*function precioZ() {
    let precio
    if (zonaElegida == "z1") {
        precio = 20
    } else if (zonaElegida == "z2") {
        precio = 30
    } else if (zonaElegida == "z3") {
        precio = 50
    } else {
        alert(`Ups! Parece que no realizamos envíos a esa zona :( Recargá y volvé a intentarlo`)
        throw new RangeError(`Ups! Parece que no realizamos envíos a esa zona :(`)
    }
    return precio
}*/

let zonaElegida = prompt(`A qué zona enviaremos el pedido? Escribí "z1", "z2" o "z3"`).toLowerCase()

function precioZ() {
    let precio
    do {
        if (errorZona == true) {
            zonaElegida = prompt(`Parece que no hacemos envíos a esa zona, escribí "z1", "z2" o "z3"`).toLowerCase()
            errorZona = false
        }
        if (zonaElegida == "z1") {
            precio = 20
        } else if (zonaElegida == "z2") {
            precio = 30
        } else if (zonaElegida == "z3") {
            precio = 50
        } else {
            errorZona = true
        }
    } while (errorZona == true)

    return precio
}

let errorZona = false

let precioZona = precioZ()


//
//
//

const Pedido = new PedidoCompleto(precioPlato, precioZona)
MenuCompleto.push(Pedido)

//
//
//

let pregunta = confirm(`Deseas pedir algo mas?`)

if (pregunta == true) {
    do {
        platoElegido = prompt(`Qué más deseás agregar? Escribí "comun", "vegano" o "economico"`).toLowerCase()
        precioP();
        precioPlato = precioP();

        const Pedido = new PedidoCompleto(precioPlato, 0)
        MenuCompleto.push(Pedido)

    } while (confirm(`Deseas pedir algo mas?`) == true)
};

//
//
//

let total = 0

function precioCompleto() {
    for (let x = 0; x < MenuCompleto.length; x++) {
        total = total + MenuCompleto[x].precioFinal()
    }
    alert(`El valor de tu pedido es $${total}`)
}

precioCompleto();
console.log(MenuCompleto);
console.log((`El valor de tu pedido es ${total}`));