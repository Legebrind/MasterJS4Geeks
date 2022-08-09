function countCharacter(str, char) {
    // your code here
    var re = new RegExp(char,'g')
    return str.match(re).length;
}