var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    // your code here
    for (const [key,value] of Object.entries(obj)){
        if(Number.isInteger(value) && value > num){
            console.log("here");
            delete obj[key];
        }
    }
}