function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    aux = word1;
    for(var word of arguments){
        if(word.length < aux.length){
            aux = word;
        }
    }return aux;
}
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'