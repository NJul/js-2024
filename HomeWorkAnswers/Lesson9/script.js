/* Розширте код завдання з уроку 8, додавши наступні можливості */

const books = [
  { title: '1984', author: 'Джордж Орвелл', year: 1949, genre: 'Антиутопія' },
  {
    title: 'Гаррі Поттер і філософський камінь',
    author: 'Дж. К. Роулінг',
    year: 1997,
    genre: 'Фентезі'
  },
  {
    title: 'Гра престолів',
    author: 'Джордж Р. Р. Мартін',
    year: 1996,
    genre: 'Фентезі'
  },
  {
    title: 'Старий і море',
    author: 'Ернест Хемінгуей',
    year: 1952,
    genre: 'Пригодницький роман'
  },
  {
    title: 'Майстер і Маргарита',
    author: 'Михайло Булгаков',
    year: 1967,
    genre: 'Фантастика'
  },
  {
    title: 'Норвезький ліс',
    author: 'Муракамі Харукі',
    year: 1987,
    genre: 'Роман'
  },
  {
    title: 'Дюна',
    author: 'Френк Герберт',
    year: 1965,
    genre: 'Роман'
  }
];

const createBookListContainer = () => {
  const div = document.createElement('div');
  div.id = 'bookList';
  div.classList.add('bookList');
  document.body.appendChild(div);
};

createBookListContainer();

const createBookList = books =>
  books
    .map(
      ({ title, author, year, genre }) => `
    <div class="bookCard">
      <p class="bookTitle"><strong>Title:</strong> ${title}</p>
      <p class="bookAuthor"><strong>Author:</strong> ${author}</p>
      <p class="bookYear"><strong>Year:</strong> ${year}</p>
      <p class="bookGenre"><strong>Genre:</strong> ${genre}</p>
    </div>
  `
    )
    .join('');

const bookList = document.querySelector('#bookList');

bookList.innerHTML = createBookList(books);

/*
Розширте код завдання з уроку 8, додавши наступні можливості:

1. Створити функцію для додавання нової книги до масиву:

Функція повинна приймати параметри для створення нового об'єкта книги (назва, автор, рік видання, жанр) і додавати його до масиву books.
Після додавання нової книги, список книг на веб-сторінці повинен оновлюватися.

2. Створити функцію для редагування інформації про книгу:

Додайте можливість редагування існуючих книг за індексом або іншим унікальним ідентифікатором.
Вибрана книга повинна відображатися у формі, де користувач може змінити її дані.

3. Створити функцію для видалення книги з масиву:

Реалізуйте можливість видалення книги з масиву books.
Після видалення книги, список книг на веб-сторінці повинен оновлюватися.
Забезпечити динамічне оновлення списку книг на сторінці після кожної операції (додавання, редагування, видалення).
*/
