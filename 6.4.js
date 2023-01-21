// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

const isIsogram = (str) => {
  if (typeof str == "string" && /^[a-zA-Z]+$/.test(str)) {
    const arr = str
      .toLowerCase()
      .split("")
      .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] == arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
};

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
