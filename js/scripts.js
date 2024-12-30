class Book{
    constructor(name, author, pages, read){
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info(){
        const readStatus = this.read ? "has been read" : "not read yet"; 
        return `${this.name} by ${this.author}, ${this.pages} pages, ${this.readStatus}.`;
    }

    toggleRead(){
        this.read = !this.read;
    }
}

function addBookToLibrary(name, author, pages, read){
    const book = new Book(name, author, pages, read);
    myLibrary.push(book);
}

function populateLibraryTable(){
    const libraryTable = document.querySelector(".table-body");
    libraryTable.innerHTML = "";

    for(let i = 0; i < myLibrary.length; i++){
        const book = myLibrary[i];
        const isChecked = book.read ? "checked" : "";
        libraryTable.innerHTML +=
        `<tr>
            <td class='table-data'>${book.name}</td>
            <td class='table-data'>${book.author}</td>
            <td class='table-data'>${book.pages}</td>
            <td class='table-data'>${book.read} <input type='checkbox' id='toggle-read-${i}' ${isChecked}></td>
            <td><button class='btn-remove' id='btn-remove-${i}'>X</button></td>
        </tr>`
    }
    initToggleReadInputs();
    initRemoveButtons();
}

function initToggleReadInputs(){
    for(let i = 0; i < myLibrary.length; i++){
        const toggle = document.getElementById(`toggle-read-${i}`);
        toggle.addEventListener("change", () =>{
            myLibrary[i].toggleRead();
            populateLibraryTable();
        });
    }
}

function initRemoveButtons(){
    for(let i = 0; i < myLibrary.length; i++){
        const btn = document.getElementById(`btn-remove-${i}`);
        btn.addEventListener("click", () =>{
            myLibrary.splice(i, 1);
            populateLibraryTable();
        });
    }
}

// Initialize the library
const myLibrary = [];

// Populate the library with books
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, true);
addBookToLibrary("Moby-Dick", "Herman Melville", 635, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("War and Peace", "Leo Tolstoy", 1225, false);
addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 671, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 214, false);
addBookToLibrary("Brave New World", "Aldous Huxley", 268, true);
populateLibraryTable();

// Initialize buttons
const btnNewBook = document.querySelector(".btn-new-book")
btnNewBook.addEventListener("click", () =>{
    const bookForm = document.querySelector(".form-container");
    bookForm.innerHTML = `
    <div class='linput-container'>
        <label for='bname'>Name:</label>
        <input type='text' class='book-name'>
    </div>
    <div class='input-container'>
        <label for='bauthor'>Author:</label>
        <input type='text' class='book-author'>
    </div>
    <div class='input-container'>
        <label for='bpages'>Pages:</label>
        <input type='number' class='book-pages'>
    </div>
    <div class='input-container'>
        <label for='bread'>Read:</label>
        <input type='checkbox' class='book-read'>
    </div>
    <div class='input-container'>
        <button class='btn-submit'>Submit</button>
    </div>
    `;

    const btnSubmit = document.querySelector(".btn-submit");
    btnSubmit.addEventListener("click", () =>{
        const bName = document.querySelector(".book-name").value;
        const bAuthor = document.querySelector(".book-author").value;
        const bPages = document.querySelector(".book-pages").value;
        const bRead = document.querySelector(".book-read").checked;
        addBookToLibrary(bName, bAuthor, bPages, bRead);

        // Remove the form upon completion
        bookForm.innerHTML = "";

        populateLibraryTable();
    });
});

