//Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137];

function minNumber(number){
    let findMin = number[0]
    for(const min of number){
        if(min < findMin){
            findMin = min
        }
    }
    return findMin
}

let find = minNumber(heights2);
// console.log(find)


//Find the friend with the smallest name.

const friends = ['rahim','karim','srabon', 'robin', 'rafi', 'ron', 'rashed', "ruhitbaidya"];

function maxLength(persons){
    let mxFriend = persons[0];
    for(const max of persons){
        if(max.length > mxFriend.length){
            mxFriend = max;
        }
    }
    return mxFriend;
}

let mxFriend = maxLength(friends);
// console.log(mxFriend)

//Your task is to calculate the total budget required to buy electronics:
let product = [
    {product : "Laptop", brand : "HP", price : 35000 , queantity : 20},
    {product : "Tablate", brand : "Samsung", price : 15000 , queantity : 15},
    {product : "Mobile", brand : "Realme", price : 20000 , queantity : 50},
]

function calculateElectronicsBudget(product){
    let total = 0;
    for(const siProduct of product){
        total = total + siProduct.price;
    }
    return total;
}

let findPrice = calculateElectronicsBudget(product);
// console.log(findPrice)
/*
Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
*/

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];


function findAveragePhonePrice(product){
    let sum = 0;
    for(const singalProduct of product){
        sum = sum + singalProduct.price
    }
    let avg = sum / product.length;
    let fixedFine = avg.toFixed(2)
    return fixedFine;
}

let productFind = findAveragePhonePrice(phones);
// console.log(productFind)


/*

Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

*/

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];


function sellerycalculate(employe){
    let totalSellery = 0;
    for(const siEmploy of employe){
        let increment = siEmploy.increment * siEmploy.experience;
        totalSellery = totalSellery + (siEmploy.starting + increment) 
    }
    return totalSellery;
}

let findResult = sellerycalculate(employees);
console.log(findResult);