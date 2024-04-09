function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  var indiceMayor = array[0];
  var indice = 0;

  for (let i = 1; i < array.length; i++) {
    if(indiceMayor <= array[i]) {
      indiceMayor = array[i];
      indice = i}
      }
   return indice;
  }

encontrarIndiceMayor([1,8,5,23,11,96,10])
module.exports = encontrarIndiceMayor;
