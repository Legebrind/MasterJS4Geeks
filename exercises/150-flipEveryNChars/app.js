function flipEveryNChars(input, n) {
    // your code here
    aux = [];
    if(input.length%n ==0){
    for(var i = 0; i < input.length; i=i+n){
      for (var j = n-1; j >=0;j--){
        aux = aux+(input[i+j]);
      }     
    }
    }else{
      for(var i = 0; i < input.length-(n-1); i=i+n){
        for (var j = n-1; j >=0;j--){
          aux = aux+(input[i+j]);
        } 
    }
      var i = input.length-1
      while(i >= input.length-input.length%n){
        console.log(i);
        aux = aux+(input[i]);
        i --;
      }    
    }return aux;
  }

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma