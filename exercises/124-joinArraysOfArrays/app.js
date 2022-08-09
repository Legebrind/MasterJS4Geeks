function joinArrayOfArrays(arr) {
  // your code here
  var aux=[];
  for(value of arr){
    aux = aux.concat(value);
  }
  return aux;
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']