// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

const findUniq = (arr) => {
    let sumVal = {};
  if (Array.isArray(arr) && arr.length > 2) {

    for (let i = 0; i < arr.length; i++) {

        sumVal [arr[i]] = sumVal [arr[i]]?  ++sumVal [arr[i]]:1;
    }
    
for (const [key, value] of Object.entries(sumVal)) {
    if(value==1){ return key;}
  }
  
  }
  return undefined;
};

//test
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
