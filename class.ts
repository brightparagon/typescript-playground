class Person {
  name: string
  private type: string
  protected age: number

  constructor(name: string, public username: string) {
    this.name = name
    this.type = '??'
    this.age = 28
  }
}

const person = new Person("Jeffrey", "jeffrey")
console.log(person)
