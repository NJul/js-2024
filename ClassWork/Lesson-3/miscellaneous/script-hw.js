/* Lesson 3 Task 1 */

let value1 = prompt('Enter a number');
let number1 = parseInt(value1);
let isValueNaN = Number.isNaN(number1);

if (isValueNaN) {
  alert(`${value1} - error, not a number entered`);
} else if (number1 % 2 === 0) {
  alert(`${number1} - even number`);
} else {
  alert(`${number1} - odd number`);
}

/* Lesson 3 Task 2 Modified the function */
const dataOutput = document.getElementById('dataOutput');

function displayFormattedDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  // const weekDay = today.toLocaleString('en-us', { weekday: 'long' });
  const weekDayOption2 = today.getDay();
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const formattedDate = `${day} / ${month} / ${year}, ${dayNames[weekDayOption2]}`;

  dataOutput.textContent = formattedDate;
}

/* Lesson 3 Task 3 */

let valueYear = prompt('Enter a year');
let numberYear = Number(valueYear);

if (isNaN(numberYear) || numberYear <= 0) {
  alert('The entered value is not a valid year');
} else {
  if (
    (numberYear % 4 === 0 && numberYear % 100 !== 0) ||
    numberYear % 400 === 0
  ) {
    alert('The year is a leap year');
  } else {
    alert('The year is not a leap year');
  }
}

document.addEventListener('DOMContentLoaded', displayFormattedDate);

/* Завдання 1
Написати програму, яка визначає, чи є введене число парним або непарним.

Кроки для виконання завдання:

- Введення числа:
Використайте prompt для введення числа користувачем.

- Перетворення введених даних на число:
Перетворіть введене значення з рядка на число, використовуючи parseInt або Number.

- Перевірка введених даних:
Переконайтеся, що користувач ввів коректне число.

- Перевірка на парність:
Використайте оператор залишку від ділення (%), щоб визначити, чи є число парним або непарним.

- Виведення результату:
Використайте alert для виведення повідомлення про те, чи є число парним або непарним.

=================================================================

Завдання 2
Написати програму, яка визначає, який сьогодні день тижня, і виводить відповідне повідомлення.

Кроки для виконання завдання:

Отримання поточної дати:
- Використайте об'єкт Date для отримання поточної дати.

Визначення дня тижня:
- Використайте метод getDay() об'єкта Date для отримання дня тижня (0 для неділі, 1 для понеділка і т.д.).

Виведення результату:
- Використайте оператор if для визначення дня тижня і виведення відповідного повідомлення.

=================================================================

Завдання 3
Написати програму, яка перевіряє, чи є введений рік високосним.

Кроки для виконання завдання:

Введення року:
- Використайте prompt для введення року користувачем.

Перетворення введених даних на число:
- Перетворіть введене значення з рядка на число, використовуючи parseInt або Number.

Перевірка введених даних:
- Переконайтеся, що користувач ввів коректне число.

Перевірка на високосний рік:
- Використайте умовні оператори для перевірки, чи є рік високосним.

Виведення результату:
- Використайте alert для виведення результату. */
