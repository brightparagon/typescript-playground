let a: string = 'sgg'
// a = 22 // error

let b: number = 28
// b = 'wow' // error

let c: boolean = true
// c = 1 // error

let d // type: any
d = 'abc' // don't get any error from tsc
d = 21

let e: number
e = 22
// e = 'ss' // error

let arr: string[] = ['aa', 'bb']
// let arr: any[] = ['aa', 'bb']
// arr = [100] // error

let tuple: [string, number] = ['abc', 1000]
// let tuple: [string, number] = [1000, 'abc'] // error

enum Color {
  Gray, // 0
  Green = 100, // 100
  Blue // 101
}

let myColor: Color = Color.Blue
console.log(myColor);
