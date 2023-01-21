// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F


const  convertNameToInitials=(name)=>{
    let retStr = "";
    const words = name.split(' ');
    if(typeof name =='string' && words.length == 2)
    {
        retStr += (words[0])[0].toUpperCase() + (words[1])[0].toUpperCase();
    }

    return retStr;
}

//test
console.log(convertNameToInitials("Sam Harris"));
