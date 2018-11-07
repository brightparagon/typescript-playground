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
function isLogging(is: boolean) {
  return is ? withLogging : null
}

@isLogging(true)
class TV {
  constructor() {
    console.log("I'm a TV!")
  }
}

// Advanced Decorator
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this)
  }
}

@printable
class Plant {
  name: string = "Green Plant!"
}

const plant = new Plant()
plant.print()

// Method Decorator
function editable(value: boolean) {
  return function(target: any, propName: string, descriptor: PropertyDecorator) {
    descriptor.writable = value
  }
}

class Project {
  projectName: string

  constructor(name: string) {
    this.projectName = name
  }

  @editable(false)
  calcBudget = () => {
    console.log(1000)
  }
}

const project = new Project("New Project")
project.calcBudget()
project.calcBudget = () => {
  console.log(2000)
}
project.calcBudget()