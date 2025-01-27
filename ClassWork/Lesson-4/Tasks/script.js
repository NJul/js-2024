/* Задача 1. Написати програму, яка генерує випадкове число від 1 до 100 і дозволяє користувачу вгадати число, надаючи підказки "більше" або "менше". Програма повинна продовжувати запитувати числа, доки він не відгадає правильне.

Кроки для виконання завдання:

1. Генерація випадкового числа: використайте Math.random() для генерації випадкового числа від 1 до 100. // let randomNumber = Math.floor() * 100) + 1
2. Введення користувачем числа: використайте prompt для запиту числа у користувача.
3. Перевірка введеного числа:
  1. Перевірте, чи введене число є коректним і чи відповідає випадковому числу.
  2. Використайе умовні конструкції для надання підказок "більше" або "менше".
4. Цикл для продовження запитів та вивід результатів:
  1. Використайте цикл while або do...while для продовження запитів, доки користувач не відгадає правильне число.
5. Виведення результату:
  1. Виведіть повідомлення про те, що користувач відгадав правильне число.
*/

/*
function getNumericValue(message) {
  while (true) {
    let value = prompt(message);
    let isValid = !isNaN(value) && value !== '' && value !== null;
    if (isValid) return Number(value);
  }
}

let randomNumber = Math.floor(Math.random() * 100) + 1;
// Клік на жовту кульку; More... Після того, як виділив потрібний блок коду

let gameIsOver = false;

// while (gameIsOver == false) {
// while (!gameIsOver) {
while (true) {
  let value = getNumericValue('Введіть значення');

  if (value == randomNumber) {
    alert('Ви вгадали. Загадане число ' + randomNumber);
    // gameIsOver = true;
    break;
  } else if (value > randomNumber) {
    alert('Я загадав значення менше ніж ' + value);
  } else if (value < randomNumber) {
    alert('Я загадав значення більше ніж ' + value);
  }
}
 */

/* Задача 2. Написати програму, яка визначає, чи є введений користувачем рядок паліндромом.

Кроки для виконання завдання:
1. Введення рядка: використайте prompt для введення рядка користувачем.

2. Перевірка на паліндром: перевірте, чи читається рядок однаково зліва направо і справа наліво, використовуючи цикл і умовні конструкції.

3. Виведення результату: використайте alert для виведення результату, чи є введений рядок паліндромом.
*/

/*
let initialValue = 'І розморозь зором зорі';
let value = initialValue.replace(/\s+/g, '').toLowerCase();
let len = value.length; // 22
let isPalindrome;

for (let i = 0; i < len / 2; i++) {
  if (value[i] !== value[len - 1 - i]) {
    // якщо елемент зліва не дорівнює такому самому елементу справа, то це не
    isPalindrome = false;
    break;
  }

  isPalindrome = true;
}

if (isPalindrome) {
  console.log('Значення ' + initialValue + ' є паліндромом');
} else {
  console.log('Значення ' + initialValue + ' НЕ є паліндромом');
}
 */

/* Задача 3. Написати програму, яка обчислює суму всіх чисел в діапазоні, заданому користувачем.

  Кроки для виконання завдання:
  1. Введення початку та кінця діапазону: використайте prompt для введення початку та кінця діапазону.
  2. Перетворення введених даних в числа: перетворіть введені значення з рядка на числа, використовуючи parseInt або Number.
  3. Перевірка введених даних: переконайтеся, що користувач ввів коректні числа і що початок діапазону менший або дорівнює кінцю діапазону.
  4. Обчислення суми чисел у діапазоні: використайте цикл for для обчислення суми всіх чисел у заданому діапазоні.
  5. Виведення результату.
*/

function getValue(message) {
  while (true) {
    let value = prompt(message);
    let isValid = !isNaN(value) && value !== '' && value !== null;
    if (isValid) return Number(value);
  }
}

let start = getValue('Введіть початок діапазону');
let end = getValue('Введіть кінець діапазону');

if (end < start) {
  alert('Кінець діапазону не може бути більшим за початок');
} else {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum = sum + i;
  }

  console.log(
    `Сума значень в діапазоні від ${start} до ${end} дорівнює ${sum}`
  );
}
