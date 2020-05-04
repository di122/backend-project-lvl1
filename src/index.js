import readlineSync from 'readline-sync';

const limitOfAnswers = 3;

const game = (task, collectGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${task}`);
  for (let i = 0; i < limitOfAnswers; i += 1) {
    const gameData = collectGameData();
    const [question, rightAnswer] = gameData[i];
    console.log(`Question: ${question}`);
    const userRespond = readlineSync.question('Your answer: ');

    if (rightAnswer !== userRespond) {
      console.log(`'${userRespond}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export { game, limitOfAnswers };
