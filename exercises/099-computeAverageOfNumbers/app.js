// Write your function here
function computeAverageOfNumbers(array){
    var aux = 0;
    for (value of array){
        aux += value;
    }
    return aux/array.length;
}