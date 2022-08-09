function repeatString(string, num) {
    // your code here
    if(num !=1){
        return string.concat(repeatString(string,num-1));
      }else{
        return string;
      }

}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'