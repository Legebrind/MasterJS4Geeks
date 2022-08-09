// Write your function here
function getElementsLessThan100AtProperty(object, element){
    aux=[];
    if(object.hasOwnProperty(element) && Array.isArray(object[element]) && object[element].length > 0){
        for([key,value] of Object.entries(object[element])){
            if (value < 100){
                aux.push(value);
            }
        }
    }
    return aux;
}