var obj = {
 key: ['Jamil', 'Albrey']
};
function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if(!obj.hasOwnProperty(key)|| !Array.isArray(obj[key]) || !obj[key].length > 0 || obj[key].length < index){
      return undefined;
  }
    return obj[key][index];
}