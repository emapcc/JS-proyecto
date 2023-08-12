let nombre = prompt("Por favor, ingrese su nombre")

alert(`Bienvenid@ a mi heladería ${nombre}`)

//Medidas de helado
const medidas = ["1/4", "1/2", "1"]

const medidaHelado = prompt("Ingrese la cantidad de helado (1/4, 1/2, 1)")

function eleccionMedida(medidaHelado) {
    let esMedida = verificarSiNoEsMedida(medidaHelado)
    while(esMedida){
        esMedida = verificarSiNoEsMedida(prompt("Elija una medida válida (1/4, 1/2, 1)"))
    }
}

const verificarSiNoEsMedida = (medida) => {
    if(medida === "1/4" || medida === "1/2" || medida === "1") {
        return false
    } else {
        return true
    }
}

eleccionMedida(medidaHelado)

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
const sabores = ["americana", "frutilla", "vainilla", "chocolate", "dulce de leche"]

//let loop = confirm("Quiere elegir")
