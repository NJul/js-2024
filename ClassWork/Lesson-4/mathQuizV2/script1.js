/* A math quiz using eval */

let correctAnswers = 0;
let wrongAnswers = 0;
const attempts = 5;

for (let i = 0; i < attempts; i++) {
  let numberOne = Math.floor(Math.random() * 10) + 1;
  let numberTwo = Math.floor(Math.random() * 10) + 1;
  let operators = ['+', '-', '*', '/'];
  let operator = operators[Math.floor(Math.random() * operators.length)];

  let expression = `${numberOne} ${operator} ${numberTwo}`;
  let userAnswer = parseFloat(
    prompt(
      `Розв'яжіть: ${expression}
    При діленні враховуються 2 знаки після крапки`
    )
  );

  // let correctAnswer = eval(expression);

  let correctAnswer =
    operator === '/'
      ? parseFloat(eval(expression).toFixed(2))
      : eval(expression);

  if (userAnswer === correctAnswer) {
    correctAnswers++;
    alert('Правильно!');
  } else {
    wrongAnswers++;
    alert(`Неправильно! Правильна відповідь: ${correctAnswer}`);
  }
}

alert(
  `Гра завершена! Кількість правильних відповідей: ${correctAnswers}, кількість неправильних відповідей: ${wrongAnswers}`
);
