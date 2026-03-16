console.log("happy coding");

const { log } = require('console');
const fs = require('fs');

// define two variable
let a = 10
let b = 5

// basic arithemic operations
let sum = a+b
let product = a*b

// prepare data to write
let data = `Sum:${sum} product:${product}`
console.log(data);

// write data to local file 
fs.writeFile('output.txt', data, (err)=>{
    if(err) throw err;
    console.log('Data written on file');
    
})