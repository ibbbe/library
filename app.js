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
     console.log(read);
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooksInLibrary();
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
    const { title, author, pages, isRead } =
        myLibrary[myLibrary.length - 1];

    const tbody = document.querySelector("tbody");

    const tDTitle = document.createElement('td');
    tDTitle.classList.add((myLibrary.length - 1));
    tDTitle.textContent = title;
    tbody.appendChild(tDTitle);

    const tDAuthor = document.createElement('td');
    tDAuthor.classList.add(myLibrary.length - 1);
    tDAuthor.textContent = author;
    tbody.appendChild(tDAuthor);

    const tDPages = document.createElement('td');
    tDPages.classList.add(myLibrary.length - 1);
    tDPages.textContent = pages;
    tbody.appendChild(tDPages);

    const tDRead = document.createElement('td');
    tDRead.classList.add(myLibrary.length - 1);
    tDRead.textContent = isRead;
    tbody.appendChild(tDRead);

    const tdRemoveBook = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.classList.add(myLibrary.length - 1);
    removeButton.classList.add('removeButton')
    removeButton.textContent = 'Remove book';
    tbody.appendChild(removeButton);

    document.querySelector('.removeButton')
    .addEventListener('click', (event) => {
        const table = document.querySelector('#books');
        table.removeChild(tbody);
        //event.preventDefault();
    })
}
