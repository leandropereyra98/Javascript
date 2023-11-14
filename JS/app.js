console.log("Conectado");

let nombreUsuario = prompt("Ingresa tu nombre");
console.log(nombreUsuario);

if (nombreUsuario === "") {
    alert("No ingresaste nombre de usuario");
} else {
    alert("Bienvenido " + nombreUsuario);
}

let ingresarNumero = parseInt(prompt("Ingresa un número"));

if (!isNaN(ingresarNumero)) {
    for (let i = 1; i <= 9; i++) {
        let resultado = ingresarNumero * i;
        alert(ingresarNumero + " x " + i + " = " + resultado);
    }

    
    sumaDosNumeros();
} else {
    alert("Ingresaste un valor no válido. Por favor, ingresa un número.");
}


function sumaDosNumeros() {
    let num1 = obtenerNumero("primer");
    let num2 = obtenerNumero("segundo");

    if (!isNaN(num1) && !isNaN(num2)) {
        alert("La suma de " + num1 + " y " + num2 + " es: " + (num1 + num2));
    } else {
        alert("Ingresaste valores no válidos. Por favor, ingresa números.");
    }
}

function obtenerNumero(ordinal) {
    return parseFloat(prompt("Ingresa el " + ordinal + " número para sumar"));
}