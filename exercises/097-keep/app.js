// Write your function here
function keep(array,element){
    var aux=[];
    for(var pos in array){
        if(array[pos]==element){
            aux.push(array[pos]);
        }
    }
    return aux;
}