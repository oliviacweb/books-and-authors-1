var Book = require('./book.js');

class Author {
  constructor({first, last}) {
     this.first = first;
     this.last = last;
     this.books = [];
  }
 write(title, publicationYear) {
   var book = new Book(this.first, this.last, title, publicationYear);
   this.books.push(book);
   return book;

 }
}

module.exports = Author;
