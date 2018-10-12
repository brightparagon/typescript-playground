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
    // name = "Jeffrey" // override
    function Jeffrey(username) {
        var _this = _super.call(this, "Jeffrey", username) || this;
        _this.age = 35; // accessable via this because age property is protected in the parent class
        return _this;
        // console.log(this.type) // error: type property is private in the parent class
    }
    return Jeffrey;
}(Person));
var jeffrey = new Jeffrey("jeff");
console.log(jeffrey);
// Getters and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
plant.species = "AB";
plant.species = "Flower";
// Static Properties and Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(Helpers.PI);
console.log(Helpers.calcCircumference(3));
// Abstract Class
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 500000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Awesome IT Project!");
console.log(newProject);
// Privaite Constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function (name) {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne(name);
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne("hmm?") // error
var right = OnlyOne.getInstance("wow");
console.log(right);
