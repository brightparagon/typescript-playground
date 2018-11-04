function withLogging(constructorFn: Function) {
  console.log(constructorFn)
}

@withLogging
class Fruit {
  constructor() {
    console.log("Hi! there!")
  }
}
