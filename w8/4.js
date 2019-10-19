let arr = [2, 3, 0, 1];
arr.sort((l, r) => l <= r ? (l == r ? 0 : -1) : 1);
console.log(arr);
