var obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    var auxArr=[]
    var auxInt;
    if(!obj.hasOwnProperty(key)|| !Array.isArray(obj[key]) || !obj[key].length > 0){
      return auxArr;
  }
    auxInt = obj[key][0];
    for(index in obj[key]){
      if(obj[key][index] < auxInt){
        auxInt = obj[key][index];
      }
    }
  return auxInt;
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1