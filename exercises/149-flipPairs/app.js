function flipPairs(input){
  // your code here
  aux = [];
  if(input.length%2 ==0){
  for(var i = 0; i < input.length; i=i+2){
      aux = aux+(input[i+1]);
      aux = aux+(input[i]);
      }
  }else{
  for(var i = 0; i < input.length-1; i=i+2){
      aux = aux+(input[i+1]);
      aux = aux+(input[i]);
      }
      aux = aux+(input[input.length-1]);   
  }return aux;
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
