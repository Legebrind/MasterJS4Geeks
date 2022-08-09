function modulo(num1, num2) {
    // your code here
    if(num1 == 0){
        return 0;
    }
    if(num2 == 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return NaN;
    }
    if(num1 > 0){
      return num1-(num2*(Math.floor(num1/num2)))
    }else{
      num1*=-1;
      return (num1-(num2*(Math.floor(num1/num2))))*-1
    }
}

var output = modulo(25, 4);
console.log(output); // --> 1