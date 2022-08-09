var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for (const [key, value] of Object.entries(obj2)) {
        if(!obj1.hasOwnProperty(key)){
            obj1[key] =value;
        }
        
    }
    
    
}