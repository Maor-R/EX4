const forEach = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i, arr);
  }
};

//test
const f = (num, i, arr) => {
  console.log(arr[i]);
};

forEach([1, 2, 3], f);

const map = (arr, func) => {
  let retArr = [];
  for (let i = 0; i < arr.length; i++) {
    retArr.push(func(arr[i], i, arr));
  }
  return retArr;
};

//test
const g = (num, i, arr) => {
  return arr[i] * 2;
};

console.log(map([1, 2, 3], g));

const filter = (arr, func) => {
  let retArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      retArr.push(arr[i]);
    }
  }
  return retArr;
};

//test
const h = (num, i, arr) => {
  if (arr[i] > 2) {
    return true;
  }
  return false;
};

console.log(filter([1, 2, 3, 4, 7, 8], h));
