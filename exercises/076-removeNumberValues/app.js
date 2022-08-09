var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    for (const [key,value] of Object.entries(obj)){
        if(Number.isInteger(value)){
            delete obj[key];
        }
    }
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }