"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Class
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
// console.log(person)
// Inheritance
var Jeffrey = /** @class */ (function (_super) {
    __extends(Jeffrey, _super);
    function Jeffrey() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Jeffrey"; // override
        return _this;
    }
    return Jeffrey;
}(Person));
var jeffrey = new Jeffrey("Hmm", "jeff");
console.log(jeffrey);
