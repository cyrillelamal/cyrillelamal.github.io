const n = 10;

function range(n) {
    return [...Array(n).keys()];
}

console.log('8\s side effect: ', range(n));


module.exports = range;
