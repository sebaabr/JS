//Book Class: represents a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI Class
class UI {
  static diplayBooks() {
    const StoresBooks = Store.getBooks();

    const books = StoresBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      //   console.log(el.closest("tr"));
      el.closest("tr").remove();
    }
  }

  static clearFilds() {
    document.querySelector("#title").value =
      document.querySelector("#author").value =
      document.querySelector("#isbn").value =
        "";
  }
  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    //vanish in 3 seconds
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
}

//Store Class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

//Events: display book
document.addEventListener("DOMContentLoaded", UI.diplayBooks);

//Events: add book
const test = document.querySelector("#book-form");
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  //Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  //Validate
  if (title === "" || author === "" || isbn === "") {
    // alert("Please fill in all filds");
    UI.showAlert("Please fill in all filds", "danger");
  } else {
    //Instatiate book
    const book = new Book(title, author, isbn);
    //   console.log(book);

    //Add book to UI
    UI.addBookToList(book);

    //Add book to store
    Store.addBook(book);

    //show success message
    UI.showAlert("Book added", "success");

    //clear filds
    UI.clearFilds();
  }
});

//Events: remove a book
document.querySelector("#book-list").addEventListener("click", (e) => {
  //remove from UI
  UI.deleteBook(e.target);

  //remove from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  UI.showAlert("Book removed", "success");
});
