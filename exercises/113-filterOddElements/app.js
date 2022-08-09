function filterOddElements(arr) {
  // your code here
  var aux = [];
  for(var index in arr ){
    if(arr[index]%2 != 0){
      aux.push(arr[index]);
    }  
    
  }
  return aux;
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]