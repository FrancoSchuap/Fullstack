console.log("hHola Mundo");

var nombreVar1 = 4;
let nombreVar2 = 4;


let sumaDeDosVariables = nombreVar1 + nombreVar2;

console.log(sumaDeDosVariables);

let myEdad = parseInt(prompt("Ingrese edad"));

const EDAD_MIN = 18;
const EDAD_MAX = 100;

let tieneEdadMinima = (myEdad >= EDAD_MIN) & (myEdad <= EDAD_MAX);

console.log(tieneEdadMinima);
if(tieneEdadMinima == false)
{
    if(myEdad < EDAD_MIN)
    {
        alert("No podes ingresar, sos menor.")
        document.location = "\index.html";
    }
    if (myEdad > EDAD_MAX)
    {
        alert("No podes ingresar, edad inválida.")
        document.location = "\index.html";
    }
} else{
    alert("bienvenido!")
}