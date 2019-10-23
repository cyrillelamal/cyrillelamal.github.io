const range = require('./8.js');

const bias = 0x41;


const letters = range(10).map(num => { 
    num += bias;
    return String.fromCharCode(num.toString(10));
})

console.log(letters);
