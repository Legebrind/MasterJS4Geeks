function getAllLetters(str) {
    // your code here
    var respuesta = [];
    for(var i = 0; i < str.length; i++){
        respuesta.push(str.charAt(i));
    }
    return respuesta;
}