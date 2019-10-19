const arr = [1, 2, 33];
Array.prototype.max = function() {return Math.max(...this); };
console.log(arr.max());
