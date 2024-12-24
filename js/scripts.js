function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        const readStatus = this.read ? "has been read" : "not read yet"; 
        return `${name} by ${author}, ${pages} pages, ${readStatus}.`;
    }
}

function addBookToLibrary(name, author, pages, read){
    const book = new Book(name, author, pages, read);
    myLibrary.push(book);
}

function populateLibraryTable(){
    const libraryTable = document.querySelector(".table-body");
    for(let i = 0; i < myLibrary.length; i++){
        const book = myLibrary[i];
        libraryTable.innerHTML +=
        `<tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.read}</td>
        </tr>`
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

