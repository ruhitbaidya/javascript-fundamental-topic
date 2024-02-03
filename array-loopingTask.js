/*

Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

*/

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let reversearr = [];

// without reverse method

for(const tasks of colors){
    reversearr.unshift(tasks) 
}
// console.log(reversearr)

let findarr = []

for(let i = colors.length - 1; i >= 0; i--){
    findarr.push(colors[i]);
}

// console.log(findarr)


// reverse method

// let revarr = colors.reverse();

// console.log(revarr)



/*  
    Task 2
    Write a JavaScript code to get the even numbers from an array using any looping technique.
*/


const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumber = [];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNumber.push(numbers[i])
    }
}

// console.log(evenNumber)


/*

Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

*/

var numberStrr = ['Tom', 'Tim', 'Tin', 'Tik'];
var addStr = ''
// console.log(numberStrr.join(''))
for(const arrTo of numberStrr){
    addStr = addStr.concat(arrTo)
}
// console.log(addStr)


/*
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
*/

const statement = 'I am a hard working person';

let conText = statement.split(' ');
let coverts = []
for(const convertToRev of conText){
    coverts.unshift(convertToRev)
}
console.log(coverts.join(' '))