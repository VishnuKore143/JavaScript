// Strings: properties, Methods and Templet Literls

console.log("Hello console")
const Name = 'Vishnu ';
const greeting = 'Good Morning';
console.log(greeting+' '+Name);

let html;
//orignal
html = "<h1> this is my heading </h1>" +
       "<p> this is my para</p> ";


// String Functions 

//updated and string concatenated here
html = html.concat('This ', 'str2');
console.log(html);

// Length function
console.log(html.length);

// toLowerCase convert all the upercase character into lower case
console.log(html.toLocaleLowerCase());

// toUpperCase converts all the lower case character into upper case
console.log(html.toUpperCase());

// main html veriable is not getting any effect this all functions are only returning the values.
console.log(html);


// INDEXING + Strings Methods

// most of the programming language Indexing always starts from the 0 and so on. [0] means first character and [2] means second caharacter
console.log(html[1]);

//The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex 
console.log(html.indexOf('this'));

//The indexOf() method returns -1 if the value is not found.
console.log(html.indexOf('kdbfkhdbf'));

//The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string. The lastIndexOf() method searches the string from the end to the beginning.
console.log(html.lastIndexOf('<'));

//The charAt() method returns the character at a specified index (position) in a string. The index of the first character is 0, the second 1
console.log(html.charAt(1));

//The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
console.log(html.endsWith('str2'));

//The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false.
console.log(html.includes('is'));

//substring() is an inbuilt function in JavaScript which is used to return the part of the given string from start index to end index
console.log(html.substring(1,5));

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end ( end not included) where start and end represent the index of items in that array.
console.log(html.slice(0,4));

//The split() method splits a string into an array of substrings. ... The split() method does not change the original string. If (" ") is used as separator, the string is split between words.
console.log(html.split('> '));

//
console.log(html.replace('this','it'));


// Templet Literils

//What is the template literal?
//A template literal is a new kind of string literal that can span multiple lines and interpolate expressions (include their results).

let fruit1 = 'orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${Name} <h1> This is heading </h1>
              <p> You like  ${fruit1} and ${fruit2}`;
document.body.innerHTML = myHtml;


const animal = {
    kind: "Mokey",
    food: "Bananas",
    hobby: "Jumping trees"
};
const display = `
<div class = "animal">
<h1>Hey, this is a ${animal.kind}</h1>
<p>It eats ${animal.food} and loves ${animal.hobby}</p>
</div>
`;
document.body.innerHTML = display;