"use strict";
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
        this.type = '??';
        this.age = 28;
    }
    return Person;
}());
var person = new Person("Jeffrey", "jeffrey");
console.log(person);
