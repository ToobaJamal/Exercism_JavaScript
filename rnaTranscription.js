/*
Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

G -> C
C -> G
T -> A
A -> U
*/

const toRna = (DNA) => {
  if(!DNA) {
    return ""
  }
  let RNA = ""
  for(let i of DNA) {
    if(i === 'G') {
      RNA += 'C'
    }
    else if(i === 'C') {
      RNA += 'G'
    }
    else if (i === 'T') {
      RNA += 'A'
    }
    else if(i === 'A') {
      RNA += 'U'
    }  
}
    return RNA
}
