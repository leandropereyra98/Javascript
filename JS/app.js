console.log("Conectado");

let nombreUsuario = prompt("ingresa tu nombre");
console.log(nombreUsuario);

if(nombreUsuario === ""){
    alert("no ingresaste nombre de usuario")
}else{
    alert("Bienvenido " + nombreUsuario)
}


let ingresarNumero = parseInt(prompt("Ingresa un número"));
if (!isNaN(ingresarNumero)) {
 

  for (let i = 1; i <= 9; i++) {
    let resultado = ingresarNumero * i;
    alert(ingresarNumero + " x " + i + " = " + resultado);
  }
} else {
  alert("Ingresaste un valor no válido. Por favor, ingresa un número.");
}

function bienvenidos(){}
console.log("bienvenidos");

bienvenidos();