let comprador = prompt(`Bienvenido, porfavor ingrese su nombre completo`)
let verAutos = confirm(`Bienvenido sr/a ${comprador}, desea conocer nuestros modelos`)


class auto {
    constructor(marca, color, modelo, precio, vendedor){
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.precio = precio;
        this.vendedor = vendedor;
    }
} 
let vendedor0 = "matias"
let vendedor1 = "maximiliano"

let carrito = []

let auto0 = new auto ("bmw", "rojo", "basico", 100000, vendedor0);
let auto1 = new auto ("ford", "negro", "premium", 600000, vendedor1);
let auto2 = new auto ("audi", "azul", "premium", 500000, vendedor1);
let auto3 = new auto ("peugeot", "blanco", "intermedio", 20000, vendedor0);
let auto4 = new auto ("citroen", "blanco", "basico", 10000, vendedor0);
let auto5 = new auto ("peugeot", "premium", "clase A", 700000, vendedor1);
let auto6 = new auto ("bmw", "rojo", "intermedio", 300000, vendedor1);

carrito.push(auto0)
carrito.push(auto1)
carrito.push(auto2)
carrito.push(auto3)
carrito.push(auto4)
carrito.push(auto5)
carrito.push(auto6)

//filtro por marca
let autosMatias = carrito.filter(e => e.vendedor == vendedor0) 
console.log(autosMatias);

let autosMaximiliano = carrito.filter(e => e.vendedor == vendedor1)
console.log(autosMaximiliano);

let autosDeMatias = document.querySelector("#autosDeMatias")
let autosDeMaximiliano = document.querySelector("#autosDeMaximiliano")

carrito.forEach(e => {
    autosDeMatias.innerHTML += `
    <p>${e.marca}</p> 
    <p>${e.color}</p>
    <p>${e.modelo}</p>
    <p>${e.precio}</p>
    <p>${e.vendedor}</p>
    `
})
carrito.forEach(e => {
    autosDeMaximiliano.innerHTML += `
    <p>${e.marca}</p> 
    <p>${e.color}</p>
    <p>${e.modelo}</p>
    <p>${e.precio}</p>
    <p>${e.vendedor}</p>
    `
})