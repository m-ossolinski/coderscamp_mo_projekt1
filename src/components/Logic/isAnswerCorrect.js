export default function isAnswerCorrect(correctAnswer, playerAnswer) {
  const isCorrectAnswerString = typeof correctAnswer === 'string';
  const isPlayerAnswerString = typeof playerAnswer === 'string';
  if (!isCorrectAnswerString) {
    throw new Error('CorrectAnswer has to be a string');
  }
  if (!isPlayerAnswerString) {
    throw new Error('PlayerAnswer has to be a string');
  }
  return correctAnswer.toLowerCase() === playerAnswer.toLowerCase();
}
