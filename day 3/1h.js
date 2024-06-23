var arr = [1,2,3,4,5,6,7,8,9,10];
var k = 4;

var rotateArray = function(array, k) {
  var len = array.length;
  k = k % len; 
  var rotateNew = array.slice(len - k).concat(array.slice(0, len - k));
  return rotateNew;
};

console.log(rotateArray(arr, k)); 
