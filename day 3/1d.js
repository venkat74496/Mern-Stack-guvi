var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var getPrimes = function(array) {
  var isPrime = function(num) {
    if (num <= 1) return false;
    for (var i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  var ans = array.filter(function(num) {
    return isPrime(num);
  });
  return ans;
};

console.log(getPrimes(arr));
