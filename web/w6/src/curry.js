const partiPow = x => y => y**x;


const qv = partiPow(2);
const cb = partiPow(3);

console.log(qv(5)); // 25
console.log(cb(5)); // 125
