var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
// plant.print()
// Method Decorator
function editable(value) {
    return function (target, propName, descriptor) {
        // descriptor.writable = value
    };
}
// Property Decorator
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project2 = /** @class */ (function () {
    function Project2(name) {
        this.calcBudget = function () {
            console.log(1000);
        };
        this.projectName = name;
    }
    __decorate([
        overwritable(false)
    ], Project2.prototype, "projectName");
    __decorate([
        editable(false)
    ], Project2.prototype, "calcBudget");
    return Project2;
}());
var project = new Project2("New Project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log(target);
    console.log(methodName);
    console.log(paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(mode + 10000);
        }
        else {
            console.log(mode + 2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers");
    return Course;
}());
var course = new Course("Super Course");
course.printStudentNumbers("anythig", true);
course.printStudentNumbers("anythig", false);
