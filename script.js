class User {
    constructor(name, email) {
        this.name = name;
        this.name = email;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        return this;
    }

    removeBooks(booksTitle) {
        this.books = this.books.filter(book => book.title !== booksTitle);
        return this;
    }

    listBooks() {
        return this.books;
    }
}

class Book{
    constructor(title, author, year, genre, read = false) {
         this.title = title;
         this.author = author;
         this.year = year;
         this.genre = genre;
         this.read = read;
    }

    markAsRead() {
        this.read  = true;
        return this;
    }
}

let registeredUsers = [];
let currentUser = null;

const registerUser = () => {
    
}