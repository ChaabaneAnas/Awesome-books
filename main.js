/* eslint-disable max-classes-per-file */

const Form = document.querySelector('#form');
const booklist = document.querySelector('.bookList');

class Book {
  constructor(Title, Author) {
    this.title = Title;
    this.author = Author;
  }
}

class store {
  static getbook() {
    let booksCollection;
    if (localStorage.getItem('booksCollection') === null) {
      booksCollection = [];
    } else {
      booksCollection = JSON.parse(localStorage.getItem('booksCollection'));
    }
    return booksCollection;
  }

  static setbook(book) {
    const booksCollection = store.getbook();
    booksCollection.push(book);
    localStorage.setItem('booksCollection', JSON.stringify(booksCollection));
  }

  static deletebook(title) {
    const booksCollection = store.getbook();
    booksCollection.splice(title, 1);
    localStorage.setItem('booksCollection', JSON.stringify(booksCollection));
  }
}

class ui {
  static displayBooksCollection() {
    booklist.innerHTML = ``;
    const booksCollection = store.getbook();
    booksCollection.forEach((book) => {
      const bookFrame = document.createElement('div');
      bookFrame.classList.add('bookFrame');
      bookFrame.innerHTML = `
      <div class = "bookContent">
     <p class="bookTitle"><b>${book.title}</b></p>
        <p>by<span></span><b>${book.author}.</b></p>
        </div>
        <button class="removeBtn">Remove</button>
        `;
      booklist.appendChild(bookFrame);
    });
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

document.addEventListener('DOMContentLoaded', ui.displayBooksCollection);
Form.addEventListener('submit', (e) => {
  e.preventDefault();
  const Title = document.querySelector('#title').value;
  const Author = document.querySelector('#author').value;
  const book = new Book(Title, Author);
  store.setbook(book);
  ui.displayBooksCollection()
  ui.clearFields();
});

document.querySelector('.bookList').addEventListener('click', (e) => {
  store.deletebook(
    e.target.previousElementSibling.firstElementChild.textContent,
  );
  ui.displayBooksCollection()
});
