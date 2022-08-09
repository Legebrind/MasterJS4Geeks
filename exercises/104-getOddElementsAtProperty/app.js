var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    aux=[]
    if(!obj.hasOwnProperty(key)|| !Array.isArray(obj[key]) || !obj[key].length > 0){
      return aux;
  }
    for(index in obj[key]){
      if(obj[key][index]%2 != 0){
        aux.push(obj[key][index]);
      }
    }
  return aux;
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]