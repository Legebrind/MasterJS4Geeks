function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set 
  const aux = new Set(text);
  if(aux.size == text.length){
    return true;
  }else{
    return false;
  }

}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false