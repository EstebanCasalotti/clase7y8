class usuarios {
    constructor(usuario, email, contraseña){
        this.usuario = usuario;
        this.email = email;
        this.contraseña = contraseña;
    }
}
const listaConUsuarios = []
const datos = () => {
    let usuario = prompt("ingrese su nombre de usuario")
    let email = prompt("ingrese su email")
    let contraseña = prompt("ingrese su contraseña")
    const usuario0 = new usuarios(usuario, email, contraseña)
    listaConUsuarios.push(usuario0)
    console.log(listaConUsuarios);
}
// para crear mas usuarios escriba en la consola " datos() "
datos()

// para ver los datos escrba en la consola " mostrarDatos() "
const mostrarDatos = () => {

    listaConUsuarios.forEach(elements => {
        console.log("tu usuario" + " ",elements.usuario);
        
    })

    listaConUsuarios.forEach(elements => {
        console.log("tu email es" + " ",elements.email);
        
    })

    listaConUsuarios.forEach(elements => {
        console.log("tu contraseña es" + " ",elements.contraseña);
        
    })
}