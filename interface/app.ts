interface NamedPerson {
  name: string
}

function greet(person: NamedPerson) {
  console.log(`Hello! ${person.name}!`)  
}

function changeName(person: NamedPerson) {
  person.name = "Ann"
}

const personObj = {
  name: "Hmteresting",
  age: 20
}

greet(personObj)
changeName(personObj)
greet(personObj)
