// масив із іменами продуктів
// let names = [];
// names[0] = "Папір офісний А4, 80 г/м2, 500 л";
// names[1] = "Біндери для паперу 51 мм";
// names[2] = "Ручка кулькова синя";

// // масив із цінами продуктів
// let prices = [];
// prices[0] = 280.25;
// prices[1] = 56;
// prices[2] = 12.50;

// // масив з кількістю продуктів, що купуються
// let products = [];

// цикл для отримання кількості продуктів, що купуються
// for (let index = 0; index < names.length; index++) {
//     const name = names[index];
//     const price = prices[index];

//     products[index] = +prompt(`Вкажіть кількість продуктів '${name}', ціна ${price}`, 0);
// }

// // цикл для розрахунку загальної ціни куплених продуктів
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
