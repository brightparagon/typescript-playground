// Class
class Person {
  name: string
  private type: string
  protected age: number

  constructor(name: string, public username: string) {
    this.name = name
    this.type = '??'
    this.age = 28
  }

  public printAge() {
    console.log(this.age)
    this.setType('hmm')
  }

  public setType(type: string) {
    this.type = type
    console.log(this.type)
  }
}

const person = new Person("Jeffrey", "jeffrey")
// console.log(person)

// Inheritance
class Jeffrey extends Person {
  // name = "Jeffrey" // override

  constructor(username: string) {
    super("Jeffrey", username)
    this.age = 35 // accessable via this because age property is protected in the parent class
    // console.log(this.type) // error: type property is private in the parent class
  }
}

const jeffrey = new Jeffrey("jeff")
console.log(jeffrey)

// Getters and Setters
class Plant {
  private _species: string = "Default"

  get species() {
    return this._species
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value
    } else {
      this._species = "Default"
    }
  }
}

let plant = new Plant()
plant.species = "AB"
plant.species = "Flower"

// Static Properties and Methods
class Helpers {
  static PI: number = 3.14
  static calcCircumference(diameter: number): number {
    return this.PI * diameter
  }
}

console.log(Helpers.PI)
console.log(Helpers.calcCircumference(3))

// Abstract Class
abstract class Project {
  projectName: string = "Default"
  budget: number = 500000

  abstract changeName(name: string): void

  calcBudget() {
    return this.budget * 2
  }
}

class ITProject extends Project {
  changeName(name: string): void { // without implementing this function it would be errored
    this.projectName = name
  }
}

let newProject = new ITProject()
console.log(newProject)
newProject.changeName("Awesome IT Project!")
console.log(newProject)

// Privaite Constructors
class OnlyOne {
  private static instance: OnlyOne
  private constructor(public name: string) {}

  static getInstance(name: string) {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne(name)
    }
    
    return OnlyOne.instance
  }
}

// let wrong = new OnlyOne("hmm?") // error
let right = OnlyOne.getInstance("wow")
console.log(right)
