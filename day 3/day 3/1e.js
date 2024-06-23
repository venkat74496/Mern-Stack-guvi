var arr = ["bike", "malayalam", "madam", "country", "level", "nannan"];

var getPalindromes = function(array) {
  var isPalindrome = function(str) {
    return str === str.split('').reverse().join('');
  };
  var ans = array.filter(function(str) {
    return isPalindrome(str);
  });
  return ans;
};
console.log(getPalindromes(arr));
