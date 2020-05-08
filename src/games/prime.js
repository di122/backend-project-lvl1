import { game, limitOfAnswers } from '../index.js';
import randomInteger from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return true;
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const collectGameData = () => {
  const gameData = [];
  for (let i = 0; i < limitOfAnswers; i += 1) {
    const question = randomInteger();
    const rightAnswer = isPrime(question) ? 'yes' : 'no';
    gameData.push([question, rightAnswer]);
  }
  return gameData;
};

const startPrimeGame = () => game(task, collectGameData);

export default startPrimeGame;
