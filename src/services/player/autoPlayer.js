// export default
class AutoPlayer {
  constructor() {
    this.id = 'AutoPlayer';
  }

  generateAutoPlayerAnswer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getAnswer(image, answers) {
    // console.log(image);
    // console.log(answers);
    if (typeof image !== 'string') {
      throw new Error('An error occurred while generating answer: type of image is not a string');
    }
    if (!Array.isArray(answers)) {
      throw new Error('An error occurred while generating answer: answers is not an array');
    }
    if (answers.length !== 4) {
      throw new Error('An error occurred while generating answer: answers array is expected to contain 4 answers');
    }
    const autoPlayerAnswerIndex = this.generateAutoPlayerAnswer(0, 3);
    // console.log(autoPlayerAnswerIndex);
    const autoPlayerAnswer = answers[autoPlayerAnswerIndex];

    return autoPlayerAnswer;
  }
}

export function getAutoPlayer() {
  const autoPlayer = new AutoPlayer();
  return autoPlayer;
}
