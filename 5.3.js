// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case)

const convertToCamelCase = (str) => {
  let retStr = "";
  let words;

  if(typeof str !='string')
  {
    return undefined;
  }

  if (str.indexOf("_") != -1) {
    words = str.split("_");
  } else if (str.indexOf("-") != -1) {
    words = str.split("-");
  }
  retStr += words[0];

  for (let i = 1; i < words.length; i++) {
    retStr += words[i][0].toUpperCase() + words[i].slice(1);
  }
  return retStr;
};

//test
console.log(convertToCamelCase(5));

console.log(convertToCamelCase("hello_hello_hello"));
console.log(convertToCamelCase("Hello-hello-hello"));
