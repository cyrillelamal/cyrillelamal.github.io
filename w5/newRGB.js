const concat = require('goss_concat');


const newRGB = (r=255, g=255, b=255) => {
    return `#${concat(r.toString(16), g.toString(16), b.toString(16))}`;
}

console.log(newRGB());
console.log(newRGB(10, 15, 255));
