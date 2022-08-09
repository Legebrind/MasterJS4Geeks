function filterEvenLengthWords(words) {
    // your code here
    aux=[]
    for(element of words){
        if (element.length%2==0){
            aux.push(element);
        }
  }
  return aux;
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']