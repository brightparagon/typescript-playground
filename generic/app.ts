// Simple Generic
function echo(data: any) {
  return data  
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