// Write your function here
function removeElement(array,element){
    var aux=[];
    for(var pos in array){
        if(array[pos]!=element){
            aux.push(array[pos]);
        }
    }
    return aux;
}