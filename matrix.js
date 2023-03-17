/*
Given a string representing a matrix of numbers, return the rows and columns of that matrix.
*/

class Matrix {
  constructor(input) {
    this.matrix = input.trim().split('\n').map(x => x.split(' ')).map(x => x.map(Number))
  }
  get rows() {
    return this.matrix
  }
  get columns() {
    return this.matrix[0].map((_, i) => this.rows.map(row => row[i]))
  }
}
