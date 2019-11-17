/**
 * @author: Cyrille
 * @version: 0.0.1
 */

 /**
  * Count factorial
  * @param: {number} n The argument of the factorial function
  * @return {number} The function falue
  */
function factorial(n=1) {
  if (n > 1) return n * factorial(n - 1);
  else return 1;
}

/**
 * Interpolate a variable
 * @param: {string} name Whom will be saluated
 * @return {string} String with the name
 */
function sayHello(name='default') {
  return `${name}!`;
}

console.log(factorial(5));
console.log(sayHello('jopa'));
