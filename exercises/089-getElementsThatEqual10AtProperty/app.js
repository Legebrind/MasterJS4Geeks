// Write your function here
function getElementsThatEqual10AtProperty(object, element){
    aux=[];
    if(object.hasOwnProperty(element) && Array.isArray(object[element]) && object[element].length > 0){
        for([key,value] of Object.entries(object[element])){
            if (value == 10){
                aux.push(value);
            }
        }
    }
    return aux;
}