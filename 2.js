// Convert the UML diagram to Typescript class. - use number for double

/*

-radius: double = 1.0
-color: String = “red”
+Circle()
+Circle (radius:double)
+Circle (radius: double, color:String)
+getRadius(): double
+setRadius (radius: double):void
+getColor ():String
+setColor (color: String): void
+toString():String “Circle[radius =?, color =?]”
+getArea (): double
+getCircumference(): double

*/

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  //   getRadius() {
  //     return this.radius;
  //   }

  //   setRadius() {
  //     this.radius = this.radius;
  //   }

  //   getColor() {
  //     return this.color;
  //   }

  //   setColor() {
  //     this.color = this.color;
  //   }

  getArea(radius) {
    var radius = this.radius;
    var area = (22 / 7) * (radius * radius);
    return area.toFixed(2);
  }

  getCircumference(radius) {
    var radius = this.radius;
    var circumference = 2 * (22 / 7) * radius;
    return circumference.toFixed(2);
  }
}

var circle = new Circle(3, "red");
console.log("Area of give circle is : " + circle.getArea());
console.log("Circumference of give circle is : " + circle.getCircumference());
