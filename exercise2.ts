// Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//   this.name = name
//   this.acceleration = 0

//   this.honk = function() {
//       console.log("Toooooooooot!")
//   }

//   this.accelerate = function(speed) {
//       this.acceleration = this.acceleration + speed
//   }
// }
// var car = new Car("BMW")
// car.honk()
// console.log(car.acceleration)
// car.accelerate(10)
// console.log(car.acceleration)
class Car {
  public name: string
  public acceleration: number = 0

  constructor(name: string) {
    this.name = name
  }

  public honk(): void {
    console.log("Tooooot!")
  }

  public accelerate(speed: number) {
    this.acceleration += speed
  }
}

const car = new Car("BMW")
car.honk()
console.log(car.acceleration)
car.accelerate(10)
console.log(car.acceleration)

// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//   width: 0,
//   length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };
// console.log(rectangle.calcSize());
class baseObject {
  width: number = 0
  length: number = 0
}

class Rectangle extends baseObject {
  caclSize(): number {
    return this.width * this.length
  }
}

const rectangle = new Rectangle()
rectangle.width = 10
rectangle.length = 20
console.log(rectangle.caclSize())
