function transformEmployeeData(array) {
  // your code here
  var aux =[];
  var auxData = {};
  for(var i = 0;i < array.length;i++){
    for(var j = 0; j < array[i].length;j++){
      auxData[array[i][j][0]] = array[i][j][1];
    }
    aux[i] ={}
    Object.assign(aux[i], auxData);
  }
  return aux;
}