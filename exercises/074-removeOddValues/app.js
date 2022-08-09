function removeOddValues(obj) {
    // your code here
    for(const [key,value] of Object.entries(obj)){
        if(Number.isInteger(value) && value%2 != 0){
            delete obj[key];
        }
    }
}