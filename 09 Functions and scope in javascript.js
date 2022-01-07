console.log('Function in javascript');

// What is function in javascript ?

// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.


//example
let name  = 'Vishnu';
const mygreet = function (name,thank='Thanks a lot'){
    let message  = (`Heres the good news ${name}: Only 1 more days until Friday. Thankyou ${thank}!`);
    return message;
}
let val = mygreet(name);
console.log(val);


const myobj = {
    name:"vishnu kore",
    game: function(){
        return "GTA";
    }

}
console.log(myobj.game());

let arr = ['fruit', 'vegetable','furniture'];
arr.forEach(function(element, index, arrays){
    console.log(element,index);
})


//Scope in javascript (important)

let i = 234;
if(1){
    console.log(i);
}
console.log(i);
function ui(name){
    let i=9; //modifies globle variable
    console.log(i);
    return `This is a ${name}ui`;
}
console.log(ui(' vishnu '),i);