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

const myLibrary = [];

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, false);
console.log(myLibrary[0].info());
