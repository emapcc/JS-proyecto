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

//Sabores de helado
const sabores = ["americana", "frutilla", "vainilla", "chocolate", "dulce de leche", "oreo"]

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

//Proceso de elección de cantidad de sabores
function cuantosSabores(maximoSabores) {
    let elegirNumeroSabores = parseInt(prompt("Ingrese la cantidad de gustos a elegir"))
    while(elegirNumeroSabores <= 0 || elegirNumeroSabores > maximoSabores){
        elegirNumeroSabores = parseInt(prompt(`Ingrese una cantidad de gustos válida (hasta ${maximoSabores})`))
    }
    return elegirNumeroSabores
}

//Bucle para elección de sabores según cantidad
function eleccionTodosLosSabores(numeroDeSabores) {
    let elecciones = []
    for(let i = 1; i <= numeroDeSabores; i++){
        elecciones.push(eleccionSabor())
    }
    return elecciones
}

//INGRESO DE DATOS DEL USUARIO

//Ingreso de la cantidad del pedido
let medidaHelado = eleccionMedida()

console.log(`Su elección fue registrada: ${medidaHelado} kg`);

//Ingreso de la cantidad de sabores y gustos
console.log(`Los sabores de helados disponibles son: ${sabores.join(", ")}`);

let nroSaboresElegidos
let saboresElegidos

if(medidaHelado === "1/4"){
    console.log("Puede elegir hasta tres sabores.");
    nroSaboresElegidos = cuantosSabores(3)
    saboresElegidos = eleccionTodosLosSabores(nroSaboresElegidos)

} else if(medidaHelado === "1/2") {
    console.log("Puede elegir hasta cuatro sabores");
    nroSaboresElegidos = cuantosSabores(4)
    saboresElegidos = eleccionTodosLosSabores(nroSaboresElegidos)

} else if(medidaHelado === "1") {
    console.log("Puede elegir hasta cinco sabores");
    nroSaboresElegidos = cuantosSabores(5)
    saboresElegidos = eleccionTodosLosSabores(nroSaboresElegidos)

}

//PEDIDO FINAL
alert(`El pedido final es: ${medidaHelado} kg con los sabores ${saboresElegidos.join(", ")}`);