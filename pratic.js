
// array reverse

/*
let arr = ['mango', 'lichi', 'goava', 'jackgruit', 'coconut', 'orange', 'blackberry'];


let i = 6;
while(i >= 0){
    // console.log(arr[i])
    i--;
}


// array sum

let numarr = [12,45,78,5,6,45,89,52,45,71,2,0,50,41,85];
let sum = 0;
for(let i = 0; i < numarr.length; i++){
    const currentNum = numarr[i];
    sum = sum + currentNum;
    console.log(sum)
}

console.log(sum)
*/

// array swape
let numarr2 = [12,45,78,5,6,45,89,52,45,71,2,0,50,41,85];

let temp = numarr2[2];
numarr2[2] = numarr2[4]
numarr2[4] = temp;


console.log(numarr2)


let arr = ['mango', 'lichi', 'goava', 'jackgruit', 'coconut', 'orange', 'blackberry'];

let indexNum = -1;
let datas = "coconut";

for(let i = 0; i < arr.length; i++){
    if(arr[i] === datas){
        indexNum = arr.indexOf(arr[i])
    }
}

console.log(indexNum);