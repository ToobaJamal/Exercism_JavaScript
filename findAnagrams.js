/*
Given a target word and a set of candidate words, this exercise requests the anagram set: the subset of the candidates that are anagrams of the target.
*/

const findAnagrams = (word, arr) => {
  const anagrams = []
    const sortedWord = word.toLowerCase().split('').sort().join('')
    for(let i of arr) {
        if(word.toLowerCase() !== i.toLowerCase()) {
            if(i.toLowerCase().split('').sort().join('') === sortedWord) {
                anagrams.push(i)
            }
        }
    }
    return anagrams
}
