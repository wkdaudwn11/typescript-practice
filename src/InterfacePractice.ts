interface Shape {
  getArea(): number; // Shape interface에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자.
}

class Circle implements Shape {
  // implements 라는 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시.

  // radius: number; // 멤버 변수

  // constructor(radius: number) {
  //   this.radius = radius;
  // }

  // 8 ~ 12번이랑 같은 코드. private을 이용하면 좀 더 짧게 코딩 가능.
  constructor(private radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(10, 5);
const circle = new Circle(5);

console.log(rectangle.width);
// console.log(circle.radius); // constructor에서 private으로 했기 때문에 클래스 외부에서 접근 불가

const shapes: Shape[] = [new Circle(10), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
