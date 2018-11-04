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
