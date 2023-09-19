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
        return `Producto: Helado de ${this.medida} kg con los sabores: ${(this.sabores).join(", ")}`
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
        itemCarrito.innerHTML = `<p id="helado${idHelado}">${item} <button id="item${idHelado}">Eliminar</button></p>`
        carrito.appendChild(itemCarrito)
        
        //Guarda el array de productos
        productosJSON = JSON.stringify(productos)
        localStorage.setItem("productos", productosJSON)
        
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
        localStorage.setItem("productos", productosJSON)
        });
    }
}

//Función para recuperar array de productos en el storage si es que hay
function buscarCarritoEnStorage() {
    //Recupera el localStorage
    let productosJS = JSON.parse(localStorage.getItem("productos"))

    //Si no estaba vacío
    if(productosJS) {  
        let carritoViejo = []
        for(const item of productosJS) {
            let helado = new Helado(item.id, item.medida, item.sabores)
            carritoViejo.push(helado)
        }
        productos.push(...carritoViejo)
    } 
}

//Función para realizar la compra
function realizarCompra() {
    let idDeCompra = parseInt((Math.random() * 1000000000))
    Swal.fire({
        title: `Tu ID de compra es: #${idDeCompra}`,
        width: 600,
        padding: '3em',
        color: 'white',
        background: 'rgba(216, 196, 250, 1)',
        backdrop: `
            rgba(255, 255, 255, 0.6)
            left top
            no-repeat
        `
    })
    // const itemsEnCarrito = document.querySelector()
    const carrito = document.querySelector(".carrito")
    carrito.innerHTML = ""
    productos = []

    productosJSON = JSON.stringify(productos);
    localStorage.setItem("productos", productosJSON);

    crearCarrito()
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
    
    //Corrobora que las opciones pasadas sean correctas
    if(saboresElegidos.length > 0 && medidaHelado) {
        if(medidaHelado == "1/4") {
            if (saboresElegidos.length > 3) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-start',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                
                Toast.fire({
                    icon: 'warning',
                    title: 'Excede el límite de sabores'
                })
            } else {
                const helado = new Helado(contador, medidaHelado, saboresElegidos);
                productos.push(helado);
            }
        } else if (medidaHelado == "1/2") {
            if (saboresElegidos.length > 4) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-start',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                
                Toast.fire({
                    icon: 'warning',
                    title: 'Excede el límite de sabores'
                })
            } else {
                const helado = new Helado(contador, medidaHelado, saboresElegidos);
                productos.push(helado);
            }
        } else if (medidaHelado == "1") {
            if (saboresElegidos.length > 5) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-start',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                
                Toast.fire({
                    icon: 'warning',
                    title: 'Excede el límite de sabores'
                })
            } else {
                const helado = new Helado(contador, medidaHelado, saboresElegidos);
                productos.push(helado);
            }
        }
    } else if (saboresElegidos.length <= 0) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-start',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        
        Toast.fire({
            icon: 'warning',
            title: 'Debe ingresar al menos un sabor'
        })
    } else if (!medidaHelado) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-start',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        
        Toast.fire({
            icon: 'warning',
            title: 'Debe ingresar una medida'
        })
    }

    //Guarda en el Storage los productos recibidos
    productosJSON = JSON.stringify(productos);
    localStorage.setItem("productos", productosJSON);

    //Actualiza el carrito
    crearCarrito()
});

//Busca si había previamente algún elemento en el carrito
buscarCarritoEnStorage()
crearCarrito()

//Proceso de compra
const botonDeCompra = document.getElementById("boton-comprar")
botonDeCompra.addEventListener("click", () => {
    if (productos.length > 0) {
        realizarCompra()
    }else {
        Swal.fire({
            title: 'Debes agregar productos al carrito',
            width: 600,
            padding: '3em',
            color: '#000000',
            background: '#fff',
            backdrop: `
                #ff000080
                left top
                no-repeat
            `
        })
    }
})