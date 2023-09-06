//Petición de nombre
function pedirNombre(){
    const nombre = prompt("Por favor, ingrese su nombre")
    localStorage.setItem("nombreUsuario", nombre)
    alert(`Bienvenid@ ${nombre}`)
}

//En caso de ya haber ingresado
/*
function saludar(nombre){
    alert(`Bienvenid@ de nuevo a mi heladería ${nombre}`)
}

let conseguirNombre = localStorage.getItem("nombreUsuario")

if(conseguirNombre){
    saludar(conseguirNombre)
} else {
    pedirNombre()
}
*/

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
//let medidaHelado = eleccionMedida()

//console.log(`Su elección fue registrada: ${medidaHelado} kg`);

//Ingreso de la cantidad de sabores y gustos
/*console.log(`Los sabores de helados disponibles son: ${sabores.join(", ")}`);

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
*/

//NUEVO
const productos = []

class Helado {
    constructor(medida, sabores) {
        this.medida = medida
        this.sabores = sabores
    }
}

function armarHelado(){

}

const formMedidaHelado = document.getElementById("form-medida")
/* formMedidaHelado.addEventListener("submit", (evento) => {
    evento.preventDefault(0);
    const data = new FormData(evento.target);
    console.log(data);
    const heladoSinProcesar = Object.fromEntries(data);
  
    //Funcion para agregar sabores de heladoSinProcesar elegidos a un array.
    let saboresElegidos = [];
    const crearArray = () => {
      //const sabores = ["americana", "frutilla", "vainilla", "chocolate", "dulce de leche", "oreo"]
      sabores.forEach((sabor) => {
        if (heladoSinProcesar.sabor == "on") {
          saboresElegidos.push(sabor);
        }
        //console.log(heladoSinProcesar.sabor);
        //console.log(sabor);
      });
    };
    crearArray();
  
    const helado = new Helado(heladoSinProcesar.medida, saboresElegidos);
    console.log(heladoSinProcesar); //{medida: '1/4', americana: 'on', chocolate: 'on', dulce de leche: 'on'}
    console.log(helado)
  }); */

  formMedidaHelado.addEventListener("submit", (event) => {
    event.preventDefault(0);
    const medidaHelado = document.getElementById("medida-helado").value;
    const saborAmericana = document.getElementById("americana");
    const saborFrutilla = document.getElementById("frutilla");
    const saborVainilla = document.getElementById("vainilla");
    const saborChocolate = document.getElementById("chocolate");
    const saborDulceDeLeche = document.getElementById("dulce-de-leche");
    const saborOreo = document.getElementById("oreo");
  
    const checkSabores = [
      saborAmericana,
      saborFrutilla,
      saborVainilla,
      saborChocolate,
      saborDulceDeLeche,
      saborOreo,
    ];
  
    let saboresElegidos = [];
    checkSabores.forEach((sabor) => {
      if (sabor.checked) {
        saboresElegidos.push(sabor.id);
      }
    });
  
    const helado = new Helado(medidaHelado, saboresElegidos);
    console.log(helado);
  });
  


const carrito = document.querySelector(".carrito")
carrito.innerHTML = `

`







//
const renderizarCarrito = ()=>{
    // borra el cotnenido de carrito y renderiza carrito en una lista
    const listaCarrito = document.getElementById("listaCarrito")
    // borramos para evitar clones viejos
    listaCarrito.innerHTML=""
    carrito.forEach(({name, price, quantity, id}) =>{
        let elementoLista = document.createElement("li")
        elementoLista.innerHTML=`Producto:${name} -- P/u: ${price} -- Cant.:${quantity} <button id="eliminarCarrito${id}">X</button>`
        listaCarrito.appendChild(elementoLista)
        const botonBorrar = document.getElementById(`eliminarCarrito${id}`)
        botonBorrar.addEventListener("click",()=>{
            // creo un array sin el elemento a borrar y lo igualo a carrito
            carrito = carrito.filter((elemento)=>{
                if(elemento.id !== id){
                    return elemento
                }
            })
            let carritoString = JSON.stringify(carrito)
            localStorage.setItem("carrito", carritoString)
            renderizarCarrito()
        })
        let carritoString = JSON.stringify(carrito)
        localStorage.setItem("carrito", carritoString)
    })
}