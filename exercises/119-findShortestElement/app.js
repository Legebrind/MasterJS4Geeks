function findShortestElement(arr) {
    // your code here
    if(arr.length == 0){
        return "";
    }
    var aux = arr[0];
    for (var value of arr){
        if(value.length < aux.length){
            aux = value;
        }
    }
    return aux;
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'