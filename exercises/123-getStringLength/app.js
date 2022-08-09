function getStringLength(string) {
    // your code here
    var cont = 0;
    for (index in string){
        cont ++;
    }
    return cont;
}

var output = getStringLength('hello');
console.log(output); // --> 5