const [a1, b1, c1, a2, b2, c2] = [1, 3, 2, 9, 2, 7];
const delta = a1*b2 - a2*b1;
const delta_x = c1*b2 - c2*b1;
const delta_y = a1*c2 - a2*c1;
const x = delta_x / delta;
const y = delta_y / delta;

console.log('Ответ: x=', x, ' y=', y);
