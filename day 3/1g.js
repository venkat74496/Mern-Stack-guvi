var arr = [1,2,4,5,5,3,2,5,6,7,2,3,6,2,5,6];

var removeDuplicates = function(array) {
  var uniqueArray = array.filter(function(item, index) {
    return array.indexOf(item) === index;
  });
  return uniqueArray;
};
console.log(removeDuplicates(arr));
