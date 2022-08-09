function squareElements(arr) {
  // your code here
  var aux = [];
  for(var index in arr ){
    aux.push(Math.pow(arr[index],2));
  }
  return aux;
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]