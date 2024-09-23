let myDiv = document.getElementById('myDiv');

// myDiv.style.color = 'yellow';
// myDiv.style.backgroundColor = 'green';
// myDiv.style.padding = '10px';

// myDiv.classList.add('myClass');

// Подія - це сигнал, який повідомляє про наступ певного стану деякого об'єкта.
// - кнопка натиснута
// - курсор увійшов до області елемента
// - на клавіатурі натиснута клавіша

// Обробник події - функція, яка запускається у разі виникнення події.

function changeColor() {
  myDiv.classList.add('myClass');
}

// myDiv.onclick = changeColor;
myDiv.addEventListener('click', changeColor);

// myDiv.removeEventListener('click', changeColor);
