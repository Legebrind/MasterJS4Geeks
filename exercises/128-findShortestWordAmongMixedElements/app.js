function findShortestWordAmongMixedElements(arr) {
    // your code here
    var aux = "";
    for(value of arr){
        if(typeof(value) == 'string' && (aux=="" || value.length < aux.length)){
                aux = value;
        }
    }
    return aux;
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'