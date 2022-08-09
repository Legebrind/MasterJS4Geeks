function findSmallestElement(arr) {
    // your code here
    if(arr.length == 0){
        return 0;
    }
    var aux = arr[0];
    for (var value of arr){
        if(value < aux){
            aux = value;
        }
    }
    return aux;
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1