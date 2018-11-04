"use strict";
// Simple Generic
function echo(data) {
    return data;
}
function echoToString(data) {
    console.log(data);
    return "hmm";
}
console.log(echo("Hmm"));
console.log(echo(27));
console.log(echo({ name: "hmm", age: 82 }));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Hmm"));
console.log(betterEcho(27));
// console.log(betterEcho<number>("??")) // will get an error
console.log(betterEcho({ name: "hmm", age: 82 }));
// Built-in Generic
var testResults = [1, 0.2, true];
testResults.push(3);
testResults.push(false);
// testResults.push("hmm?") // would get an error
console.log(testResults);
// Array
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["aaa", "bbb", "ccc"]);
// Generic Types
var echo2 = betterEcho;
console.log(echo2("oooops!"));
// Generic Class with constraints
// class SimpleMath<T extends number | string, U extends number | string> {
//   baseValue: T
//   multiplyValue: U
//   calculate(): number {
//     return +this.baseValue * +this.multiplyValue
//   }
// }
// const simpleMath = new SimpleMath<string, number>()
// simpleMath.baseValue = "10"
// simpleMath.multiplyValue = 20
// console.log(simpleMath.calculate())
// Exercise
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.obj = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.obj[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.obj[key];
    };
    MyMap.prototype.clear = function () {
        var _this = this;
        Object
            .keys(this.obj)
            .forEach(function (key) { return delete _this.obj[key]; });
    };
    MyMap.prototype.printMap = function () {
        var _this = this;
        Object
            .keys(this.obj)
            .forEach(function (key) { return console.log(_this.obj[key]); });
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 555);
numberMap.setItem('bananas', 10000055);
console.log(numberMap.getItem('bananas')); // 10000055
console.log(numberMap.getItem('apples')); // 555
numberMap.clear();
console.log(numberMap.getItem('bananas')); // undefined
numberMap.setItem('apples', 444);
numberMap.setItem('bananas', 1234);
numberMap.printMap(); // 444, 1234
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap(); // "Max", 27
