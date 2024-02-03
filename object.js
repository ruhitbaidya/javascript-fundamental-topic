// object select

let person = {
    name : "Ruhit Baidya",
    age : 27,
    profession : 'Medical Techanalogist',
    'exparence Year' : 9,
    adders : 'sreemangal Moulvibazar'
}

// object declear

const persone = new Object();
const uniq = new Object.create();


const kyType = 'age';
person[kyType] = 44;
// console.log(person[kyType])
// console.log(person['profession'])

const keyss = Object.keys(person)
const valuess = Object.values(person)
console.log(keyss.join(' ,'))
console.log(valuess.join(' ,'))