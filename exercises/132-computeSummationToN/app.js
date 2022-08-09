function computeSummationToN(n) {
    // your code here
    var aux = 0;
    for (var i = 1; i <= n;i++){
        aux +=i;
    }
    return aux;
}

var output = computeSummationToN(6);
console.log(output); // --> 21