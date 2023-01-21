const findPerimeter = (length, width) => {
  if (typeof length == "number" && typeof width == "number") {
    return (length + width) * 2;
  }
};

//test

console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));

