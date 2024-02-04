// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(cls){
    let tapMathra = (cls * 9/5) + 32;
    return tapMathra;
}

let bangladesh = celsiusToFahrenheit(44)
let india = celsiusToFahrenheit(63)
let nepal = celsiusToFahrenheit(45)
let usa = celsiusToFahrenheit(30)

// console.log(`bangladesh : ${bangladesh} F, india : ${india} F, nepal : ${nepal} F, usa : ${usa} F`)


//You are given an array of numbers. Count how many times the a number is repeated in the array.

let numbers = [5,6,11,12,98, 5, 7,5,4,8,7,9,6,3,2,1,4,1,2,5,4,5,2,1,4,2,1];

function dobuleTimeNumber(number, value){
    let adding = [];
    for(const arr of number){
        if(arr === value){
            adding.push(arr)
        }
    }
    return `${adding} return ${adding.length} time`;
}

// console.log(dobuleTimeNumber(numbers, 1))

//Write a function to count the number of vowels in a string.
let findVowel = "This script defines a lifeSolution function that randomly selects a positive affirmation from an array. Positive affirmations can be a simple way to promote a positive mindset and provide encouragement in various life situations Feel free to customize the array of affirmations or add more functionality based on specific areas of life you want to address in your life solution script"

function countVowel(findVowel){
    let voewl = ['a', 'e', 'i', 'o', 'u'];
    let text = findVowel.split('')
    let find = [];
    let arrLength = [];
    let result = ''
    for(let i = 0; i < text.length; i++){
        if(voewl.includes(text[i])){
            find.push(text[i])
        }
    }
    for(const finArr of find){
        if(arrLength.includes(finArr) === false){
            arrLength.push(finArr)
        }
    }

    if(voewl.length === arrLength.length){
        return result = "All Vowel Present In this script"
    }else if(arrLength.length === 0){
        return result = "Not Found All The Vowel"
    }else{
        return result = `Not All This Vowel Are Present Their ${arrLength}`
    }
}

let sectiprs = `Writing without`
// console.log(countVowel(sectiprs))


//Write a function to find the longest word in a given string.

function longestWord(script){
    let text = script.split(' ');
    let mexWord = ''
    let maxNumber = []
    for(const lengFind of text){
        maxNumber.push(lengFind.length)
    }
    let findMax = Math.max(...maxNumber);
    let maxTextFind = maxNumber.indexOf(findMax);
    mexWord = text[maxTextFind];
    return mexWord + ' ' + maxTextFind + ' Length Word Present Their';
    
}

let script = `Pneumonoultramicroscopicsilicovolcanoconiosis (45 letters) - A lung disease caused by the inhalation of very fine silica particles.
Antidisestablishmentarianism (28 letters) - Opposition to the withdrawal of state support from an established church, especially the Anglican Church in 19th-century England.
Supercalifragilisticexpialidocious (34 letters) - A made-up word from the movie "Mary Poppins," often used to describe something fantastic.
Hippopotomonstrosesquippedaliophobia (33 letters) - The fear of long words.
Honorificabilitudinitatibus (27 letters) - The state of being able to achieve honors.
Floccinaucinihilipilification (29 letters) - The action or habit of estimating something as worthless.
Pseudopseudohypoparathyroidism (30 letters) - A mild form of pseudohypoparathyroidism, a genetic disorder.
Electroencephalographically (23 letters) - In a manner related to the recording of electrical activity in the brain.
Dichlorodifluoromethane (21 letters) - A type of chlorofluorocarbon used as a refrigerant.
Incomprehensibilities (21 letters) - The quality of being difficult to understand.
Please note that some of these words are rarely used in everyday language and are often cited for their length rather than their practical use.`;

let findMaxIndex = longestWord(script)
// console.log(findMaxIndex)


//Generate a random number between 10 to 20.

let randomNumber = Math.round(Math.random() * 20);
// console.log(randomNumber)