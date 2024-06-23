const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getPrimes = (array) => {
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const ans = array.filter(num => isPrime(num));
  return ans;
};
console.log(getPrimes(arr));