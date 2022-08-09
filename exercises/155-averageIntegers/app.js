function average(array_of_numbers) {
  // process array of numbers
  return sum(array_of_numbers)/array_of_numbers.length;
}

function sum(numbers) {
  var aux = 0;
  for(value of numbers){
    aux += value;
  }
  return aux;
}