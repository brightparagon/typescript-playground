"use strict";
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
        this.type = '??';
        this.age = 28;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('hmm');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Jeffrey", "jeffrey");
console.log(person);
