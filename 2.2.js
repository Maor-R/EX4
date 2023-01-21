// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const convertBinToDec = (arr) => {
  let sum = 0;
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] * Math.pow(2, arr.length - i - 1);
    }
    return sum;
  }
  return undefined;
};

//test
console.log(convertBinToDec([0, 0, 1, 1]));
console.log(convertBinToDec([0, 1, 1, 1]));
console.log(convertBinToDec([1, 0, 1, 1]));
console.log(convertBinToDec([1, 1, 1, 1]));
