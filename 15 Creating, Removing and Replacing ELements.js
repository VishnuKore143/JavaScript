console.log("Creating, Removing and Replacing ELements");
let element  = document.createElement('li');

let text  = document.createTextNode('I am a text node');
element.appendChild(text);

//Add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title','my title');
// element.innerText = '<b>Hello this is created by vishnu kore</b>'; //TO use html tags like if you want  to make text bold or something then use .innerHTML However .innerText is user for inserting plain text 
// element.innerHTML = '<b>Hello this is created by vishnu kore</b>';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element);

//replacing element

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element , document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
pr = elem2.getAttribute('class');
pr = elem2.hasAttribute('class');
elem2.removeAttribute('id');
elem2.setAttribute('title', 'Myelem2title');
console.log(elem2,pr);

//Quick Quize
// creat a heading element with text as "Go to facebook.com" and create an a tag outside it with href = "https://www.facebook.com" 