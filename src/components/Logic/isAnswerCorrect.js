export default function isAnswerCorrect(correctAnswer, playerAnswer) {
  const isCorrectAnswerString = typeof correctAnswer === 'string';
  const isPlayerAnswerString = typeof playerAnswer === 'string';
  if (!isCorrectAnswerString) {
    throw new Error('correctAnswer has to be a string');
  }
  if (!isPlayerAnswerString) {
    throw new Error('playerAnswer has to be a string');
  }
  return correctAnswer.toLowerCase() === playerAnswer.toLowerCase();
}
