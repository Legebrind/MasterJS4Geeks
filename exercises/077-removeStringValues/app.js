var obj = {
    name: 'Sam',
    age: 20
  }
  
function removeStringValues(obj) {
    // your code here
    for(const [key,value] of Object.entries(obj)){
        if (typeof value === 'string'){
            delete obj[key];
        }
    }
}

removeStringValues(obj);
console.log(obj); // { age: 20 }