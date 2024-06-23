(function(array) {
    var isPalindrome = function(str) {
      return str === str.split('').reverse().join('');
    };
    var ans = array.filter(function(str) {
      return isPalindrome(str);
    });  
    console.log(ans);
  })(["bike", "malayalam", "madam", "country", "level", "nannan"]);
  