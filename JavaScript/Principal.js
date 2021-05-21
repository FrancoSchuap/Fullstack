console.log("hola codo a codo");

var nombreVar1 = 4;
let nombreVar2 = 4;


let sumaDeDosVariables = nombreVar1 + nombreVar2;

console.log(sumaDeDosVariables);

let myEdad = parseInt(prompt("Ingrese edad"));

const EDAD_MIN = 18;

let tieneEdadMinima = (myEdad >= EDAD_MIN);

console.log(tieneEdadMinima);
if(tieneEdadMinima == false){
    alert("No podes ingresar, sos menor.")
    document.location = "\Principal.html";
} else{
    alert("congratulations!")
}