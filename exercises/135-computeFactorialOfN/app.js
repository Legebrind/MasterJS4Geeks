function computeFactorialOfN(n) {
    // your code here
    if(n != 1){
       return n*computeFactorialOfN(n-1);
    }
    return 1;
  }

var output = computeFactorialOfN(3); console.log(output); // --> 6

var output = computeFactorialOfN(4); console.log(output); // --> 24