// EJERCICIO 1

// let nombreDeUsuario = prompt("Ingresa tu nombre de usuario");
// let contraseñaDelUsuario = prompt("Ingresa tu contraseña");

// let usuario = "AdaLove";
// let contraseña = "ada2019";

// if (nombreDeUsuario === usuario && contraseñaDelUsuario === contraseña) {
//     alert(`Bienvenida, ${usuario}`);
// }


// EJERCICIO 2

//let numero = prompt("Ingresa un numero");

// if (numero % 2 === 0) {
//     alert("El número es par")
// }
// else {
//     alert("El número es impar")
// };


// EJERCICIO 3

//  const edadUsuario = prompt("Ingresa tu edad");
//  const edadPermitida = 18;

// if (edadUsuario >= edadPermitida) {
//     alert("Ud. es mayor de edad")
// }
// else {
//     alert("Ud. es menor de edad")
// };


// EJERCICIO 4

// let nombreDeUsuario = prompt("Ingresa tu nombre de usuario");
// let contraseñaDelUsuario = prompt("Ingresa tu contraseña");

// let usuario = "AdaLove";
// let contraseña = "ada2019";

// if (nombreDeUsuario === usuario && contraseñaDelUsuario === contraseña) {
//     alert(`Bienvenida, ${usuario}`);
// }
// else {
//     alert(`Los datos ingresados son incorrectos`)
// };


// EJERCICIO 5

//nombreDeUsuario === usuario && contraseñaDelUsuario === contraseña ? alert(`Bienvenida, ${usuario}`) : alert(`Los datos ingresados son incorrectos`);

//numero % 2 === 0 ? alert("El número es par") : alert("El número es impar");

//edadUsuario >= edadPermitida ? alert("Ud. es mayor de edad") : alert("Ud. es menor de edad");


// EJERCICIO 6

// const horaIngresada = prompt("Ingresa la hora actual");

// if (horaIngresada > 5 && horaIngresada < 12){
//     alert("Buen día")
// }
// else if (horaIngresada >= 12 && horaIngresada < 20) {
//     alert("Buenas tardes")
// }
// else {
//     alert("Buenas noches")
// };


// EJERCICIO 7

// const notaAlumno = prompt("Ingresa una nota del 1 al 10");

// if (notaAlumno >= 9) {
//     alert("La nota es excelente")
// }
// else if (notaAlumno < 9 && notaAlumno >=6){
//     alert("La nota es buena")
// }
// else {
//     alert("El examen no esta aprobado")
// };


// EJERCICIO 8

const diaIngresadoPorUsuario = prompt("Ingresa un día de la semana");
const diaLunes = "Su nombre proviene de la luna. En latín, se lo llamaba 'dies Lūnae'";
const diaMartes = "Su nombre proviene del planeta Marte. En latín, se lo llamaba 'dies Martis'";
const diaMiercoles = "Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Mercuriī'";
const diaJueves = "Su nombre proviene del planeta Jupiter. En latín, se lo llamaba 'dies Iovis'";
const diaViernes = "Su nombre proviene del planeta Venus. En latín, se lo llamaba 'dies Veneris'";
const diaSabado = "Su nombre proviene del Shabat hebreo, el día de descanso del pueblo judío";
const diaDomingo = "Su nombre es cristiano y proviene de la palabra latina 'Dominica', que significa 'señoril', por ser 'el día del Señor'";

// if (diaIngresadoPorUsuario === "lunes") {
//     alert(diaLunes)
// } else if (diaIngresadoPorUsuario === "martes") {
//     alert(diaMartes)
// } else if (diaIngresadoPorUsuario === "miercoles") {
//     alert(diaMiercoles)
// } else if (diaIngresadoPorUsuario === "jueves") {
//     alert(diaJueves)
// } else if (diaIngresadoPorUsuario === "viernes") {
//     alert(diaViernes)
// } else if (diaIngresadoPorUsuario === "sabado") {
//     alert(diaSabado)
// } else if(diaIngresadoPorUsuario === "domingo") {
//     alert(diaDomingo)
// } else {
//     alert("La palabra ingresada es incorrecta")
// };


// EJERCICIO 8 CON SWITCH

switch (diaIngresadoPorUsuario) {
    case "lunes":
        alert(diaLunes)
        break;
    case "martes":
        alert(diaMartes)
        break;
    case "miercoles":
        alert(diaMiercoles)
        break;
    case "jueves":
        alert(diaJueves)
        break;
    case "viernes":
        alert(diaViernes)
        break;
    case "sabado":
        alert(diaSabado)
        break;
    case "domingo":
        alert(diaDomingo)
        break;
    default:
        alert("La palabra ingresada no es un día")
        break;
}