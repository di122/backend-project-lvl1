import { game, limitOfAnswers } from '../index.js';
import randomInteger from '../utils.js';

const task = 'What is the result of the expression?';

const collectGameData = () => {
  const gameData = [];
  for (let i = 0; i < limitOfAnswers; i += 1) {
    const number1 = randomInteger();
    const number2 = randomInteger();
    const operations = ['+', '-', '*'];
    const question = `${number1} ${operations[i]} ${number2}`;
    let rightAnswer;
    switch (operations[i]) {
      case '+':
        rightAnswer = number1 + number2;
        break;
      case '-':
        rightAnswer = number1 - number2;
        break;
      case '*':
        rightAnswer = number1 * number2;
        break;
      default:
        break;
    }
    gameData.push([question, rightAnswer.toString()]);
  }
  return gameData;
};

const startCalcGame = () => game(task, collectGameData);

export default startCalcGame;
