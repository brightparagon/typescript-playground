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
