//Petición de nombre
function pedirNombre(){
    const nombre = prompt("Por favor, ingrese su nombre")
    localStorage.setItem("nombreUsuario", nombre)
    alert(`Bienvenid@ ${nombre}`)
}

//En caso de ya haber ingresado
function saludar(nombre){
    alert(`Bienvenid@ de nuevo a mi heladería ${nombre}`)
}

let conseguirNombre = localStorage.getItem("nombreUsuario")

if(conseguirNombre){
    saludar(conseguirNombre)
} else {
    pedirNombre()
}

//Medidas de helado disponibles
const medidas = ["1/4", "1/2", "1"]

//Sabores de helado
const sabores = ["americana", "frutilla", "vainilla", "chocolate", "dulce de leche", "oreo"]

//Proceso de verificación de cantidad
const verificarSiNoEsMedida = (medida) => {
    if(medida === "1/4" || medida === "1/2" || medida === "1") {
        return false
    } else {
        return true
    }
}

function eleccionMedida() {
    let elegirMedida = prompt("Ingrese la cantidad de helado (1/4, 1/2, 1)")
    let noEsMedida = verificarSiNoEsMedida(elegirMedida)
    while(noEsMedida){
        elegirMedida = prompt("Elija una medida válida (1/4, 1/2, 1)")
        noEsMedida = verificarSiNoEsMedida(elegirMedida)
    }
    return elegirMedida
}

//Proceso de verificación de sabores
const verificarSiNoEsSabor = (sabor) => {
    if(sabores.indexOf(sabor) >= 0) {
        return false
    } else {
        return true
    }
}

function eleccionSabor() {
    let elegirSabor = prompt("Ingrese sabor:").toLowerCase()
    let esSabor = verificarSiNoEsSabor(elegirSabor)
    while(esSabor) {
        elegirSabor = prompt("Elija un sabor incluido en nuestro menú")
        esSabor = verificarSiNoEsSabor(elegirSabor)
    }
    return elegirSabor
}

//Proceso de elección de sabores
function cuantosSabores(maximoSabores) {
    let elegirNumeroSabores = parseInt(prompt("Ingrese la cantidad de gustos a elegir"))
    while(elegirNumeroSabores <= 0 || elegirNumeroSabores > maximoSabores){
        elegirNumeroSabores = parseInt(prompt(`Ingrese una cantidad de gustos válida (hasta ${maximoSabores})`))
    }
    return elegirNumeroSabores
}

//function 
/* let i = 1
        while(i <= elegirNumeroSabores){

        }
        for(let i=1; i<=elegirNumeroSabores; i++){
            
        } */

//Ingreso de la cantidad del pedido
let medidaHelado = eleccionMedida()

console.log(`Su elección fue registrada: ${medidaHelado} kg`);

console.log(`Los sabores de helados disponibles son: ${sabores.join(", ")}`);

//Ingreso de sabores elegidos (EN PROCESO)
/*
let primerSaborHelado = null
let segundoSaborHelado = null
let tercerSaborHelado 

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
