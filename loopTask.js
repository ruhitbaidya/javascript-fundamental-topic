/***
Task - 1:
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

// while loop

let i = 0;
while(i <= 60){
    // console.log('I will invest at least 6 hrs every single day for next 60 days!' + i)
    i++;
}


// useing for loop

for(let i = 0; i <= 60; i++){
    // console.log('I will invest at least 6 hrs every single day for next 60 days!' + i);
}




/***

Task - 2:

Find all the odd numbers from 61 to 100.

 */


// while loop

let num = 61;

while(num <= 100){
    if(num % 2 === 1){
        // console.log(num)
    }
    num++;
}



/***

Task - 3:

Find all the even numbers from 78 to 98.

 */


// while loop

let num2 = 78;

while(num2 <= 98){
    if(num2 % 2 === 0){
        // console.log(num2)
    }
    num2++;
}


/***

Task - 4:

Display sum of all the odd numbers from 81 to 131.

 */


let find = 81;
let sum = 0;
while(find <= 131){
    if(find % 2 === 1){
        // console.log(find)
        sum = sum + find;
    }
    find++;
}
// console.log(sum)

/***

Task - 5:

Display sum of all the even numbers from 206 to 311.

 */

let find2 = 206;
let adding = 0;
while(find2 <= 311){
    if(find2 % 2 === 0){
        // console.log(find2)
        adding = adding + find2;
    }
    find2++;
}
// console.log(adding)


/***
Task - 6 :
As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

let find3 = 1;
let ersa = 4;
while(find3 <= 10){
    // console.log(ersa + ' X ' + find3 +' = '+ ersa * find3)
    find3++;
}

/***

Implement a countdown timer that counts down from 21 to 15.

 */

for(let i = 21; i >= 15; i--){
    // console.log(i)
}


/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

for(let i = 0; i <= 200; i++){
    if(i === 100){
        break;
    }
    // console.log(i)
}

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let ii = 1;
let sums = 0;
while(ii <= 100){
    if(sums >= 100){
        break;
    }
    ii++;
    sums = sums + ii;
}
console.log(sums)

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/



// my task 

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}
