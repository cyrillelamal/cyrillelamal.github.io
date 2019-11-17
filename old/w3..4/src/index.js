// @flow
function flowTest(x: number): number {
  return x * x;
}


const age = 18;

const restricted = age => (age <= 18) ? (age < 18 ? 'yes' : 'notsure') : 'no';

console.log(restricted(age));


/* python
r = 'yes' if age < 18 else (lambda a: 'notsure' if a == 18 else 'no')(age)
r = 'yes' if age < 18 else ('notsure' if age == 18 else 'no')
*/

/* ПЫХА Ъ
$r = ($age <= 18) ? ($age < 18 ? 'yes' : 'notsure') : 'no';
*/
