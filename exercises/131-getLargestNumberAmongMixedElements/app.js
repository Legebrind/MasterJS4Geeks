function getLargestNumberAmongMixedElements(arr) {
    // your code here
    var aux = 0;
    for(value of arr){
        if(Number.isInteger(value) && (aux==0 || value > aux)){
                aux = value;
        }
    }
    return aux;
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5