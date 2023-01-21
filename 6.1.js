
// The parameter of accum is a string which includes only letters from ​ a..z​ and ​ A..Z​ .

const accum = (str) => {
  let retStr = "";
  let tempIndex;

  if (typeof str == "string" && /^[a-zA-Z]+$/.test(str)) {

    for (let i = 0; i < str.length; i++) {
      tempIndex = i;
      retStr += str[i].toUpperCase();
      while (tempIndex-- > 0) {
        retStr += str[i].toLowerCase();
      }
      if (i != str.length - 1) {
        retStr += "-";
      }
    }
  }
  return retStr;
};

//test

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
