// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

const toWeirdCase = (str) => {
  let retStr = "";
  const words = str.split(" ");

  if (typeof str != "string") {
    return undefined;
  }
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      retStr += j % 2 == 0 ? words[i][j].toUpperCase() : words[i][j];
    }
    if (i != words.length - 1) {
      retStr += " ";
    }
  }

  return retStr;
};

//test
console.log(toWeirdCase("Weird string case"));
