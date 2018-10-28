// string type
let a: string = 'sgg'
// a = 22 // error

// number type
let b: number = 28
// b = 'wow' // error

// boolean type
let c: boolean = true
// c = 1 // error

// any type
let d // type: any
d = 'abc' // don't get any error from tsc
d = 21

// array type
let arr: string[] = ['aa', 'bb']
// let arr: any[] = ['aa', 'bb']
// arr = [100] // error

// tuple type
let tuple: [string, number] = ['abc', 1000]
// let tuple: [string, number] = [1000, 'abc'] // error

// enum type
enum Color {
  Gray, // 0
  Green = 100, // 100
  Blue // 101
}

let myColor: Color = Color.Blue
// console.log(myColor);

// function type
function test(): string {
  return 'abc'
  // return 2 // error
}

function test2(): void {
  console.log('?')
  // return 2 // error
}

function multiply(val1: number, val2: number): number {
  return val1 * val2
}
// console.log(multiply(1, 2));

let myMultiply: (val: number, val2: number) => number
myMultiply = multiply
// myMultiply = test2 // error

// object type
let user: { name: string, age: number } = {
  name: 'jeffrey',
  age: 28
}
// user = {} // error
// user = {
//   name: '?',
//   age: '20' // error
// }
// user = {
//   name: '?',
//   age: 20 // ok
// }

let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [1, 2, 3],
  output: (all: boolean) => {
    if (all) return [3, 5]
    return [2, 3]
  }
}
// complex = {} // error

// type alias
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [1, 2, 3],
  output: (all: boolean) => {
    if (all) return [3, 5]
    return [2, 3]
  }
}

// union type
let f: number | string | boolean = 2
f = false
f = '22'

// never type
function neverReturns(): never {
  throw new Error('An error!')
}

// Nullable type
let canBeNull: number | null = 12
canBeNull = null
let canAlsoBeNull
canAlsoBeNull = null
let canBeAny = null
canBeAny = 12

// tsconfig options: strictNullChecks, noUnusedParameters
function controlTest(isTrue: boolean, somethingElse: boolean) {
  let result: number
  if (isTrue) {
    result = 12
  }
  if (somethingElse) {
    result = 55
  }
  result = 20
  return result
}
