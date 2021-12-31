import {
  fetchIdsFromAPI,
  fetchNameFromAPI,
  fetchImgFromAPI
} from '../swapi/swapi';

const getRandomNumber = (minInt, maxInt) => {
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

const getRangeOfIds = async (gameMode) => {
  const ids = await fetchIdsFromAPI(gameMode);
  let result = ids;
  if (gameMode === 'starships') {
    result = ids.filter(
      (item) => item > 3 && item !== 17 && item !== 32 && item <= 48
    );
  }
  if (gameMode === 'vehicles') {
    result = ids.filter((item) => item <= 42);
  }
  return result;
};

const generateAnswerNumbers = (arrOfNumbers) => {
  const minIndex = 0;
  const answerNumbers = [];
  for (let i = 0; answerNumbers.length <= 4; i++) {
    const index = getRandomNumber(minIndex, arrOfNumbers.length - 1);
    const rand = arrOfNumbers[index];
    if (!answerNumbers.includes(rand)) {
      answerNumbers.push(rand);
    }
  }
  return answerNumbers;
};

const getCorrectAnswerIds = (answers) => {
  const rand = getRandomNumber(0, answers.length - 1);
  return answers[rand];
};

const getAnswers = async (gameMode, arrWithNumbers) => {
  const answers = [];
  await arrWithNumbers.forEach(async (number) => {
    await fetchNameFromAPI(gameMode, number).then((resp) => {
      answers.push(resp);
    });
  });
  return answers;
};

const generateQuestionForTheGameMode = async (gameMode) => {
  if (typeof gameMode !== 'string') {
    throw new Error('errrr');
  }

  const answerNumbers = generateAnswerNumbers(await getRangeOfIds(gameMode));

  const correctAnswerNumber = getCorrectAnswerIds(answerNumbers);

  const img = window.btoa(await fetchImgFromAPI(gameMode, correctAnswerNumber));

  return {
    image: img,
    answers: await getAnswers(gameMode, answerNumbers),
    rightAnswer: await fetchNameFromAPI(gameMode, correctAnswerNumber)
  };
};

export default generateQuestionForTheGameMode;
