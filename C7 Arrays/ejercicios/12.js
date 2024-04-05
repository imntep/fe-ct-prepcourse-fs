function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  var mayuscula = array.map(function(string) {
    return string.toUpperCase();
    
  })

return mayuscula;

}

module.exports = convertirStringAMayusculas;
