/*
Given a target word and a set of candidate words, this exercise requests the anagram set: the subset of the candidates that are anagrams of the target.
*/

const findAnagrams = (word, arr) => {
  const anagrams = []
    const sortedWord = word.toLowerCase().split('').sort().join('') // sort the given word
    for(let i of arr) {
        if(word.toLowerCase() !== i.toLowerCase()) { // check if the word is not equal to i
            if(i.toLowerCase().split('').sort().join('') === sortedWord) { // sort i to compare with sortedWprd
                anagrams.push(i)
            }
        }
    }
    return anagrams
}
