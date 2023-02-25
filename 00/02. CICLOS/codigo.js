//WHILE

let index = 0;
while(index < 11){
    console.log ("Voy en el número" + index)
    index++; // index = index + 1
}

index = 0;
while(index < 11){
    console.log(index + " * " + 2 + " = " + (index*2))
    index++;
}

let palabra;
let lista = []
while(palabra !=""){
    palabra = prompt("¿Qué añado?")
    lista.push(palabra)
}

console.log("Mi Lista: " + lista)

// DO WHILE

let dinero = 100;

do{
    console.log("Probar una Idea. Gasto 100.")
    dinero -= 100
    console.log("Intento Vender La Idea")

// parseInt es para enteros; 1, 50, 500
// parseFloat es para reales: 1, 2.5, 500.66778

    let resultadoVenta = parseInt(prompt("¿Cuánto gané o perdí?"))
    dinero = dinero + resultadoVenta
    console.log("Dinero Final: "+ dinero)

}while( dinero >= 100); 

console.log("Ya no puedo emprender. Estoy casi endeudado!")

/** 
 * 
 * ----------------------------------------------
 * Ejemplo de constraseña
 * ----------------------------------------------
 *  */
let contraseña = "patito"
let input;
do{
    input = prompt("Contraseña:")

}while (input != contraseña)

alert("Bienvenido")

/** 
 * 
 * ----------------------------------------------
 * Ejemplo de constraseña con 5 intentos
 * ----------------------------------------------
 *  */
contraseña = "patito"
input = ""
intentos = 0;
do{
    if(intentos >= 5){
        throw Error("Acceso Denegado")
}
    input = prompt("Contraseña:")
    intentos ++;
}while(input != contraseña)

alert("Bienvenido")

//FOR

var contador = 0;

for(let i = 1, x = 0; i <= 10; i++, x++){
    if(i%2 == 0){
        contador++;
    }
    console.log(x + "*"+ 2 + "=" + (x*2))
}

console.log("Numeros Pares entre 1 y 10: " + contador)



