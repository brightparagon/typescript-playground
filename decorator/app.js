"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator
function withLogging(constructorFn) {
    console.log(constructorFn);
}
var Fruit = /** @class */ (function () {
    function Fruit() {
        console.log("Hi! there!");
    }
    Fruit = __decorate([
        withLogging
    ], Fruit);
    return Fruit;
}());
// Factory
function isLogging(is) {
    return is ? withLogging : null;
}
var TV = /** @class */ (function () {
    function TV() {
        console.log("I'm a TV!");
    }
    TV = __decorate([
        isLogging(true)
    ], TV);
    return TV;
}());
// Advanced Decorator
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = "Green Plant!";
    }
    Plant = __decorate([
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print();
