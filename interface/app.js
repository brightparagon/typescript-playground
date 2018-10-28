"use strict";
function greet(person) {
    console.log("Hello! " + person.name + "!");
}
function changeName(person) {
    person.name = "Ann";
}
var personObj = {
    name: "Hmteresting",
    age: 20
};
greet(personObj);
changeName(personObj);
greet(personObj);
