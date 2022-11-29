/* eslint-disable no-unused-vars */
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addButton = document.querySelector('.add-btn');
const bookList = document.querySelector('.books');

let bookArray = [];

class book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class UI{
  static allBooks() {
  addButton.addEventListener('click', () => {
    bookList.innerHTML = '';
    for (let i = 0; i < bookArray.length; i += 1) {
      bookList.innerHTML += `
    <div class="book">
    <p class="title">${bookArray[i].title}</p>
    <p class="author">${bookArray[i].author}</p>
    <button class="remove" onclick="UI.removeBook(${i})">Remove</button><hr>
    </div>
    `;
      title.value = '';
      author.value = '';
    }
  });
}
  static removeBook(item) {
    bookArray.splice(item, 1);
    UI.allBooks();
    localStorage.setItem('allBooks', JSON.stringify(bookArray));
  }

}

addButton.addEventListener('click', () => {
  const newBook = new book(title.value, author.value);
  bookArray.push(newBook);
  UI.allBooks();
  localStorage.setItem('allBooks', JSON.stringify(bookArray));
});

window.onload = () => {
  if (localStorage.getItem('allBooks')) {
    bookArray = JSON.parse(localStorage.getItem('allBooks'));
  }
  UI.allBooks();
};


