// Write your function here
function getNthElementOfProperty(obj,key,pos){
    if(obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length > 0){
        return obj[key][pos];
    }
}
