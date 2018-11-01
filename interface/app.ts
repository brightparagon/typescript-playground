interface NamedPerson {
  name: string;
  age?: number;
  [propName: string]: any;
  greet?(lastName: string): void;
}

function greet(person: NamedPerson) {
  console.log(`Hello! ${person.name}!`)  
}

function changeName(person: NamedPerson) {
  person.name = "Ann"
}

const personObj: NamedPerson = {
  name: "Hmteresting",
  age: 20,
  greet(lastName: string) {
    console.log(lastName)
  }
}

greet(personObj)

// this would get an error
// passing literal objects are getting checked more strictly
// in this case this object has age property
// that is not defined in NamedPerson interface
// greet({
//   name: "Hmteresting",
//   age: 20,
// })

greet({
  name: "Hmteresting",
  age: 20,
  hobbies: ['hmm', 'oh oh'],
})

changeName(personObj)
greet(personObj)

// this would get an error
// if defined without name property which is necessary
class PersonClass implements NamedPerson {
  name: string = 'default name';
  lastName: string = 'default last name';
  greet(lastName: string) {
    console.log(lastName)
  }
}

const newPerson = new PersonClass()
newPerson.greet('HMM..')
