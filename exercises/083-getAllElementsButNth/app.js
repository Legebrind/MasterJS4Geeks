function getAllElementsButNth(array, n) {
    // Write your function here
    aux =[...array];
    aux.splice(n,1);
    return aux;
}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']