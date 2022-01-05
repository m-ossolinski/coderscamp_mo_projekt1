export const saveAnswer = (selectedAnswer, isCorrect, questionSaved) => {
  const game = localStorage.getItem('Game');
  const parsedGame = JSON.parse(game);

  const human = {
    answer: selectedAnswer,
    isCorrect: isCorrect
  };
  questionSaved.human = human;

  parsedGame.push(questionSaved);
  localStorage.setItem('Game', JSON.stringify(parsedGame));
};

export const saveNextAnswer = (selectedAnswer, isCorrect, questionSaved) => {
  const game = localStorage.getItem('Game');
  const parsedGame = JSON.parse(game);

  const human = {
    answer: selectedAnswer,
    isCorrect: isCorrect
  };
  questionSaved.human = human;
  questionSaved.id = parsedGame.length + 1;

  parsedGame.push(questionSaved);
  localStorage.setItem('Game', JSON.stringify(parsedGame));
};
