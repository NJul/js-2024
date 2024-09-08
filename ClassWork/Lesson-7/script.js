// Функція, яка лежить всередині об'єкту, називається методом
// В кожній функції є ключове слово THIS, яке по різному працює, і називається контекст, в залежності від того, де функція знаходиться, цей об'єкт буде відрізнятися
// Контекст, це посилання на якийсь об'єкт, контекст буде дорівнювати об
/*  Приберіть дублювання коду, щоб функція була чистою функцією, одна функція щоб займалася однією дією, бо тоді цю функцїю можна використовувати повторно в різних частинах коду.
 */

let product1 = {
  name: 'Phone', // властивість
  price: 10000,
  displayInfo: display
};

// 1-й спосіб створення об'єкту

// let product1 = {
//   name: 'Phone', // властивість
//   price: 10000,
//   displayInfo: function () {
//     console.log(this.name);
//     console.log(this.price);
//   }, // метод, який належить об'єкту product1
// };

// let product2 = {
//   name: 'Laptop', // властивість
//   price: 50000,
//   displayInfo: function () {
//     console.log(this.name);
//     console.log(this.price);
//   }, // метод
// };

let product2 = {}; // 2-й спосіб створення об'єкту
product2.name = 'Laptop';
product2.price = 50000;
// product2.displayInfo = function () {
//   console.log(this.name);
//   console.log(this.price);
// };
product2.displayInfo = display;

function display() {
  console.log(this.name);
  console.log(this.price);
}

// product1.displayInfo();
// product2.displayInfo();

// console.log(product1.name);
// console.log(product1.price);
// console.log(product2.name);
// console.log(product2.price);

let product3 = new Object(); // 3-й спосіб створення об'єкту

// console.log(product1); // {name: 'Phone', price: 10000}
// console.log(product2); // {name: 'Laptop', price: 50000}
// console.log(product2.id); // undefined
// console.log(product2); // {name: 'Laptop', price: 50000}

// display.apply({ name: 'a', price: 1 }); // функція, ти будеш застосована на об'єкті, який я на льоту створив, відповідно, ця функція виконується в контексті цього об'єкту // applay, call, bind - ці методи також можуть змінювати контекст об'єкту

// () => {
//   this;
// }; // якщо таку функцію віддасти в другий обєкт, контекст цієї функції не змінеться

// Щоб створити тисячу продуктів, можна запустити цикл, прокидати сюди три значення, в мене буде створюватися 1000 продуктів

let products = [
  createProduct(1, 'Phone', 10000),
  createProduct(2, 'Laptop', 50000)
];

// фабрична функція
function createProduct(id, name, price) {
  let product = {};

  product.id = id;
  product.name = name;
  product.price = price;
  // product.displayInfo = display;
  product.displayInfo = function() {
    console.log(this.name);
    console.log(this.price);
  };

  return product;
}

let product4 = createProduct(4, 'Phone4', 14000);
let product5 = createProduct(5, 'Laptop5', 55000);

console.log(product4);
console.log(product5); // {id: 5, name: 'Laptop5', price: 55000, displayInfo: ƒ}

product4.displayInfo();
product5.displayInfo();

// заповнює екземпляри даними
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  // 1 прототип функції для інших створених з цього класу об'єктів, product6, product7 ... можемо т.ч. зберегти пам'ять
  displayInfo() {
    console.log(this.name);
    console.log(this.price);
  }
}

let product6 = new Product(6, 'Phone6', 6000);
let product7 = new Product(7, 'Phone7', 7000);
