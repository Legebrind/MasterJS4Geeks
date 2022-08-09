function removeArrayValues(obj) {
    // your code here
    for([key,value] of Object.entries(obj)){
        if(Array.isArray(value)){
            delete obj[key];
        }
    }
}