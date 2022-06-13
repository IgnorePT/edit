// Task 1
// In this task I’ll provide you with a constructor.I want you to:
//     ● Add a new method to the Shape class's prototype, calcPerimeter(),
//     which calculates its perimeter(the length of the shape's outer edge) and logs
//     the result to the console.
//     ● Create a new instance of the Shape class called square.Give it a name of
//     square and a sideLength of 5.
//     ● Call your calcPerimeter() method on the instance, to see whether it logs
//     the calculation result to the browser DevTools' console as expected.
//     ● Create a new instance of Shape called triangle, with a name of triangle
//     and a sideLength of 3.
//     ● Call triangle.calcPerimeter() to check that it works OK.
//
//     function Shape(name, sides, sideLength) {
//          this.name = name;
//          this.sides = sides;
//          this.sideLength = sideLength;
//      }

const avaliableShapes = {
    square: "square",
    triangle: "triangle",
    rectangle: "rectangle"
}

function ShapeFn(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    this.perimeter;
    this.calcPerimeter = function(){
        this.perimeter = this.sideLength * this.sides;
    }
}

var square = new ShapeFn(avaliableShapes.square, 4, 5);

square.calcPerimeter();
console.log(square.perimeter);

var triangle = new ShapeFn(avaliableShapes.triangle, 3, 3);

triangle.calcPerimeter();
console.log(square.perimeter);


// Task 2
// I'd like you to create a Square class that inherits from Shape, and adds a
// calcArea() method that calculates the square's area. Also set up the constructor
// so that the name property of Square object instances is automatically set to
// square, and the sides property is automatically set to 4. When invoking the
// constructor, you should therefore just need to provide the sideLength property.
// Create an instance of the Square class called square with appropriate property
// values, and call its calcPerimeter() and calcArea() methods to show that it
// works ok.


// function Square(sideLength){
//     new Shape(avaliableShapes.square, 4, null);
//     this.sideLength = sideLength;
//     ;
//     this.calcArea = function(){
//         this.area = this.sideLength * this.sideLength
//     }
 
// }

class Shape {

    name;
    sides;
    sideLength;

    constructor(name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
}

class Square extends Shape {

    constructor(sideLength){
        this.name = "square";
        this.sides = 4;
        this.sideLength = sideLength;
    }

    get area(){
        return this.area;
    } 

    calcArea(){
        this.area = this.sideLength * this.sideLength
    }
}

const square2 = new Square(4);

square2.calcArea();
console.log(square2.area);


// Task 3
// I'd like you to create a Triangle class that inherits from Shape, and does the
// follows the same implementation logic than Square class.