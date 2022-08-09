// Write your function here
function countAllCharacters(word){
    var aux = {};
    for(const value of word){
        if (aux.hasOwnProperty(value)){
            aux[value]++;
        }else{
            aux[value] = 1;
        }
    }
    return aux;
}