/*
Implement a way to determine whether a given number is perfect. 
Depending on your language track, you may also need to implement a way to determine whether a given number is abundant or deficient.
*/

const classify = (num) => {
    if(num <= 0) {
        throw new Error('Classification is only possible for natural numbers.')
    }
  const factors = []
  let sum = 0
  for(let i=1; i<num; i++) {
      if(num%i === 0) {
          sum+=i
      }
  }
    return sum === num ? 'perfect' : sum > num  ? 'abundant' : 'deficient'
}
