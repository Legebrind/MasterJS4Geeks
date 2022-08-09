function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    aux = "";
    for(var word of arguments){
        if(word.length >aux.length){
            aux = word;
        }
    }return aux;
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'