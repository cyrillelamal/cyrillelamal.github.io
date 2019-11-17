const LIM = 10e6;  // Limit for exception

function TooBigException(msg="Число слишком велико") {
  const error = new Error(msg);
  error.code = 'CUSTOM_ERROR';
  return error;
}
TooBigException.prototype = Object.create(Error.prototype);

/*
Return true if the passed number is prime else return false
Raise exception in case of the passed number is bigger than the LIM const
*/
isPrime = (num) => {
  if (num > LIM) throw new TooBigException();

  let accumulator = Math.round(Math.sqrt(num));
  while (num % accumulator != 0) {
    accumulator++;
  }
  if (num != accumulator) return false;
  return true;
}

// Tests
try {
  let num = 11e6;
  isPrime(num);  // Raises TooBigException
} catch (TooBigException) {
  console.log(TooBigException, "Catched");
}
num = 10;
console.log(isPrime(num));  // false
num = 7;
console.log(isPrime(7));  // true
