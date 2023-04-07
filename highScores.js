class HighScores {
  constructor(scores) {
    this.scoresArray = scores
  }

  get scores() {
    return this.scoresArray
  }

  get latest() {
    return this.scoresArray[this.scoresArray.length - 1]
  }

  get personalBest() {
    return Math.max(...this.scoresArray)
  }

  get personalTopThree() {
    const sortedScores = this.scoresArray.sort((a, b) => b - a)
    return sortedScores.slice(0, 3)
  }
}
