// Write your function here
function getAverageOfElementsAtProperty(obj,key){
    var contador = 0;
    var tamano = 0
    if(obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length > 0){
        for(keyValue of obj[key]){
            contador += keyValue;
            tamano ++;
        }
        return contador/tamano;
    }else{
        return 0;
    }
    
}
