const obj = {
    obj1: {r: [
            'z',
            {b: 1},
            {c: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']}
        ]
    }
};


// Dot
console.log(obj.obj1.r[2].c[5]);
// Destruct
const {obj1: {r: [,,nestedObj]}} = obj;
const {c: [,,,,,f]} = nestedObj;
console.log(f);
