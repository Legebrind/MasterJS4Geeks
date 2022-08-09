function transformFirstAndLast(array) {
  // your code here
  var clave = array[0];
  var aux ={};
  aux[array[0]] = array[array.length-1];
    return aux;
}