const steps = (n) => {
    if(n <= 0) {
        throw new Error('Only positive numbers are allowed')
    }
    let num = n
  let steps = 0
  while(num > 1) {
      steps++
      if(num%2 === 0) {
          num = num/2
      }
      else {
          num = (num * 3) + 1
      }
  }
  return steps
};
