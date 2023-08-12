let nombre = prompt("Por favor, ingrese su nombre")

alert(`Bienvenid@ a mi heladería ${nombre}`)

//Medidas de helado disponibles
const medidas = ["1/4", "1/2", "1"]

//Ingreso de la cantidad del pedido
const medidaHelado = prompt("Ingrese la cantidad de helado (1/4, 1/2, 1)")

//Proceso de verificación de cantidad
const verificarSiNoEsMedida = (medida) => {
    if(medida === "1/4" || medida === "1/2" || medida === "1") {
        return false
    } else {
        return true
    }
}

function eleccionMedida(medidaHelado) {
    let esMedida = verificarSiNoEsMedida(medidaHelado)
    while(esMedida){
        esMedida = verificarSiNoEsMedida(prompt("Elija una medida válida (1/4, 1/2, 1)"))
    }
}

eleccionMedida(medidaHelado)

console.log(`Su elección fue registrada: ${medidaHelado} kg`);

/*switch(medidaHelado) {
    case "1/4":
        alert("Elegiste un cuarto de kilo");
        break;
    case "1/2":
        alert("Elegiste medio kilo");
        break;
    case "1":
        alert("Elegiste un kilo");
        break;
    default:
        alert("Tiene que elegir una cantidad correcta")
        let loop = confirm("Volver a elegir")
        while(loop){
            prompt("Ingrese la cantidad de helado (1/4, 1/2, 1)")
            loop = false
        }
}*/

//Sabores de helado
const sabores = ["americana", "frutilla", "vainilla", "chocolate", "dulce de leche", "oreo"]

console.log(`Los sabores de helados disponibles son: ${sabores.join(", ")}`);

//Proceso de verificación de sabores


if(medidaHelado === "1/4"){
    console.log("Puede elegir hasta tres sabores.");
    const primerSaborHelado = prompt("Ingrese su primer sabor:")
} else if(medidaHelado === "1/2") {
    console.log("Puede elegir hasta cuatro sabores");
} else if(medidaHelado === "1") {
    console.log("Puede elegir hasta cinco sabores");
}


//let loop = confirm("Quiere elegir")
