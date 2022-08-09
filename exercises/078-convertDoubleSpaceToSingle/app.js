function convertDoubleSpaceToSingle(str) {
    // your code here
    str = str.split("  ");
    str = str.join(" ");
    return str;
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"