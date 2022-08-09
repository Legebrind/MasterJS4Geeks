var obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
    var aux = 1;
    
    if(!obj.hasOwnProperty(key)|| !Array.isArray(obj[key]) || !obj[key].length > 0){
      return 0;
  }
    for(value of obj[key]){
      aux *= value;
    }
  return aux;
  
}
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24