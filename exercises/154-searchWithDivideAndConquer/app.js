function search(array, value) {
  
  let start=0, end=array.length-1;
       
  // Iterate while start not meets end
  while (start<=end){

      // Find the mid index
      let mid=Math.floor((start + end)/2);

      // If element is present at mid, return True
      if (array[mid]===value) return mid;

      // Else look in left or right half accordingly
      else if (array[mid] < value)
           start = mid + 1;
      else
           end = mid - 1;
  }

  return null;
}

var arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // => 4
