let numero = 11

console.log (0 <= numero)
console.log (numero >= 0)

let edadMinima = 18
let edadMaxima = 65

let edad = 60

console.log("¿Es un buen candidato")
console.log(edadMinima <= edad && edad <=edadMaxima)

//"prompt" nos sirve para pedirle datos al usuario en forma de palabras/strings/cadenas
//let usuario = "Adriana"
let usuario = prompt("Dime tu nombre")
let usuarioEnBaseDeDatos = "Adriana"

//Ejecución

//"console.log" nos sirve para imprimir datos en la consola de desarrollo 
//Nos ayuda mucho a ver los datos que se tienen en un instante de mi códigos
console.log("¿El Usuario es el mismo?")
console.log(usuario == usuarioEnBaseDeDatos)

console.log("Si son diferentes, ¿debo hecharlo?")
//console.log(usuario != usuarioEnBaseDeDatos)

// Si es el usuario es correcto dile bienvenido
if (usuario != usuarioEnBaseDeDatos){
    console.log("Si")
    alert("Adios! No eres bienvenido")
}else{
    console.log("No")
    alert("Bienvenido, Pásele a lo barrio")
}

/**
 * Estructura recomendada pero no es la única
 * 
 * Variables
 * 
 * Funciones
 * 
 * Ejecución de código
 */