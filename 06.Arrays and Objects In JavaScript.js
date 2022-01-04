console.log("Hello console")
// Arrays and Object in JavaScript

//Integer array
let marks  = [56,89,78,63,45];
// console.log(marks);

//String array
const fruits = ['Orange','Apple','Pineapple'];
// console.log(fruits[1])

//mixed array (string+integer+array in array
const mixed = ['str',89,[3,5]];
// console.log(mixed)

//Array using Array Constructur
const arr = new Array(23,123,21,'Orange');
console.log(arr);
console.log(arr.length);
console.log(Array.isArray(arr));
 
//changing array (arr) element
arr[0] = 'vishnu'
// console.log(arr)


let value = marks.indexOf(78);
// console.log(value)

//Mutating or modifing arrays

//The push() method adds one or more element to the end of an array and returns the new length of the array
marks.push(44);

//The unshift() method adds one or more element to the beginning of an array and return the new length of the array
marks.unshift(888)

//The pop() method removes the last element from an arrat and returns that element. The method change the length of the array
marks.pop()

//The shift() method removes the first element from an array and returns that removed element. the method changes the length of the array 
// marks.shift()

//The splice method adds and or removes array element. The splice () method overwrite the orignal arrays.
marks.splice(2,2)

//The reverse() method reverse an array in place. The first array element becomes the last element and the last element becomes the first element.
marks.reverse()

//The concat() method is used to merge two or more arrays, these method does not change the existing arrays, but insted returns the new array.
let marks2 = [1,2,3,7]
marks = marks.concat(marks2)
console.log(marks)

// Creating literals object
let myobj = {
name: 'Vishnu',
'channel': 'Absolute Gaming',
isActive: true,
marks:[1,5,3,6]
}
console.log(myobj);
//Accesing object element 
console.log(myobj.isActive)

//Acessing key element 
console.log([myobj.'channel'])
