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
