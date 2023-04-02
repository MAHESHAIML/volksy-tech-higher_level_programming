#!/usr/bin/node
function add(a){
    let fact = 1;
    for (let i = 1; i<a+1; i++){
        fact = fact * i;
    }
    console.log(fact);
}

a = parseInt(process.argv[2]);
add(a);
