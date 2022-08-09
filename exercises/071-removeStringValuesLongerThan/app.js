function removeStringValuesLongerThan(num, obj) {
    // your code here
    for([key,value] of Object.entries(obj)){
        if (typeof value === 'string' && value.length > num){
            delete obj[key];
        }
    }
}
