/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = (num) => {
    let q = 1;
  let fib = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 150050
  ];
  let result = 0;
  for (let i = 0; i < fib.length; i++) {
    for (let j = i + 1; j < fib.length; j++) {
      if (q == num) {
        break;
      }
      let numresult = fib[i] + fib[j];
      result += numresult;
      q++;
    }
    return result;
  }
};
console.log(tribonacci(25));