/* A math quiz */

let correctAnswers = 0;
let wrongAnswers = 0;
const attempts = 5;

for (let i = 0; i < attempts; i++) {
  let numberOne = Math.floor(Math.random() * 10) + 1;
  let numberTwo = Math.floor(Math.random() * 10) + 1;
  let operators = ['+', '-', '*', '/'];
  let operator = operators[Math.floor(Math.random() * operators.length)];
  let expression = `${numberOne} ? ${numberTwo}`;
  let expressionDisplay =
    operator === '+' || operator === '-'
      ? `${numberOne} ${operator} ${numberTwo}`
      : expression;
  let userAnswer = parseFloat(
    prompt(
      `Розв'яжіть: ${expressionDisplay}
    ? = * або /
    При діленні враховуються 2 знаки після крапки`
    )
  );

  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = numberOne + numberTwo;
      break;
    case '-':
      correctAnswer = numberOne - numberTwo;
      break;
    case '*':
      correctAnswer = numberOne * numberTwo;
      break;
    case '/':
      correctAnswer = parseFloat((numberOne / numberTwo).toFixed(2));
      break;
  }

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

/* Завдання 1

Гра: "Камінь, ножиці, папір"

Опис гри:
Користувач грає проти комп'ютера в класичну гру "Камінь, ножиці, папір". Програма запитує вибір користувача, генерує випадковий вибір для комп'ютера, визначає переможця та виводить результат.

Кроки для виконання завдання:

1. Введення вибору користувача:
   - Використайте `prompt` для запиту вибору користувача (камінь, ножиці, папір).

2. Генерація вибору комп'ютера:
   - Використайте `Math.random()` для випадкового вибору між каменем, ножицями і папером.

3. Визначення переможця:
   - Використайте умовні конструкції для визначення переможця за правилами гри:
     - Камінь б'є ножиці.
     - Ножиці б'ють папір.
     - Папір б'є камінь.
     - Однакові вибори - нічия.

4. Виведення результату:
   - Використайте `alert` для виведення вибору користувача, вибору комп'ютера та результату гри.

Додаткові завдання:
1. Додати можливість гри кілька раундів з підрахунком загального рахунку.
2. Додати можливість користувачеві вийти з гри за допомогою спеціальної команди (наприклад, введення "вихід")
 */
