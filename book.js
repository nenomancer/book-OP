export default function Book(title, author, totalPages, hasRead = false) {
  this.title = title;
  this.author = author;
  this.totalPages = totalPages;
  this.hasRead = hasRead;
  this.info = function () {
    return `${title} by ${author}, ${totalPages} pages, ${
      hasRead ? "has been read" : "not read yet"
    }`;
  };
}



