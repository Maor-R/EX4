// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const longest = (s1, s2) => {
    if (
      typeof s1 == "string" &&
      typeof s2 == "string" &&
      /^[a-zA-Z]+$/.test(s1) &&
      /^[a-zA-Z]+$/.test(s2)
    ) {
      const arr = s1.concat(s2).split("");
      set = new Set(arr);
      return Array.from(set).join("");
    }
  };
  
  //test
  let a = "xyaabbbccccdefww";
  const b = "xxxxyyyyabklmopq";
  console.log(longest(a, b));
  a = "abcdefghijklmnopqrstuvwxyz";
  console.log(longest(a, a));
  