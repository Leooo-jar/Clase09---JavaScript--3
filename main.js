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

// -------------------------------------------

function mostrarArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
mostrarArray(numeros);

function estaElemento(numeros, num) {
  for (let contador = 0; contador < numeros.length; contador++) {
    if (numeros[contador] === num) {
      return true;
    }

    return false;
  }
}
