// Write your function here
function getOddLengthWordsAtProperty(obj,key){
    aux=[]
    if(!obj.hasOwnProperty(key)|| !Array.isArray(obj[key]) || !obj[key].length > 0){
        return aux;
    }
    for(var i = 0;i < obj[key].length; i++){
        if(obj[key][i].length%2 != 0){
            aux.push(obj[key][i])
        }
    }
    return aux;
}