/* function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
    console.log("El número es par");
  } else {
    return false;
    console.log("El número es impar");
  }
} */

// Else If
/* if (hora > 18) {
  alert("Esta cerrado, es de tarde");
} else if (hora >= 9) {
  alert("Esta cerrado, es de mañana");
} else {
  alert("Esta cerrado, es de noche");
} */

// For Tradicional

const marcas = ["BMW", "Audi", "Volvo", "Ford", "Mazda"];

for (let i = 0; i < marcas.length; i++) {
  console.log(marcas[i]);
}

// For Of

for (const marca of marcas) {
  console.log(marca);
}
