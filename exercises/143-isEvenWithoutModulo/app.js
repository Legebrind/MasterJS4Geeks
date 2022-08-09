function isEvenWithoutModulo(num) {
    // your code here
    if(num == 0){
        return true;
    }
    if(num > 0){
      return (num-(2*(Math.floor(num/2)))) == 0;
    }else{
      num*=-1;
      return ((num-(2*(Math.floor(num/2))))*-1) == 0;
    }
}
var output = isEvenWithoutModulo(8);
console.log(output); // --> true