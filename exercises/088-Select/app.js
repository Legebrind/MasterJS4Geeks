// Write your function here
function select(array,object){
    var newObj={};
    for (const element of array){
        if(object.hasOwnProperty(element)){
            newObj[element] = object[element];
        }
    }
    return newObj;
}