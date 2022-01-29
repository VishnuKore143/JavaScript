console.log('WebPage Crawle In Javascript - Exersise 1');

// Question : you have to creat a variable which is a string containing gthe text which is a link you are interested in.
// You have to fetch all the links from a given page which containing this text 'facebook'. else 'link not found'.

let z = document.links;
let fb = 'facebook';
// let googl = 'google';
Array.from(z).forEach(function(element){
        if(String(element).includes(fb)){
            console.log(element);
        } 
        else{
                console.log('Link Not Found');
        }
        
    })
