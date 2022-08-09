var obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    var auxArr=[]
    var auxInt;
    if(!obj.hasOwnProperty(key)|| !Array.isArray(obj[key]) || !obj[key].length > 0){
      return auxArr;
  }
    auxInt = obj[key][0];
    for(index in obj[key]){
      if(obj[key][index] > auxInt){
        auxInt = obj[key][index];
      }
    }
  return auxInt;
}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4