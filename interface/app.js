"use strict";
function greet(person) {
    console.log("Hello! " + person.name + "!");
}
function changeName(person) {
    person.name = "Ann";
}
var personObj = {
    name: "Hmteresting",
    age: 20,
    greet: function (lastName) {
        console.log(lastName);
    }
};
greet(personObj);
// this would get an error
// passing literal objects are getting checked more strictly
// in this case this object has age property
// that is not defined in NamedPerson interface
// greet({
//   name: "Hmteresting",
//   age: 20,
// })
greet({
    name: "Hmteresting",
    age: 20,
    hobbies: ['hmm', 'oh oh'],
    greet: function (lastName) {
        console.log(lastName);
    },
});
changeName(personObj);
greet(personObj);
// this would get an error
// if defined without name property which is necessary
var PersonClass = /** @class */ (function () {
    function PersonClass() {
        this.name = 'default name';
        this.lastName = 'default last name';
    }
    PersonClass.prototype.greet = function (lastName) {
        console.log(lastName);
    };
    return PersonClass;
}());
var newPerson = new PersonClass();
newPerson.greet('HMM..');
var DoubleValueFunc;
DoubleValueFunc = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(DoubleValueFunc(10, 20));
var oldPerson = {
    age: 98,
    name: "Hmm",
    greet: function (name) {
        console.log(this.age, name);
    }
};
