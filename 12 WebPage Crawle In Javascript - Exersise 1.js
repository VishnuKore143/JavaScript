console.log('WebPage Crawle In Javascript - Exersise 1');


let z = document.links;
let fb = 'facebook'
// let googl = 'google'
Array.from(z).forEach(function(element){
        if(String(element).includes(fb)){
            console.log(element);
        } 
        
    })