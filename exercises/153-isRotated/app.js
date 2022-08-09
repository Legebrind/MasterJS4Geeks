function isRotated(str1, str2) {
    // your code here
    if(str1.length != str2.length){
      return false;
    }
    aux1={};
    aux2={};
    for(var i = 0; i < str1.length; i++){
      if(aux1.hasOwnProperty(str1[i])){
        aux1[str1[i]]++;
      }else{
        aux1[str1[i]] = 1;
      }
      if(aux2.hasOwnProperty(str2[i])){
        aux2[str2[i]]++;
      }else{
        aux2[str2[i]] = 1;
      }
    }
    for(index in aux1){
      if(aux1[index] != aux2[index]){
        return false;
      }
    }
    return true;
  }

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false