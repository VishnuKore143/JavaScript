console.log("hello console")

// variables in js
// var, let, const
var Name = "vishnu";
var channel;
var marks=34;
// channel = 'CWH';
console.log(Name,marks,channel);

// Rules for creating js variables
/*
1. cannot starts with number
2. can start with letters,number,_ or  $
3. are case sensitive 

4. _ underscore is use as private variable so dont start with underscore in oop js
*/
var city = 'Delhi';
console.log(city);

const ownername = 'HariRam';
//ownername = "vishnu";  // error: Assignment to constant variable. will not change the value of ownername because its a const
console.log(ownername);

// const fruit; // error :  Missing initializer in const declaration. because whenever we use const we have to assigne a value to its variable.

const fruit = 'apple';
console.log(fruit); 

{
    let city = 'Rampur';
    city = 'Kolkata';
    console.log(city);
}
console.log(city);


const arr1 = [12,23,12,53,3];
arr1.push(45);
console.log(arr1);

/* most common programmin case types

1. camelCase - 
2. kabab-case
3. snake_case
4. PascaleCase  

*/