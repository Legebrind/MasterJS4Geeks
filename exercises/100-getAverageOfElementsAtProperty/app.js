function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  var aux = 0;
  if(!obj.hasOwnProperty(key)|| !Array.isArray(obj[key]) || !obj[key].length > 0){
    return aux;
  }  
  for (var i = 0; i < obj[key].length; i++){
        aux += obj[key][i];
    }
    return aux/obj[key].length;
}


