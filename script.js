/* eslint-disable */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
/* eslint-enable */
class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: 'Book One',
        author: 'Amaka',
      },
      {
        title: 'Book Two',
        author: 'Aman',
      },
    ];

    const books = storedBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
    <div class="remove-tables">
    <td>${book.title}</td>
    <td>${book.author}</td>
    </div>
    <button><a href="#" class="remove-btn">Remove</button>
    `;

    list.appendChild(row);
    localStorage.setItem('bookList', JSON.stringify(book));
  }

  static deleteBook(ell) {
    if (ell.classList.contains('remove-btn')) {
      ell.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  static getBooks() {
    const storage = JSON.parse(localStorage.getItem('bookList')) || [];
    return storage;
  }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// add books

document.querySelector('#book-form').addEventListener('submit', (e) => {
  // prevent actual submit
  e.preventDefault();
  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // instatiate book
  const book = new Book(title, author);

  // add book to list
  UI.addBookToList(book);

  // clear fields
  UI.clearFields();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});