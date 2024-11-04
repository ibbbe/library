const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read  = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary('The hobbit', 'J.R.R: Tolkien', 295, 'read many times');
addBookToLibrary('Hamlet', 'William Shakespeare', 143, 'once read')

function displayBooksInLibrary() {
    myLibrary.forEach((book) => console.log(book));
}

displayBooksInLibrary();