function findPairForSum(array, number){
  var aux = {};
  for(index in array){
    if(aux.hasOwnProperty(number-array[index])){
      return [array[aux[number-array[index]]], array[index]];
    }
    else{
      aux[array[index]] = index;
    }
  }
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]