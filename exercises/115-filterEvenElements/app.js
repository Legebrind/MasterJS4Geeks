
function filterEvenElements(arr) {
    // your code here
    var aux = [];
    for(var index in arr ){
        if(arr[index]%2 == 0){
        aux.push(arr[index]);
        }  
        
    }
    return aux;
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
