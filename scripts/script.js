//1- ENTRADA DISCOTECA
let edad=18;
if (edad>=18){
    console.log ("Adelante, disfruta de la fiesta");
}
else {
    console.log ("Vuelve cuando seas mayor");
}

//2 - CINCO COLORES
let color= prompt("Escoja un color (azul, verde, rojo, amarillo y violeta)");

if (color=="azul"){
    console.log("El azul es bello");

}
else if (color=="verde"){
    console.log("Las montañas son verdes");
}
else if (color=="rojo"){
    console.log("La sangre y el vino son rojos");
}
else if (color=="amarillo"){
    console.log("El maíz y el oro son de color amarillo");
}
else if (color=="violeta"){
    console.log("Las flores mas bellas son de color violeta");
}
else {
    console.log("No tengo información acerca del color " + color);
}

//3- LAMPARA NO ENCIENDE

console.log("La lámpara no funciona");
let plugged=false;
let burnedOut=true;

if (!plugged){
console.log("Conectala");
if (!plugged && burnedOut ){
console.log("Reemplaza el foco");}
}

if(!burnedOut || !plugged){
    console.log("Compra lámpara nueva");
}





