const nombre = prompt("Por favor, ingrese su nombre")

alert(`Bienvenid@ a mi heladería ${nombre}`)

//Medidas de helado disponibles
const medidas = ["1/4", "1/2", "1"]

//Ingreso de la cantidad del pedido
let medidaHelado = prompt("Ingrese la cantidad de helado (1/4, 1/2, 1)")

//Proceso de verificación de cantidad
const verificarSiNoEsMedida = (medida) => {
    if(medida === "1/4" || medida === "1/2" || medida === "1") {
        return false
    } else {
        return true
    }
}

function eleccionMedida(medida) {
    let noEsMedida = verificarSiNoEsMedida(medida)
    while(noEsMedida){
        medidaHelado = prompt("Elija una medida válida (1/4, 1/2, 1)")
        noEsMedida = verificarSiNoEsMedida(medidaHelado)
    }
}

eleccionMedida(medidaHelado)

console.log(`Su elección fue registrada: ${medidaHelado} kg`);

//Sabores de helado
const sabores = ["americana", "frutilla", "vainilla", "chocolate", "dulce de leche", "oreo"]

console.log(`Los sabores de helados disponibles son: ${sabores.join(", ")}`);

//Proceso de verificación de sabores
const verificarSiNoEsSabor = (sabor) => {
    if(sabores.indexOf(sabor) >= 0) {
        return false
    } else {
        return true
    }
}

function eleccionSabor(sabor) {
    let esSabor = verificarSiNoEsSabor(sabor)
    while(esSabor) {
        esSabor = verificarSiNoEsSabor(prompt("Elija un sabor incluido en nuestro menú"))
    }
}

//Elección de cuántos gustos (EN PROCESO)
/*const cuantosSabores = prompt("Ingrese la cantidad de gustos a elegir")

let primerSaborHelado = null
let segundoSaborHelado = null
let tercerSaborHelado = null

if(medidaHelado === "1/4"){
    console.log("Puede elegir hasta tres sabores.");
    primerSaborHelado = prompt("Ingrese su primer sabor:").toLowerCase()
    eleccionSabor(primerSaborHelado)
    segundoSaborHelado = prompt("Ingrese su segundo sabor:").toLowerCase()
    eleccionSabor(segundoSaborHelado)
    tercerSaborHelado = prompt("Ingrese su tercer sabor:").toLowerCase()
    eleccionSabor(tercerSaborHelado)
} else if(medidaHelado === "1/2") {
    console.log("Puede elegir hasta cuatro sabores");
    primerSaborHelado = prompt("Ingrese su primer sabor:")
    segundoSaborHelado = prompt("Ingrese su segundo sabor:")
    tercerSaborHelado = prompt("Ingrese su tercer sabor:")
} else if(medidaHelado === "1") {
    console.log("Puede elegir hasta cinco sabores");
    primerSaborHelado = prompt("Ingrese su primer sabor:")
    segundoSaborHelado = prompt("Ingrese su segundo sabor:")
    tercerSaborHelado = prompt("Ingrese su tercer sabor:")
}*/
