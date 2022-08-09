function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  var aux = 0;
    for(value of arr){
        if(Number.isInteger(value) && (aux==0 || value < aux)){
                aux = value;
        }
    }
    return aux;
}


var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4