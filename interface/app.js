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
});
changeName(personObj);
greet(personObj);
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
