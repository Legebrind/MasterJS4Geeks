function getLengthOfLongestElement(arr) {
    // your code here
    aux=0;
    for(element of arr){
        if (element.length > aux){
            aux=element.length;
        }
  }
  return aux;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5