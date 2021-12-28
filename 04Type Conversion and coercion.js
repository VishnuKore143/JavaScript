console.log("hello console");

// Type Conversion and coercion

// Number to String
let myVar = String(34);
console.log(myVar,(typeof myVar));

// Boolean to String
let myboolean = (String(true));
console.log(myboolean,(typeof myboolean));

// Date to String
let mydate = String (new Date());
console.log(mydate,(typeof mydate))

//Arrays to String
let arr = String ([1,2,5,6,0]);
console.log(arr.length,(typeof arr))

// Another way to convert number to String 
let i = 75;
console.log(i.toString());

// String to number 
let num1 = Number ("8f8");
console.log(num1,typeof (num1));
// output :- NaN (Not a Number)

// Boolean to Number
let f = Number(false);
let t = Number(true);
console.log(f,typeof (f));
console.log(t,typeof (t));
// Output :- 0 1


// Arrays to number 
let num = Number([1,2,3,4,5,6,9])
console.log(num,typeof (num));
//Output :- NaN number

// String to ParseInt
let  number = parseInt('89');
console.log(number, (typeof number))

// String to ParseFloat
let  NNumber = parseFloat('89.55');
console.log(NNumber.toFixed(5), (typeof NNumber))
// tofixed is for how many decimal numbers you want to print after . point

// Addition of String number and integer Number
let mystr = Number("890");
let mynum = 10;
console.log(mystr+mynum);
//Output :- 900