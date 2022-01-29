console.log('HTML Element selector in javascript');
/*
Element Selectors

1. Single element selector
2. Multi element selector
*/

// 1. Single element selector
let element = document.getElementById('myfirst');
//  element.className; 
//  element.childNodes;
//  element.parentNode;
element.style.color='orange';
element.innerText = 'Vishnu is a good boy';
element.innerHTML = '<b>Vishnu is a good boy</b>';
// console.log(element);


//Quary Selector (jquary)
let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('b');//direct tag select(bold tag <b>bold</b>)
sel = document.querySelector('h1');//direct HTML tag select (heading)
sel = document.querySelector('div');//Get Only First Div from DOM

sel.style.color = 'Green' // only first div will get changes
// console.log(sel);


//2. Multi Element Selector
let multi = document.getElementsByClassName('child');
multi = document.getElementsByClassName('container');
// console.log(multi[0].getElementsByClassName('child'));
multi = document.getElementsByTagName('div');
console.log(multi);


//itrating HTML collection ex. changing color of element
Array.from(multi).forEach(element => {
    console.log(element);
    element.style.color = 'blue';
});