// Decorator
function withLogging(constructorFn: Function) {
  console.log(constructorFn)
}

@withLogging
class Fruit {
  constructor() {
    console.log("Hi! there!")
  }
}

// Factory
function isLogging(is: boolean): any {
  return is ? withLogging : null
}

@isLogging(true)
class TV {
  constructor() {
    console.log("I'm a TV!")
  }
}

// Advanced Decorator
function printable(constructorFn: Function): any {
  constructorFn.prototype.print = function() {
    console.log(this)
  }
}

@printable
class Plant {
  name: string = "Green Plant!"
}

const plant = new Plant()
// plant.print()

// Method Decorator
function editable(value: boolean): any {
  return function(target: any, propName: string, descriptor: PropertyDecorator) {
    // descriptor.writable = value
  }
}

// Property Decorator
function overwritable(value: boolean): any {
  return function(target: any, propName: string) {
    console.log(target)
    console.log(propName)

    const newDescriptor: PropertyDescriptor = {
      writable: value
    }

    return newDescriptor
  }
}

class Project2 {
  @overwritable(false)
  projectName: string

  constructor(name: string) {
    this.projectName = name
  }

  @editable(false)
  calcBudget = () => {
    console.log(1000)
  }
}

const project = new Project2("New Project")
project.calcBudget()
project.calcBudget = () => {
  console.log(2000)
}
project.calcBudget()

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log(target)
  console.log(methodName)
  console.log(paramIndex)
}

class Course {
  name: string

  constructor(name: string) {
    this.name = name
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(mode + 10000)
    } else {
      console.log(mode + 2000)
    }
  }
}

const course = new Course("Super Course")
course.printStudentNumbers("anythig", true)
course.printStudentNumbers("anythig", false)
