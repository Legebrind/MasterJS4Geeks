function sumDigits(num) {
    // your code here
    aux = num.toString();
    resultado = 0;
    if(aux[0]=='-'){
      resultado = parseInt(aux[1])*-1;
      for(var i = 2;i < aux.length;i++){
        resultado += parseInt(aux[i]);
      }
    }else{
      for(var i = 0;i < aux.length;i++){
        resultado += parseInt(aux[i]);
      }
    }
    return resultado;
  }
var output = sumDigits(316);
console.log(output); // --> 4