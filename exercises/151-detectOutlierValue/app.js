function detectOutlierValue(string) {
    // your code here
    var aux = string.split(" ");
    var suma = 0;
    for (const key in aux){
      aux[key] = parseInt(aux[key])%2;
      suma += aux[key];
    }
    if (suma == 1){
      return aux.indexOf(1)+1;
    }
    return aux.indexOf(0)+1;;
    
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2