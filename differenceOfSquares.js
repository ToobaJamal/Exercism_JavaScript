/*
Find the difference between the square of the sum and the sum of the squares of the first N natural numbers.
*/

class Squares {
  constructor(n) {
    this.n = n;
    this.sum = (n * (n + 1)) / 2; // using arithmatic series formula instead of for loop to make the code efficient
  }

  get sumOfSquares() {
    let sumOfSquares = 0
    for(let i=1; i<=this.n; i++) {
      sumOfSquares += i*i
    }
    return sumOfSquares
  }

  get squareOfSum() {
    return this.sum ** 2
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}
