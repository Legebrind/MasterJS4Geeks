function computeProductOfAllElements(arr) {
    // your code here
    if(arr.length == 0){
        return 0;
    }
    var aux = 1;
    for(var index in arr ){
        
        aux *= arr[index];
            
  }
  return aux;
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60