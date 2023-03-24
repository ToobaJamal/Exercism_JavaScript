/*
Determine if a triangle is equilateral, isosceles, or scalene.
*/

class Triangle {
  constructor(...sides) {
    this._isValid = sides[0] !== 0 && sides[1] !== 0 && sides[2] !== 0;
    this._isValid = this._isValid && sides[0] + sides[1] >= sides[2] && sides[1] + sides[2] >= sides[0] && sides[0] + sides[2] >= sides[1];
    
    this.sides = sides;
  }

  get isEquilateral() {
    const sideOne = this.sides[0]
  if(this._isValid) {
      return this.sides.every(x => x === sideOne)
    }
    else {
      return false
    }
  } 
  

  get isIsosceles() {
    const triangle = this.sides
    if(this._isValid) {
    if(triangle[0] === triangle [1] || triangle[0] === triangle [2] || triangle [1] === triangle [2]) {
      return true
    }
    else {
      return false
    }
      
    } else {
      return false
    }
  }

  get isScalene() {
    const triangle = this.sides
    if(this._isValid) {
    if(triangle[0] !== triangle[1] && triangle[1] !== triangle[2]) {
      return true
    }
    else {
      return false
    }
      
    } else {
      return false
    }
  }
}
