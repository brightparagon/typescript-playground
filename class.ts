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
