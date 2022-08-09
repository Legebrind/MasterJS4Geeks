function isOddWithoutModulo(num) {
    // your code here
    if(num == 0){
        return false;
    }
    if(num > 0){
      return (num-(2*(Math.floor(num/2)))) != 0;
    }else{
      num*=-1;
      return ((num-(2*(Math.floor(num/2))))*-1) != 0;
    }
}
var output = isOddWithoutModulo(17);
console.log(output); // --> true