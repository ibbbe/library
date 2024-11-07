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
    displayBooksInLibrary();
}

document.querySelector("#submit")
    .addEventListener('click', (event) => {
        event.preventDefault();
        addBookToLibrary();
        document.querySelector('form').reset();
    });

function displayBooksInLibrary() {
    const { title, author, pages, read } =
        myLibrary[myLibrary.length - 1];

    const tbody = document.querySelector("tbody");
    const tableRow = document.createElement('tr');

    const tDTitle = document.createElement('td');
    tDTitle.textContent = title;
    tableRow.appendChild(tDTitle);

    const tDAuthor = document.createElement('td');
    tDAuthor.textContent = author;
    tableRow.appendChild(tDAuthor);

    const tDPages = document.createElement('td');
    tDPages.textContent = pages;
    tableRow.appendChild(tDPages);

    const tDRead = document.createElement('td');
    const check = document.createElement('INPUT');
    check.setAttribute('type', 'checkbox');
    tDRead.appendChild(check);
    if (read === false) {
        check.checked = false;
    } else {
        check.checked = true;
    }
    tableRow.appendChild(tDRead);

    const tdRemoveBook = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.classList.add(myLibrary.length - 1);
    removeButton.classList.add('removeButton')
    removeButton.textContent = 'Remove book';
    tableRow.appendChild(removeButton);

    tbody.appendChild(tableRow);


    removeButton.addEventListener('click', (event) => {
        const table = document.querySelector('#books');
        tbody.removeChild(tableRow);
    })
}
