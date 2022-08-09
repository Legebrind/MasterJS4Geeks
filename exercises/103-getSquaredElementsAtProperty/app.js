var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    aux=[]
    if(!obj.hasOwnProperty(key)|| !Array.isArray(obj[key]) || !obj[key].length > 0){
      return aux;
  }
    for(index in obj[key]){
      aux.push(obj[key][index]*obj[key][index]);
    }
  return aux;
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]