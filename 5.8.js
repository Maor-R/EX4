// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.


const findShortestWords = (str) => {
    let arr = [];
    const words = str.split(" ");
    let max = -Infinity;
  
    words.forEach((e) => {
      if (e.length > max) {
        max = e.length;
      }
    });
  
    words.forEach((e) => {
      if (e.length == max) {
        arr.push(e);
      }
    });
  
    return arr;
  };
  
  //test
  console.log(findShortestWords("avi aviva oren mor moti moran"));
  