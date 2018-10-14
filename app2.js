"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.141592;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
    function calculateRectangle(width, height) {
        return width * height;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
var PI = 2.99;
console.log(MyMath.calculateCircumference(10));
console.log(MyMath.calculateRectangle(10, 50));
console.log(PI);
