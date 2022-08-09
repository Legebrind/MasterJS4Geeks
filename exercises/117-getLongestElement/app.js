function getLongestElement(arr) {
    // your code here
    if(arr.length == 0){
        return "";
    }
    var aux=arr[0];
    for(element of arr){
        if (element.length > aux.length){
            aux=element;
        }
  }
  return aux;
}

var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'