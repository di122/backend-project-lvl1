import { game, limitOfAnswers } from '../index.js';
import randomInteger from '../utils.js';

const task = 'What number is missing in the progression?';

const collectGameData = () => {
  const gameData = [];
  for (let i = 0; i < limitOfAnswers; i += 1) {
    const progression = [];
    const firstProgressionNumber = randomInteger();
    const difference = randomInteger();
    const progressionSize = 9;
    const huddenNumberIndex = randomInteger(0, progressionSize - 1);
    for (let j = 0; j < progressionSize; j += 1) {
      progression[j] = firstProgressionNumber + difference * j;
    }
    const answer = progression[huddenNumberIndex];
    progression[huddenNumberIndex] = '..';
    const question = progression.join(' ');
    gameData.push([question, answer.toString()]);
  }
  return gameData;
};

const startProgressionGame = () => game(task, collectGameData);

export default startProgressionGame;
