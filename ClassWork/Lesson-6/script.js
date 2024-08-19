// let array = []; // пустий масив
// let cities = ['London', 'Paris', 'Berlin', 'Rome'];
// cities[1] = 'ABC';
// let value = cities[3]; // Rome
// console.log(cities); // (4) ['London', 'ABC', 'Berlin', 'Rome']

/*
for (let index = 0; index < cities.length; index++) {
  // console.log(cities[index]);
  const current = cities[index];
  console.log(current);
}
  */

/*

for (const key in object) {}

*/

/*
for (const prop in cities) {
  // console.log(prop);
  // читаю по цим індексам значення:
  console.log(cities[prop]);
}
  */

// iterator generators yield - просунуті колекції. Задача циклу for of взяти об'єкт і витягти з нього всі послідовно значення.
/* for (const element of object) {
  console.log(element);
} */

/*
for (const city of cities) {
  console.log(city);
}
  */

/* Задача 1. Напиши сценарій, який знайде мінімальне, максимальне значення масиву, а також виведе суму всіх елементів масиву на екран */

// let values = [10, 20, 4, 6, 11, 9, 125, 1, -8, 0, 3];

/* Щоб не змінювала значення не в функції, щоб можна було вирізати функцію і вставити її в інше місце і вона норм працювала */
/*

function min(array) {
  let min = Number.MAX_VALUE;

  for (const value of array) {
    if (value < min) {
      min = value;
    }
  }

  return min;
}

*/

/*
function min(array) {
  return Math.min(...array);
}

function max(array) {
  return Math.max(...array);
}

function sum(array) {
  let sum = 0;
  for (const value of array) {
    sum += value;
  }
  return sum;
}

const m = min(values);
console.log(m);

console.log(max(values));
console.log(sum(values));
*/

/* Задача 2. Напишіть сценарій, який знайде в масиві всі від'ємні значення та замініть їх на значення 0. Після цього виведіть всі значення масиву. */

let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];

for (let i = 0; i < values.length; i++) {
  if (values[i] < 0) values[i] = 0;
}

/*
function callback(value, index) {
  console.log(`index ${index} = ${value}`);
}

values.forEach(callback);
*/

// values.forEach((value, index) => console.log(`index ${index} = ${value}`));

/*  Чим лінійніше ваш код, тим краще, менше розгалуджень, циклів в циклах і т.д., з однією табуляцією щоб все було, в ідеальному світі */

/* Задача 3. Написати програму, яка генерує випадкове число від 1 до 100 і дозволяє користувачу вгадати число, надаючи підказки "більше" або "менше". Програма повинна продовжувати запитувати числа, доки він не відгадає правильне. Коли користувач відгадає число, програма повинна вивести на екран усі значення, які були введені.

Кроки для виконання завдання:

1. Генерація випадкового числа: використайте Math.random() для генерації випадкового числа від 1 до 100. // let randomNumber = Math.floor() * 100) + 1
2. Введення користувачем числа: використайте prompt для запиту числа у користувача.
3. Перевірка введеного числа:
  1. Перевірте, чи введене число є коректним і чи відповідає випадковому числу.
  2. Збережіть введене число до масиву.
  3. Використайе умовні конструкції для надання підказок "більше" або "менше".
4. Цикл для продовження запитів та вивід результатів:
  1. Використайте цикл while або do...while для продовження запитів, доки користувач не відгадає правильне число.
*/

function getNumericValue(message) {
  while (true) {
    let value = prompt(message);
    let isValid = !isNaN(value) && value !== '' && value !== null;
    if (isValid) return Number(value);
  }
}

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = [];
let index = 0;
// Ctrl + D Ctrl + S

console.log(randomNumber);

while (true) {
  // let value = Number(prompt('Введіть значення'));
  let value = getNumericValue('Введіть значення');
  // attempts[index++] = value;
  attempts.push(value);
  console.log(attempts);

  if (value == randomNumber) {
    alert('Ви вгадали. Загадане число ' + randomNumber);
    break;
  } else if (value > randomNumber) {
    alert('Я загадав значення менше ніж ' + value);
  } else if (value < randomNumber) {
    alert('Я загадав значення більше ніж ' + value);
  }
}

console.log('Ви зробили ' + attempts.length + ' спроб');
attempts.forEach((x) => console.log(x));

/* Array Methods */

/* Filter Method */
const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter((score) => {
//   return score > 20;
// });

// console.log(scores);
// console.log(filteredScores);

/*
const users = [
  { name: 'shaun', premium: true },
  { name: 'yoshi', premium: false },
  { name: 'mario', premium: false },
  { name: 'chun-li', premium: true },
];

const premiumUsers = users.filter((user) => {
  return user.premium;
});

console.log(premiumUsers);
*/
