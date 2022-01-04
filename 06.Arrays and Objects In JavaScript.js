console.log("Hello console")

let marks  = [56,89,78,63,45];
const fruits = ['Orange','Apple','Pineapple'];
const mixed = ['str',89,[3,5]];

const arr = new Array(23,123,21,'Orange');
// console.log(marks);
// console.log(mixed)
// console.log(fruits[1])

// console.log(arr.length);
// console.log(Array.isArray(arr));
 
arr[0] = 'vishnu'
// console.log(arr)


let value = marks.indexOf(78);
// console.log(value)

//Mutating or modifing arrays
marks.push(44);
marks.unshift(888)
// marks.pop()
// marks.shift()
// marks.splice(2,2)
marks.reverse()
let marks2 = [1,2,3,7]
marks = marks.concat(marks2)
// console.log(marks)

let myobj = {
name: 'Vishnu',
channel: 'codewithharry',
isActive: true,
marks:[1,5,3,6]
}
console.log(myobj);
console.log(myobj.isActive)