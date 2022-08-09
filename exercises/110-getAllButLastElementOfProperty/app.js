var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    var auxArr=[]
    
    if(!obj.hasOwnProperty(key)|| !Array.isArray(obj[key]) || !obj[key].length > 0){
      return auxArr;
  }
    for(index in obj[key]){
      if(index < obj[key].length-1){
        auxArr.push(obj[key][index]);
      }
    }
  return auxArr;
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]