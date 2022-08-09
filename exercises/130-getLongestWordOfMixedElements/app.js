function getLongestWordOfMixedElements(arr) {
    // your code here
    var aux = "";
    for(value of arr){
        if(typeof(value) == 'string' && (aux=="" || value.length > aux.length)){
                aux = value;
        }
    }
    return aux;
}


var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'