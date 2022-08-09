// Write your function here
function getFirstElementOfProperty(obj,key){
    if(obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length > 0){
        return obj[key][0];
    }
}
