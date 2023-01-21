// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

const repeat_str = (num, str)=>{

    const copyStr = str;
    if(typeof num =="number" && num>0)
    {
        while(num>1)
        {
            str+=copyStr;
            num--;
        }
    }
    return str;
}

//test
console.log(repeat_str(5, "hello"));