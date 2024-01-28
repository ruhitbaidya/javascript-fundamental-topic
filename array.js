// array concept 

var someName = ["ruhit", "mitun", "shanto", "sanjib", "shaon", "nothing world"];

someName.push("nikkon") // adding last items
someName.push("sadik")
someName.push("musfique")
someName.push("pulse")
someName.push("ninion")
someName.pop() // remove last items

console.log(someName.includes("nikkons")) // show data have or not
console.log(someName.indexOf("nikkon")) // index number show use data
someName.shift() // remove items an array first
someName.unshift("doSomething") // adding items first
console.log(someName)