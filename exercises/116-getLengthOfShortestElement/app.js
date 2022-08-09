function getLengthOfShortestElement(arr) {
    // your code here
    if(arr.length == 0){
        return 0;
    }
    aux=arr[0].length;
    for(element of arr){
        if (element.length < aux){
            aux=element.length;
        }
  }
  return aux;
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3