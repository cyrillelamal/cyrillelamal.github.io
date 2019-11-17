const NUM_LEN = 10;
const N = 10;


function genRand(bottom=10, top=10**7) {
    return Math.floor(Math.random() * (top - bottom)) + bottom;
}


function complete(strNum, for_) {
    while (strNum.length < for_) {
        strNum = '0' + strNum;
    }
    return strNum;
}


const strings = Array.from([...Array(N).keys()], _ => {
    let numStr = genRand().toString(10);
    return complete(numStr, N);
});

console.log(strings);
