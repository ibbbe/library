const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}


document.querySelector("#submit")
    .addEventListener('click', (event) => {
        event.preventDefault();
        addBookToLibrary();
        document.querySelector('form').reset();
    });

/*addBookToLibrary('The hobbit', 'J.R.R: Tolkien', 295, 'read');
addBookToLibrary('Hamlet', 'William Shakespeare', 143, 'read') */

function displayBooksInLibrary() {
    myLibrary.forEach((book) => console.log(book));
}
