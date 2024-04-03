function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:

   var arregloString = string.split("");
   var arregloInvertido = string.split("").reverse();
   for (let i = 0; i < arregloString.length / 2; i++) {
      if (arregloString[i] === arregloInvertido[i])
         return true;
   }
   return false;
}

module.exports = esPalindromo;
