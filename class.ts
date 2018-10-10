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
console.log(person)
