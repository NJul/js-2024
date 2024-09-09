// для простої сторінки не треба цього робити, вона повинна залишатися простою

// структура: треба розбити об'єкти на три групи: 1. об'єкти, які зберігають дані
// 2. об'єкти, з якими взаємодіє користувач, 3. об'єкти, які контролюють процес

// let shoppingCart = {};
// let shopDatabase = {};
// let uiController = {};
// mvc фреймворк: розмежування об'єктів по ролям
// модель let shopDatabase = {};, контроллер let shoppingCart = {};, вид view let uiController = {};

// треба перевіряти, чи коректні дані на вході в об'єкт, користуватися typescript
// об'єкт, який відповідає за те, що зберігається в нашому shoppingCart, підрахунок і зберігання кількості продуктів, бізнес логіка:
let shoppingCart = {
  cart: [],

  add(product, count) {
    this.cart.push({ product: product, count: count });
  },

  getTotalPrice() {
    let sum = 0;
    this.cart.forEach(item => (sum += item.product.price * item.count));
    return sum;
  }
};

let shopDatabase = {
  products: [
    { name: 'Папір офісний А4, 80 г/м2, 500 л', price: 280.25 },
    { name: 'Біндери для паперу 51 мм', price: 56 },
    { name: 'Ручка кулькова синя', price: 12.5 }
  ],

  add: function(name, price) {
    this.products.push({ name: name, price: price });
  },

  remove: function(name) {
    let product = this.products.filter(x => x.name == name)[0];
    let index = this.indexOf(product);
    this.products.splice(index, 1);
  }
};

let uiController = {
  display: function(message) {
    console.log(message);
  },

  promptNumber: function(message) {
    return +prompt(message);
  },

  // пройшлися по list, в результаті ми б отримали масив, що паперу треба 1 екз., ...
  // перетворити кожен елемент на щось нове
  promptByList: function(list, messageTemplateFn) {
    return list.map(element => this.promptNumber(messageTemplateFn(element)));
  },

  displayList: function(list, messageTemplateFn) {
    list.forEach(x => this.display(messageTemplateFn(x)));
  }
};

// uiController.displayList(
//   shopDatabase.products,
//   x => `${x.name} = ${x.price}грн`
// );

// let arr = uiController.promptByList(
//   shopDatabase.products,
//   x => `${x.name} = ${x.price}грн`
// );

// console.log(arr);

// app
// спочатку щоб користувач ввів дані
// бізнес логіка окремо, робота з ui окремо
// якщо все окремо, тоді ми можемо міняти інтерфейс, не ламаючи бізнес логіку
let productCount = uiController.promptByList(
  shopDatabase.products,
  x => `${x.name} = ${x.price} грн`
);

shopDatabase.products.forEach((p, index) => {
  shoppingCart.add(p, productCount[index]);
});

let total = shoppingCart.getTotalPrice();
console.log(total);

// Папір офісний А4, 80 г/м2, 500 л = 280.25 грн
// Біндери для паперу 51 мм = 56 грн
// Ручка кулькова синя = 12.5 грн

// масив із іменами продуктів
// let names = [];
// names[0] = "Папір офісний А4, 80 г/м2, 500 л";
// names[1] = "Біндери для паперу 51 мм";
// names[2] = "Ручка кулькова синя";

// масив із цінами продуктів
// let prices = [];
// prices[0] = 280.25;
// prices[1] = 56;
// prices[2] = 12.50;

// масив з кількістю продуктів, що купуються
// let products = [];

// цикл для отримання кількості продуктів, що купуються
// for (let index = 0; index < names.length; index++) {
//   const name = names[index];
//   const price = prices[index];

//   products[index] = +prompt(
//     `Вкажіть кількість продуктів '${name}', ціна ${price}`,
//     0
//   );
// }

// цикл для розрахунку загальної ціни куплених продуктів
// let totalPrice = 0;
// for (let index = 0; index < products.length; index++) {
//     totalPrice += prices[index] * products[index];
// }

// alert(`Сума Вашого замовлення ${totalPrice}.`);

// let isFreeShipping = totalPrice > 1000;
// if (isFreeShipping) // іноді в умові використовується лише одна змінна
// {
//     alert("Доставка буде безкоштовною.");
// }
