import Book from "./book.js";


let myLibrary = [];

const bookList = document.querySelector("[data-booklist]")

const newBookForm = document.querySelector("[data-new-book-form]");
newBookForm.addEventListener("click", () => {
  openNewBookForm();
});

const openNewBookForm = () => {
  console.log("BOOK ADDED");
  
};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
myLibrary.push(theHobbit);


console.log(theHobbit.info());