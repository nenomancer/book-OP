let myLibrary = [];

function Book(author, title, pages, isRead) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = false;
  this.info = function () {
    return `${title} by ${author}, ${pages}, ${
      isRead ? "is read" : "not read yet"
    }`;
  };
}

function addBookToLibrary() {}

const LotR = new Book('J.R.R. Tolkien', 'Lord of the Rings', '369', true);

console.log(LotR.info());