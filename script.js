/* eslint-disable no-unused-vars */
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addButton = document.querySelector('.add-btn');
const bookList = document.querySelector('.books');

let bookArray = [];

function allBooks() {
  addButton.addEventListener('click', () => {
    bookList.innerHTML = '';
    for (let i = 0; i < bookArray.length; i += 1) {
      bookList.innerHTML += `
    <div class="book">
    <p class="title">${bookArray[i].title}</p>
    <p class="author">${bookArray[i].author}</p>
    <button class="remove" onclick="removeBook(${i})">Remove</button><hr>
    </div>
    `;
      title.value = '';
      author.value = '';
    }
  });
}

addButton.addEventListener('click', () => {
  const book = { title: title.value, author: author.value };
  bookArray.push(book);
  allBooks();
  localStorage.setItem('allBooks', JSON.stringify(bookArray));
});

window.onload = () => {
  if (localStorage.getItem('allBooks')) {
    bookArray = JSON.parse(localStorage.getItem('allBooks'));
  }
  allBooks();
};

function removeBook(item) {
  bookArray.splice(item, 1);
  allBooks();
  localStorage.setItem('allBooks', JSON.stringify(bookArray));
}
