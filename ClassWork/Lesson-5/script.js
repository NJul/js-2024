// function hoisting
// printName('Nina');

function printName(name = 'default') {
  // function printName(name = 'default', count) {
  // if (name === undefined) name = 'default';
  // if(typeof(count) !== "number") console.log(1);

  console.log('Hello');
  console.log('My name is ' + name);
}

// printName('Nina');

// якщо ви забуваєте передати параметр у функцію, і у неї не було дефолтних значень, то значення параметру буде undefined
// printName();

// виклик функції повертає значення, його можна присвоїти змінній
// процедура, в JS її немає, це шмат коду, який нічого не повертає

let test = printName();
console.log(test); // undefined

function add(x, y) {
  let sum = x + y;
  return sum; // return - повертається в ту частину коду, де функція викликалася
  // console.log('123'); // не виведеться, бо після return
}

let res = add(10, 20);
console.log(res);

// функції конструктори необхідні для створення об'єктів

let myGlobal = 'This is global value'; // краще використовувати локальні змінні, щоб не виникало однакових імен змінних

// if (true) {
//   let a = 'local value';
//   console.log('first if statement');
//   console.log(myGlobal);
//   console.log(a);
// }

// if (true) {
//   console.log('second if statement');
//   console.log(myGlobal);
//   // console.log(a);
// }

// if (true) {
//   let a = 'local value';
//   console.log('3 if statement');
//   console.log(myGlobal);
//   console.log(a);

//   if (true) {
//     console.log('4 if statement nested if');
//     console.log(myGlobal);
//     console.log(a);
//   }
// }

function test1() {
  console.log('test1 ' + test1); // test1 undefined
  var local = 1;
  console.log(local); // 1
  // variable hoisting
  var test1 = 10;
  console.log('test1 ' + test1); // test1 10
}

test1();

// блочні області видимості
// змінні займають місце у пам'яті компьютера, тому необхідно їх видаляти
// змінна зберігається до наступної дужки }, створюється блок

// рекурсивна функція - коли функція викликає сама себе; stack overflow exeption - крашиться програма
function test3() {
  test3();
}
// test3(); // script.js:88 Uncaught RangeError: Maximum call stack size exceeded

let result;

// функція-оголошення
function add(a, b) {
  let temp = a + b;
  return temp;
}
result = add(1, 2);

// іменована функція-вираз
let add1 = function add(a, b) {
  return a + b;
};
result = add1(10, 20);

// функція-вираз або анонімна функція
let add2 = function (a, b) {
  return a + b;
};
result = add2(100, 200);

// стрілочна функція (arrow fucntion) *Лямбда-функція в інших мовах програмування*

let add3 = (a, b) => {
  return a + b;
};
result = add3(1000, 2000);

// стрілочна функція (arrow fucntion) без операторних дужок
let add4 = (a, b) => a + b;

result = add4(10000, 20000);

// розділяйте логіку і те, як ви відображаєте дані користувачу
// ця функція відповідає за відображення, ця функція відповідає за бізнес логіку
