function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  var texto = num.toString();

  return (texto.length === 3);


}

module.exports = tieneTresDigitos;
