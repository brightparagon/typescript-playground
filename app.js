"use strict";
var a = 'sgg';
// a = 22 // error
var b = 28;
// b = 'wow' // error
var c = true;
// c = 1 // error
var d; // type: any
d = 'abc'; // don't get any error from tsc
d = 21;
var e;
e = 22;
// e = 'ss' // error
var arr = ['aa', 'bb'];
// let arr: any[] = ['aa', 'bb']
// arr = [100] // error
var tuple = ['abc', 1000];
// let tuple: [string, number] = [1000, 'abc'] // error
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
