// Ex1.1 - Yes or No
//  Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
//  string for false.

const isString =(str)=>{
    return typeof(str)=='string' ? true: false;
}

console.log(isString("test"), isString(1));
