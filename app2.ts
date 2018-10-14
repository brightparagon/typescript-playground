// TypeScript import syntax
// compile using "tsc app2.ts --outFile app2.js"
// just using "tsc" wouldn't work
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

const PI = 2.99

console.log(MyMath.calculateCircumference(10))
console.log(MyMath.calculateRectangle(10, 50))
console.log(PI)
