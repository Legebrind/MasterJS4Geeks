function computeSumOfAllElements(arr) {
  // your code here
  if(arr.length == 0){
    return 0;
  }
  var aux = 0;
  for(var index in arr ){
      
      aux += arr[index];
          
  }
  return aux;
  }

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6