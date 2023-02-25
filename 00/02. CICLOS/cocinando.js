let ingredientes =[
    [1, "kg", "Espaguetti"],
    [4, "L", "Agua"],
    "500,ml,Crema Acida".split(","),
    [300, "gr", "Queso"],
    [2, "Cucharadas","Mantequilla"],
    [2, "Cucharadas","Aceite"],
    ["Al gusto", "Sal"],
    ["Al gusto", "Pimienta"],
    [500, "gr", "Tocineta"],
];


let utenciliosDeCocina =[
    "Olla",
    "Sarten",
    "Rayador",
    "Palita de madera",
    "Colador",

]

let receta;

// Como cambiar dinámicamente mi página
//document.querySelector("#ingredientes").innerHTML += ingredientes

for(let index = 0; index < ingredientes.lenght; index++){
    let ingredienteBonito = ""
    // Usamos un segundo ciclo para recorrer los
    // elementos de nuestro ingrediente:
    // cantidad, medida,  nombre
    // o medida, nombre (en caso de sal y pimienta)
    for(let indexx2 = 0; indexx2<ingredientes[index].lenght; indexx2++){
        ingredienteBonito += ingredientes[index][indexx2]
        ingredienteBonito += " "
    }
    document.querySelector("#ingredientes").innerHTML += "<li>" + ingredienteBonito + "</li>"
}

// utenciliosDeCocina

for(let index=0; index < utenciliosDeCocina.lenght; index++){
    console.group("Iteracion" + index)

    console.log("index < utenciliosDeCocina.lenght = " + (index + " < " + utenciliosDeCocina.length) + " = " + )

    console.log("Imprimiendo en Pantalla.... Datos: " + "<li>" + utenciliosDeCocina[index] + "</li>" )
    document.querySelector("#").innerHTML += "<li>" + utenciliosDeCocina[index] + "</li>"
    
    
    console.log("Terminó iteración y mi nuevo index tiene el valor: " + (index+1"))
    console.groupEnd()
}

// Tarea
// Agregar un ciclo para colocar la receta con los <li>(list items)


//Tarea 2
// Imprimir en pantalla un cuadro
// let lado = 6
// ***********
// ***********
// ***********
// ***********
// ***********
// ***********

//Tarea 3
// Imprimir un cuadro pero alternado
// let lado = 6
// ***********
// -----------
// ***********
// -----------
// ***********