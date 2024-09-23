/* Додайте валідацію до форми з попереднього уроку яка додає та редагує книги */

function validateForm() {
  const form = document.getElementById('bookForm');
  let isValid = true;

  const title = form.title.value.trim();
  const author = form.author.value.trim();
  const year = form.year.value.trim();
  const genre = form.genre.value.trim();

  if (title === '') {
    alert('Title не може бути порожнім');
    isValid = false;
  }

  if (author === '') {
    alert('Author не може бути порожнім');
    isValid = false;
  }

  if (year === '' || isNaN(year) || year <= 0) {
    alert('Year має бути додатнім числом');
    isValid = false;
  }

  if (genre === '') {
    alert('Genre не може бути порожнім');
    isValid = false;
  }

  return isValid;
}

function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.add('show', 'added');

  setTimeout(() => {
    notification.classList.remove('show', 'added');
  }, 3000);
}

document.getElementById('bookForm').addEventListener('submit', function(event) {
  event.preventDefault();

  if (validateForm()) {
    showNotification('Книга успішно збережена');
  }
});

/*
Додайте валідацію до форми з попереднього уроку яка додає та редагує книги.

Виконайте наступні перевірки

1. Поле "Назва книги" (title)
Перевірка на порожнє значення: назва книги не повинна бути порожньою.
Перевірка на дублікати: перевірити, чи вже є така книга в масиві books.

2. Поле "Автор" (author)
Перевірка на порожнє значення: ім'я автора не повинно бути порожнім.

3. Поле "Рік видання" (year)
Перевірка на порожнє значення: рік повинен бути вказаний.
Перевірка на тип даних: це має бути число.
Перевірка на діапазон значень: рік не може бути меншим за 1450 (перші друковані книги) і більшим за поточний рік.

4. Поле "Жанр" (genre)
Перевірка на порожнє значення: жанр не повинен бути порожнім.
*/
