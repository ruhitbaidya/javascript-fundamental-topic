//Count how many times a string has the letter a

let texts = 'Certainly! However, I ll need more information to provide a description that suits your needs. Could you please specify what you are looking for? Are you interested in a description of a place, a person, an event, or something else? The more details you provide, the better I can assist you.'


console.log(texts.length)
let text = ''
for(let i = 0; i < texts.length; i++){
    if(texts[i].toLocaleLowerCase() === 'a'){
        text = text + texts[i];
    }
}
// console.log(text.length)




// console.log(texts.indexOf("a", 16))

let str = "Mississippi";
// console.log(str.indexOf("i"));




// Count how many times a string has the letter a or A

let texts2 = 'Certainly! However, I ll need more information to provide a description that suits your needs. Could you please specify what you are looking for? Are you interested in a description of a place, a person, an event, or something else? The more details you provide, the better I can assist you.'

let capitalA = '';
let smallera = '';
let i =0;
while(i < texts.length){
    if(texts2[i] === 'a'){
        smallera = smallera + texts2[i];
    }
    if(texts2[i] === 'A'){
        capitalA = capitalA + texts2[i]
    }
    i++;
}

// console.log('Capital A :' + capitalA.length)
// console.log('smaller a : ' + smallera.length)




// Check whether a string contains all the vowels a, e, i, o, u


let vowelText = 'Certainly! However, I ll need more information to provide a description that suits your needs. Could you please specify what you are looking for? Are you interested in a description of a place, a person, an event, or something else? The more details you provide, the better I can assist you.';


let vowels = ['a', 'e', 'i', 'o', 'u']

let showResult = ''
for(const vowel of vowelText){
    let findVowel = vowel.includes(vowel)
    if(findVowel){
        showResult = 'get all of code'
    }
}

// console.log(showResult)




// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let textvalue = "Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string."


let result = textvalue.replace('x', 'y').replace('X', 'Y')


// console.log(result);



//Capitalize Every first Letter of each word in a String

let words = "Capitalize Every first Letter of each word in a String";

let word = words.split(' ')


for(let i = 0; i < word.length; i++){
    word[i] = word[i][0].toUpperCase() + word[i].substring(1)
}

console.log(word.join(' '))

