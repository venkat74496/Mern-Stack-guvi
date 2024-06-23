const arr = ["bike", "malayalam", "madam", "country", "level", "nannan"];

const getPalindromes = (array) => {
  const isPalindrome = (str) => str === str.split('').reverse().join('');
  const ans = array.filter(str => isPalindrome(str));
  return ans;
};
console.log(getPalindromes(arr));
