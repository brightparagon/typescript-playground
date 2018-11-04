// Simple Generic
function echo(data: any) {
  return data  
}

function echoToString(data: any) {
  console.log(data)
  return "hmm"
}

console.log(echo("Hmm"))
console.log(echo(27))
console.log(echo({ name: "hmm", age: 82 }))

// Better Generic
function betterEcho<T>(data: T) {
  return data
}

console.log(betterEcho("Hmm"))
console.log(betterEcho<number>(27))
// console.log(betterEcho<number>("??")) // will get an error
console.log(betterEcho({ name: "hmm", age: 82 }))

// Built-in Generic
const testResults: Array<number | boolean> = [1, 0.2, true]
testResults.push(3)
testResults.push(false)
// testResults.push("hmm?") // would get an error
console.log(testResults)

// Array
function printAll<T>(args: T[]) {
  args.forEach((element) => console.log(element))
}
printAll<string>(["aaa", "bbb", "ccc"])

// Generic Types
const echo2: <T>(data: T) => T = betterEcho

console.log(echo2<string>("oooops!"))

// Generic Class with constraints
// class SimpleMath<T extends number | string, U extends number | string> {
//   baseValue: T
//   multiplyValue: U
  
//   calculate(): number {
//     return +this.baseValue * +this.multiplyValue
//   }
// }

// const simpleMath = new SimpleMath<string, number>()
// simpleMath.baseValue = "10"
// simpleMath.multiplyValue = 20
// console.log(simpleMath.calculate())

// Exercise: Generic Class
class MyMap<T extends number | string> {
  obj: {
    [key: string]: T
  } = {}

  setItem(key: string, item: T): void {
    this.obj[key] = item
  }

  getItem(key: string): T {
    return this.obj[key]
  }

  clear(): void {
    Object
      .keys(this.obj)
      .forEach((key) => delete this.obj[key])
  }

  printMap(): void {
    Object
      .keys(this.obj)
      .forEach((key) => console.log(this.obj[key]))
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 555);
numberMap.setItem('bananas', 10000055);
console.log(numberMap.getItem('bananas')) // 10000055
console.log(numberMap.getItem('apples')) // 555
numberMap.clear()
console.log(numberMap.getItem('bananas')) // undefined
numberMap.setItem('apples', 444);
numberMap.setItem('bananas', 1234);
numberMap.printMap(); // 444, 1234
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap(); // "Max", 27
