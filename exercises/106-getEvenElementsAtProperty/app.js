
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    aux=[]
    if(!obj.hasOwnProperty(key)|| !Array.isArray(obj[key]) || !obj[key].length > 0){
      return aux;
  }
    for(index in obj[key]){
      if(obj[key][index]%2 == 0){
        aux.push(obj[key][index]);
      }
    }
  return aux;
}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]