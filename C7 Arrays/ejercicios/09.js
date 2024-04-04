function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   // var indiceAleatorio = Math.ceil(Math.random(0, array.length) * 10);
   // console.log(array[indiceAleatorio]);

   var indiceAleatorio = Math.round(Math.random()*array.length);
   console.log(array[indiceAleatorio]);
}

obtenerElementoAleatorio([1, 2, 3, 4, 5])

module.exports = obtenerElementoAleatorio;
