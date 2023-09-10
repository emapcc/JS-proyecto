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
// function cuantosSabores(maximoSabores) {
//     let elegirNumeroSabores = parseInt(prompt("Ingrese la cantidad de gustos a elegir"))
//     while(elegirNumeroSabores <= 0 || elegirNumeroSabores > maximoSabores){
//         elegirNumeroSabores = parseInt(prompt(`Ingrese una cantidad de gustos válida (hasta ${maximoSabores})`))
//     }
//     return elegirNumeroSabores
// }

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
let productos = []

class Helado {
    constructor(numero, medida, sabores) {
        //Propiedades del objeto
        this.id = numero
        this.medida = medida
        this.sabores = sabores
    }
    //Métodos del objeto
    get conseguirMedida() {
        return this.medida
    }
    get conseguirSabores() {
        return this.sabores
    }
    get conseguirHelado() {
        return `Producto: Helado de ${this.medida} kg con los sabores: ${this.sabores.join(`, `)}`
    }
}

//Función para agregar item al carrito
const crearCarrito = () => {
    //Obtenemos el carrito
    const carrito = document.querySelector(".carrito")
    //Lo vaciamos
    carrito.innerHTML = ""
    //Creo variable que va a ir al storage
    let productosJSON = JSON.stringify(productos)
    //Agregamos item
    for (const producto of productos) {
        let item = producto.conseguirHelado
        let idHelado = producto.id
        let itemCarrito = document.createElement("li")
        itemCarrito.innerHTML = `<p id="helado${idHelado}">${item} <button id="item${idHelado}">X</button></p>`
        carrito.appendChild(itemCarrito)
        
        //Guarda el array de productos
        productosJSON = JSON.stringify(productos)
        sessionStorage.setItem("productos", productosJSON)
        
        //Recupera el botón creado en HTML de eliminar producto
        const botonEliminar = document.getElementById(`item${idHelado}`);
        //Agrego un evento
        botonEliminar.addEventListener("click", () => {
            //Elimina el li con el producto
            itemCarrito.remove();
            // Encuentra el índice del producto en el array de productos
            const index = productos.findIndex((producto) => producto.id === idHelado);
            if (index !== -1) {
                productos.splice(index, 1); // Elimina el producto del array
            }
        //Guarda nuevamente el array de productos si se borró alguno
        productosJSON = JSON.stringify(productos)
        sessionStorage.setItem("productos", productosJSON)
        });
    }
}

function buscarCarritoEnStorage() {
    let productosJS = JSON.parse(sessionStorage.getItem("productos"))

    if(productosJS) {  
        let carritoViejo = []

        for(const item of productosJS) {
            let helado = new Helado(item.id, item.medida, item.sabores)
            carritoViejo.push(helado)
        }

        productos.push(...carritoViejo)

    } 
}

//Recuperamos form HTML
const formMedidaHelado = document.getElementById("form-medida")
//Recuperamos respuestas del usuario del form HTML con un evento
formMedidaHelado.addEventListener("submit", (event) => {
    event.preventDefault();
    const medidaHelado = document.getElementById("medida-helado").value;
    const saborAmericana = document.getElementById("americana");
    const saborFrutilla = document.getElementById("frutilla");
    const saborVainilla = document.getElementById("vainilla");
    const saborChocolate = document.getElementById("chocolate");
    const saborDulceDeLeche = document.getElementById("dulce-de-leche");
    const saborOreo = document.getElementById("oreo");
    
    //Guarda resp usuario de cada sabor en un array
    const checkSabores = [
      saborAmericana,
      saborFrutilla,
      saborVainilla,
      saborChocolate,
      saborDulceDeLeche,
      saborOreo,
    ];
    
    let saboresElegidos = [];
    
    //Recorre y agrega el name al array saboresElegidos que contiene los sabores chequeados
    checkSabores.forEach((sabor) => {
      if (sabor.checked) {
        saboresElegidos.push(sabor.name);
      }
    });
    let contador = parseInt((Math.random() * 100000))
    
    //Crea el objeto Helado con la respuesta del formulario medida y el array creado con los sabores
    const helado = new Helado(contador, medidaHelado, saboresElegidos);
    productos.push(helado);

    productosJSON = JSON.stringify(productos);
    sessionStorage.setItem("productos", productosJSON);

    //Ejecuta 
    crearCarrito()
});

//Busca si había previamente algún elemento en el carrito
buscarCarritoEnStorage()
//Actualiza el carrito
crearCarrito()