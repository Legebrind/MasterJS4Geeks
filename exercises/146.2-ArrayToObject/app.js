function fromListToObject(array) {
  // your code here
  var aux ={};
  for(const [key,value] of array){
    aux[key] = value;
  }
  return aux;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }