/*
Calculate the Hamming Distance between two DNA strands.
*/

const compute = (strandOne, strandTwo) => {
    let distance = 0
  if(strandOne.length !== strandTwo.length) {
      throw new Error("strands must be of equal length")
  }
  for(let i = 0; i < strandOne.length; i++) {
      if(strandOne[i] !== strandTwo[i]) {
          distance += 1
      }
  }
  return distance
};
