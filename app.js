"use strict";
// string type
var a = 'sgg';
// a = 22 // error
// number type
var b = 28;
// b = 'wow' // error
// boolean type
var c = true;
// c = 1 // error
// any type
var d; // type: any
d = 'abc'; // don't get any error from tsc
d = 21;
// array type
var arr = ['aa', 'bb'];
// let arr: any[] = ['aa', 'bb']
// arr = [100] // error
// tuple type
var tuple = ['abc', 1000];
// let tuple: [string, number] = [1000, 'abc'] // error
// enum type
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101
})(Color || (Color = {}));
var myColor = Color.Blue;
// console.log(myColor);
// function type
function test() {
    return 'abc';
    // return 2 // error
}
function test2() {
    console.log('?');
    // return 2 // error
}
function multiply(val1, val2) {
    return val1 * val2;
}
// console.log(multiply(1, 2));
var myMultiply;
myMultiply = multiply;
// myMultiply = test2 // error
// object type
var user = {
    name: 'jeffrey',
    age: 28
};
// user = {} // error
// user = {
//   name: '?',
//   age: '20' // error
// }
// user = {
//   name: '?',
//   age: 20 // ok
// }
var complex = {
    data: [1, 2, 3],
    output: function (all) {
        return [2, 3];
    }
};
var complex2 = {
    data: [1, 2, 3],
    output: function (all) {
        return [2, 3];
    }
};
// union type
var f = 2;
f = false;
f = '22';
// never type
function neverReturns() {
    throw new Error('An error!');
}
// Nullable type
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canBeAny = null;
canBeAny = 12;
