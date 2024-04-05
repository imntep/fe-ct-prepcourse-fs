function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  var longitudes = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      longitudes.push(array[i]);
    } 
  }
 if (longitudes === 0) return undefined;
 return longitudes;



}

obtenerPrimerStringLargo(['hell', 'word', 'this', 'is', 'a', 'test'])

module.exports = obtenerPrimerStringLargo;
