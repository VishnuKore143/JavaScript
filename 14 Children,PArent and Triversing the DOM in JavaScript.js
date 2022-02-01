console.log('Children,PArent and Triversing the DOM in JavaScript');
let cont  = document.querySelector('.no');
cont = document.querySelector('.container');
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeName);
// console.log(nodeType);

//Node Types 
// 1. element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType


//console.log(cont.childNodes);
//console.log(cont.children);


let container  = document.querySelector('.container');
// console.log(container.children[1].children[0].children); //Traversing 

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);

// console.log(container.children);
// console.log(container.childElementCount); //count of child element

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);