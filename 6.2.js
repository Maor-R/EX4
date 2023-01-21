// Count the number of Duplicates


const { object } = require("prop-types");

const countDuplicatesInString = (str) => {
  let cntChar = {};
  let sum = 0;

  if (typeof str == "string" && /^[a-zA-Z\d]+$/.test(str)) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      cntChar[str[i]] = cntChar[str[i]] ? ++cntChar[str[i]] : 1;
    }

    Object.values(cntChar).forEach((c) => {
      if (c > 1) {
        sum++;
      }
    });
    return sum;
  }
};

//test
console.log(countDuplicatesInString("abcde"));
console.log(countDuplicatesInString("aabbcde"));
console.log(countDuplicatesInString("aabBcde"));
console.log(countDuplicatesInString("indivisibility"));
console.log(countDuplicatesInString("Indivisibilities"));
console.log(countDuplicatesInString("aA11"));
console.log(countDuplicatesInString("ABBA"));
