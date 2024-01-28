/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/


//Free Drinks
var burger = 510;
var cake;

if(burger > 500){
    coke = "free";
}else{
    coke = 30;
}

console.log(cake)



/*** 
BMI Calculator and Health Category
Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


//BMI Calculator and Health Category

let weight = 57;
let heightToMeter = (63 * 0.0254);
let heightSquare = heightToMeter ** 2;

let bmi = weight / heightSquare ;

console.log(bmi)

if(bmi < 18.5){
    console.log("You are under weight")
}else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("You are normal")
}else if(bmi >= 25 && bmi <= 29.9){
    console.log("You are overweight")
}else{
    console.log("You are obese")
}



/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/




//Grade Calculator

var result = 33;

if(result >= 90 && result <= 100){
    console.log("You got 'A' ")
}else if(result >= 80 && result <= 89){
    console.log("You got 'B'")
}else if(result >= 70 && result <= 79){
    console.log("You got 'C'")
}else if(result >= 60 && result <= 69){
    console.log("You got 'D'")
}else{
    console.log("You got 'F'")
}




/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myResult = 81;
let friendResult = 85;

if(myResult < 80){
    console.log("basay giya gumai jaw")
}else{
    if(friendResult > 80){
        console.log("So go for lunch")
    }else if(friendResult < 80 && friendResult >= 60){
        console.log("Good Luck Next Time")
    }else if(friendResult < 60 && friendResult >= 40){
        console.log("Keep Your Message unseen")
    }else{
        console.log("You are block")
    }
}



/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */


let num1 = 70;
let num2 = 60;
let results ;

if(num1 > num2){
    results = num1 * 2;
}else{
    results = num1 + num2;
}

console.log(results)


/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let rent = 800;
let age = 45;

if(age < 10){
    rent = 0;
}else if(age >= 10 && age <= 30){
    rent = rent / 50;
}else if(age >= 60){
    rent = rent / 15
}else{
    rent = rent
}

console.log(rent)