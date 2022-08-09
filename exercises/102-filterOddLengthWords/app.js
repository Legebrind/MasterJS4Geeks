function filterOddLengthWords(words) {
    // your code here
    aux=[]
    for(element of words){
        if (element.length%2!=0){
            aux.push(element);
        }
  }
  return aux;
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']