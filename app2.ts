namespace MyMath {
  const PI  = 3.141592
  
  export function calculateCircumference(diameter: number) {
    return diameter * PI
  }

  export function calculateRectangle(width: number, height: number) {
    return width * height
  }
}

const PI = 2.99

console.log(MyMath.calculateCircumference(10))
console.log(MyMath.calculateRectangle(10, 50))
console.log(PI)
