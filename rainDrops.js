/*
Your task is to convert a number into a string that contains raindrop sounds corresponding to certain potential factors. 
A factor is a number that evenly divides into another number, leaving no remainder. 
The simplest way to test if a one number is a factor of another is to use the modulo operation.

The rules of raindrops are that if a given number:

has 3 as a factor, add 'Pling' to the result.
has 5 as a factor, add 'Plang' to the result.
has 7 as a factor, add 'Plong' to the result.
does not have any of 3, 5, or 7 as a factor, the result should be the digits of the number.
*/

const convert = (n) => {
  let rainDrops = ""
  if(n%3 === 0 && n%5 === 0 && n%7 === 0) {
      rainDrops = "PlingPlangPlong"
  }
  else if (n%3 === 0 && n%5 === 0) {
      rainDrops = "PlingPlang"
  }
  else if (n%5 === 0 && n%7 === 0) {
      rainDrops = "PlangPlong"
  }
  else if (n%3 === 0 && n%7 === 0) {
      rainDrops = "PlingPlong"
  }
  else if (n%3 === 0) {
      rainDrops = "Pling"
  }
  else if (n%5 === 0) {
      rainDrops = "Plang"
  }
  else if (n%7 === 0) {
      rainDrops = "Plong"
  }
  else {
      rainDrops = String(n)
  }
  return rainDrops
};
