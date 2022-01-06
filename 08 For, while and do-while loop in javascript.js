console.log("For,While and do-while Loop in JavaScript");

// General Loops: for, while and do-while loop

// for Loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('Here for Loop is end');
console.log("");


//While Loop
// console.log('Here While Loop is started');
let j = 0;
while (j < 10) {
    console.log(j + 1);
    j++;
}

// console.log('Here while loop is ended');

// console.log('');

//do while loop
//do while loop will run atlis ones
// console.log('Here do while loop is started');
let k = 1;
do {
    console.log(k);
    k++;

} while (k < 10);

//Break and continue in loops

for(let x=0; x<10; x++){
    console.log(x);
    if(x===5){
        break; 
    }
}
console.log('Done with break');

for(let k=1; k<10; k++){
    if(k===5){
        continue;
    }
    console.log(k);
}
console.log('Done with continue ');


//for each with arrays (use this Recomanded)
let arr = [2,5,6,4,2,3];
arr.forEach(function(element, index, arrays){
    console.log(element,index,arrays);
});


//for each second method
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
}

//object

let obj = {
    name: 'vishnu kore',
    age: 22,
    type: 'Dangerous programmer',
    os: 'ubuntu'
}
for(let key in obj){
    console.log(`${key} of object is ${obj[key]}`);
}
