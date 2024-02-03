let strr = "i am from bangladesh"; // string immutable

// console.log(strr.length)
// console.log(strr[0])



let num = 'this one';
let num2 = 'This one';
// toLowerCase()  every text lower case convert
// toUpperCase()  every text Upper case convert
if(num.toLocaleLowerCase() === num2.toLocaleLowerCase()){
    // console.log("done this subject")
}else{
    // console.log('not done this one')
}

let whm = 'water';
let whm2 = 'water ';

if(whm.trim() === whm2.trim()){
    // console.log("need water")
}else{
    // console.log('do not need this water')
}


// slice

let number = 'bangladesh';
let adding = number.slice(6, 10);
// console.log(adding)


// reverse word

let words = 'this is fully type of ness of the part';

let reverse = ''
for(const letter of words){
    reverse = letter + reverse;
}

// console.log(reverse)





