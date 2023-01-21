// Simple, given a string of words, return the ​length​ of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

const findShortestWords = (str) => {

const words = str.split(" ");
  let min = Infinity;

  words.forEach((e) => {
    if (e.length < min) {
      min = e.length;
    }
  });

  return min;
};

//test
console.log(findShortestWords("avi aviva oren mor moti"));
