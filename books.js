let myLibrary = [];

function Book(title, author, pages, isRead=false){
    if (!new.target) {
        throw Error("Calling the function without new operator is invalid");
    }    

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.uuid = crypto.randomUUID();    
}

Book.prototype.toggleReadStatus = function(){
    this.isRead = !this.isRead;
}

function findBookByID(uuid){
    return myLibrary.find(item => item.uuid === uuid);
}

function findBookByTitle(title){
    return myLibrary.find(item => item.title === title);
}

function addBookToLibrary(title, author, pages, isRead = false){
    const book = new Book(title, author, pages, isRead);

    let inLibrary = findBookByID(book.uuid) ||
                    findBookByTitle(book.title) ? 
                    true : false;

    if (!inLibrary){
        myLibrary.push(book);
    }
}

function removeBookFromLibrary(book){
    let i = myLibrary.findIndex(book);
    myLibrary.splice(i, 1);
}

addBookToLibrary("asd 1", "jp", 123);
addBookToLibrary("asd 2", "jp", 223);
addBookToLibrary("hk", "jp", 323);
addBookToLibrary("hc", "jp", 553);
addBookToLibrary("asd 1", "jp", 123);

myLibrary.forEach((book, i) => {
    console.log(book.title);
})