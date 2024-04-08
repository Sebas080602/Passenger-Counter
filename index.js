// document.getElementById("count-el").innerText = 5
// pasa el ID count-el de ser 0 a ser 5

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch// Que la cuenta sea 0 , variable
// console.log(count) // imprimir variable


// Practice : Create a variable, myAge, and set its value to your age
// let myAge = 21 

// Then, log(registrar) the myAge variable to the console
// console.log(myAge)

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

// let myAge = 21
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let count = 5 

// Reasinacion e incremento
// count + 1 
// count = count + 1   5 + 1 = 6
// count = count + 2  // 5 + 2 = 7
// count = count + 10  // 7 + 10 = 17
// count = count - 2 // 17 - 2 = 15

// count = 3

// count = 1 // imprimira el que esta mas proximo al comando console

// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

/// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// Cuerpo de onclick
// function increment() {
//    console.log("Le diste click al boton")
// }

// Utilizar funciones para escribir menos código

// function countdown() {
//    console.log(5)
//    console.log(4)
//    console.log(3)
//    console.log(2)
//    console.log(1)
// }

// Setting up the the race 
// countdown() // LLamada de la funcion ( Imprime )

// GO! 
// Players are running the race 
// Race is finished! 

// Get ready for a new race 
// countdown()

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function practice() {
//    console.log(42)
// }

// practice()

// Escriba una función que loguee la suma
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// Create a function that logs out the sum of all the lap times
// function sum() {
//    result = lap1 + lap2 + lap3
//    console.log(result)
// }

// sum()

// Escriba una función que incremente

// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

// function incrementLap() {
//   lapsCompleted = lapsCompleted + 2
// }

// incrementLap()
// incrementLap()
// incrementLap()


// Incremento en clics


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked

// Visualizar el contenido
// change the count-el in the HTML to reflect the new count

// let countEl = document.getElementById("count-el") // pass in arguments
// console.log(countEl)

// let count = 0

// function increment() {
//    count = count + 1
//    countEl.innerText = count
// }

// El modelo de objetos del documento DOM en ingles

// Document es el HTML document
// document = {object}
// Model es una representacion 

// Mostrar el recuento con innerText
// grab the count-el element, store it in a countEl variable
// let countEl = document.getElementById("count-el") // count-el es el elemento
// Y countEl es la variable
// let count = 0

// function increment() {
    // count = count + 1
    // set countEl's innerText to the count
    // countEl.innerText = count
// }

// Crear el botón de guardar
// 1. Create a function, save(), which logs(guarde) out the count when it's called

// function save() {
//     console.log(count)
// }

// Que es una cadena? "count-el" por ejemplo

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//    count = count + 1
//    countEl.innerText = count
// }

// function save() {
//    console.log(count)
// }

// Escriba su primera variable de cadena
// let username = "Sebas"
// console.log(username)

// Create a variable, message, that stores the string: "You have tree new notifications"
// let message = "You have tree new notifications"
// console.log(message)

// console.log(message + ", " + username + "!")

// Create a variable, messageToUser, that contains the message we have logged
// let messageToUser = "Has iniciado sesion correctamente"
// console.log(messageToUser)

// Registrar un saludo en la consola
// let username = "Sebas"
// let message = "You have tree new notifications"

// let messageToUser = message + ", " + username + "!"

// console.log(messageToUser)

// Cadenas frente a números
// let name = "42"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// let points = 4 // numero
// let bonusPoints = "10" // cadena

// console.log(4 + 5) 
// console.log("2" + "4")
// console.log("5" + 1)
// console.log(100 + "100")

// Utilice más igual para contar
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
    // Change this to use the plus equal technique you've learned
//    count += 1
//    countEl.innerText = count
// }

// function save() {
//    console.log(count)
// }

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    console.log(count) 
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let separador = count + " -"
    // 3. Render the variable in the saveEl using innerText
    // saveEl.innerText += separador
    saveEl.textContent += separador // its better for me
    // NB: Make sure to not delete the existing content of the paragraph
    // Inicializar en 0
    countEl.textContent = 0
    count = 0
}

