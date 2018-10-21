var MyMath;
(function (MyMath) {
    var PI = 3.141592;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, height) {
        return width * height;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
// TypeScript import syntax
// compile using "tsc app2.ts --outFile app2.js"
// just using "tsc" wouldn't work
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
var PI = 2.99;
console.log(MyMath.calculateCircumference(10));
console.log(MyMath.calculateRectangle(10, 50));
console.log(PI);
