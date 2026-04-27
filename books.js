
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

    let inLibrary = findBookByID(book.uuid) || findBookByTitle(book.title);

    if (!inLibrary){
        myLibrary.push(book);
    }
}

addBookToLibrary("Pride and Prejudice", "Jane Austen", 123);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 223);
addBookToLibrary("Harry Potter 1", "J.K. Rowling", 323);

function listLibrary(){
    // get reference to gallery
    const galleryElement = document.querySelector(".gallery");

    // delete all child elements of the gallery  
    galleryElement.replaceChildren();

    // for each book in myLibrary, create a new Book card and add it
    // int the library element
    myLibrary.forEach((book) => {
        const bookElement = new HtmlBookCard(book);
        bookElement.createElement();
        galleryElement.appendChild(bookElement.getBook());
    });

    // last item in the gallery element is the "add" button
    const addBookBtn = document.createElement("button");
    addBookBtn.setAttribute("type", "button");
    addBookBtn.setAttribute("id", "btn-add-book");
    addBookBtn.textContent = "+";

    galleryElement.appendChild(addBookBtn);
}

// delete book by id
function deleteBook(id){
    let index = myLibrary.findIndex(book => book.uuid === id);
    myLibrary.splice(index, 1);
}

// toggle book visibility status
function toggleVisibility(id){
    const book = myLibrary.find(book => book.uuid === id);
    book.toggleReadStatus();
}

// Show form for adding a new Book Card
document.body.addEventListener("click", e => {
    if (e.target.closest("#btn-add-book")){
        const addBookForm = new HtmlAddBookForm();
        addBookForm.createElement();
        document.body.appendChild(addBookForm.getForm());
    }
});


// delete book event handler
document.body.addEventListener("click", e => {
    if (e.target.closest(".btn-book-delete")){
        const card = e.target.closest(".book");
        const id = card.dataset.id;
        deleteBook(id);
        listLibrary();
    }
})

// toggle view status event handler
document.body.addEventListener("click", e => {
    if (e.target.closest(".btn-toggle-read")){
        const card = e.target.closest(".book");
        const id = card.dataset.id;
        toggleVisibility(id);
        listLibrary();
    }
});

// submit event handler for all forms
document.body.addEventListener("submit", e => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    if (form.name === "addBookForm"){
        addBookToLibrary(
            data.get("title"),
            data.get("author"),
            data.get("pages")
        );
        form.parentElement.remove();
        listLibrary();
    }

});

listLibrary();