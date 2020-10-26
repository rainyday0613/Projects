// 1. Use Strict 
// added in ES 5
// use this for Vanilla JavaScript

'use strinct'

// 2. Variable, rw(read/write)
// let (added in ES6)
let GlobalName = 'ssd';
{
    let name = 'minchul';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(GlobalName);

}
console.log(GlobalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope

// 3. Contants, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - secrutiy
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, Symbol
// object, box container
// fuction, first-class function 

const count = 17;
const size = 17.1;

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: Infinity, Negative Infinity, Not a number
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairy new, don't use it yet)
const bigInt = 1234567890123546789013245678901234567890n;
console.log(`value: ${bigInt}, type : ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;



