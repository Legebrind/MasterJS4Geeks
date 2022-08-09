function multiply(num1, num2) {
    // your code here
    if(num1 ==0 || num2==0){
        return 0;
    }
    if(num1 < 0 && num2 < 0){
        num1 = -num1;
        num2 = -num2;
        return num1+multiply(num1, num2-1);
    }
    if(num1 < 0){
        num1 =-num1
        return -(num1+multiply(num1, num2-1));
    }
    if (num2 < 0){
        num2 =-num2;
        return -(num1+multiply(num1, num2-1));
    }
    if(num2 != 1){
        return num1+multiply(num1, num2-1)
    }
    return num1;
  }

var output = multiply(4, 7);
console.log(output); // --> 28
