var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    var aux = 0;

    if(!obj.hasOwnProperty(key)|| !Array.isArray(obj[key]) || !obj[key].length > 0){
        return 0;
    }
    for(value of obj[key]){
      aux += value;
    }
  return aux;
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13