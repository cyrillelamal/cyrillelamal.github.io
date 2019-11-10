// function summator() {
//     const args = this;
//     return args.reduce((a, b) => a + b);
// }

const summator = (...args) => args.reduce((a, b) => a + b);


module.exports.summator = summator;
