// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive i ntegers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const sumOfTwoNum = (arr) => {
  let sum = 0;
  if (Array.isArray(arr) && arr.length > 2) {
    arr = arr.slice().sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    return arr[0] + arr[1];
  }
};

//test
console.log(sumOfTwoNum([19, 5, 42, 2, 77]));
console.log(sumOfTwoNum([10, 343445353, 3453445, 3453545353453]));
