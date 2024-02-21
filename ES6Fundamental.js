let multiply = (num1, num2, num3)=>{
    return num1 * num2 * num3;
}

let multiplys = multiply(20,10,40);
// console.log(multiplys)

let textWrite = `I am a web developer
I love to code
I love to eat biriyani`
// console.log(textWrite)

let addition = (num1, num2 = 10)=>{
    return num1 + num2;
}

let add = addition(20);
// console.log(add)

let friendsName = (arr)=>{
    let arrFri = []
    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i].length % 2 === 0){
            arrFri.push(arr[i])
        }
    }
    return arrFri
}

let frind = ['pinku', 'polash', 'mitun', 'shanto', 'emon', 'jamil', 'kalam', 'nirmol', 'jubed']
// console.log(friendsName(frind))

let squareSum = (arr)=>{
    let sum = 0;
    for(const arrNum of arr){
        sum = sum + Math.pow(arrNum, 2)
    }
    let finial = sum / arr.length;
    return finial.toFixed(2)
}

let numbers = [20,4,1,20,54,74,84,15,48,78,20,12,45,78,12,13,16,45];
let numbers2 = [74,84,15,48,78,20,12,45,78,12];
// console.log(squareSum(numbers))

let findMaxTwoArray = (arr1, arr2)=>{
    let addArr = [...arr1, ...arr2];
     return Math.max(...addArr)
}

console.log(findMaxTwoArray(numbers, numbers2))