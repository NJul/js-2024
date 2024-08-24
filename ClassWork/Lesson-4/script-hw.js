/* Game: "Rock, Scissors, Paper" */

function getUserChoice() {
  const choices = ['камінь', 'ножиці', 'папір'];
  let userInput = prompt(
    'Введіть ваш вибір (камінь, ножиці, папір) або "вихід" для завершення гри:'
  ).toLowerCase();
  while (!choices.includes(userInput) && userInput !== 'вихід') {
    userInput = prompt(
      'Неправильний вибір. Введіть камінь, ножиці або папір, або "вихід" для завершення гри:'
    ).toLowerCase();
  }
  return userInput;
}

function getComputerChoice() {
  const choices = ['камінь', 'ножиці', 'папір'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'нічия';
  }
  if (
    (userChoice === 'камінь' && computerChoice === 'ножиці') ||
    (userChoice === 'ножиці' && computerChoice === 'папір') ||
    (userChoice === 'папір' && computerChoice === 'камінь')
  ) {
    return 'користувач';
  } else {
    return "комп'ютер";
  }
}

function playGame() {
  let userScore = 0;
  let computerScore = 0;
  let rounds = 0;

  while (true) {
    const userChoice = getUserChoice();
    if (userChoice === 'вихід') {
      alert(
        `Гра завершена. Загальний рахунок: користувач ${userScore} - комп'ютер ${computerScore}`
      );
      break;
    }

    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);

    if (winner === 'користувач') {
      userScore++;
    } else if (winner === "комп'ютер") {
      computerScore++;
    }

    rounds++;
    alert(
      `Результат раунду ${rounds}:\n Користувач обрав: ${userChoice}\n Комп'ютер обрав: ${computerChoice}\n Переможець: ${winner}\n\n Поточний рахунок:\n Користувач: ${userScore}\n Комп'ютер: ${computerScore}`
    );
  }
}

playGame();

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

=================================================================

Завдання 2

Гра: "Математичний квіз"

Опис гри:
Програма генерує випадкові математичні вирази (додавання, віднімання, множення, ділення) та запитує у користувача правильну відповідь. Користувач має обмежену кількість спроб, щоб дати правильну відповідь. Програма виводить кількість правильних та неправильних відповідей після завершення гри.

Кроки для виконання завдання:

1. Генерація математичних виразів:

	- Використайте Math.random() для генерації двох випадкових чисел і оператора (+, -, *, /).

2. Запит правильних відповідей:

	- Використайте prompt для запиту відповідей у користувача.

3 Перевірка відповідей:

	- Використайте умовні конструкції для перевірки правильності відповідей.

4 Підрахунок результатів:

	- Підрахуйте кількість правильних та неправильних відповідей.

5.Виведення результатів:

	- Використайте alert для виведення підсумкових результатів. */
