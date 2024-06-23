(function(array, k) {
    var len = array.length;
    k = k % len; 
    var rotateNew = array.slice(len - k).concat(array.slice(0, len - k));
    console.log(rotateNew);
  })([10,9,8,7,6,5,4,3,2,1], 5); 
  