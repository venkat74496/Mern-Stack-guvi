(function(arr1, arr2) {
    var mergeArrays = function(a, b) {
      var merged = [], i = 0, j = 0;
      while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
          merged.push(a[i++]);
        } else {
          merged.push(b[j++]);
        }
      }
      return merged.concat(a.slice(i)).concat(b.slice(j));
    };
  
    var merged = mergeArrays(arr1, arr2);
    var mid = Math.floor(merged.length / 2);
  
    if (merged.length % 2 === 0) {
      console.log((merged[mid - 1] + merged[mid]) / 2);
    } else {
      console.log(merged[mid]);
    }
  })([1,2,3,4,5], [6,7,8,9,10]); 
  