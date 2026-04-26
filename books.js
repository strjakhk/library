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

addBookToLibrary("Pride and Prejudice", "Jane Austen", 123);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 223);
addBookToLibrary("Harry Potter 1", "J.K. Rowling", 323);


function listLibrary(){
    const galleryElement = document.querySelector(".gallery");
    galleryElement.replaceChildren();
    myLibrary.forEach((book) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
            <img class="cover-bg" src="./img/book-cover-texture-2.png" alt="${book.title}">
            <h2 class="book-title">${book.title}</h2>
            <p class="book-author">${book.author}</p>
            <p class="book-pages">${book.pages} pages</p>
            <button type="button" class="book-delete">
                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
            <button type="button" class="book-read-mark">
                ${book.isRead ?
                    '<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 11.98C8.09 1.31996 15.91 1.32996 22 11.98" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 12.01C15.91 22.67 8.09 22.66 2 12.01" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>' :
                    '<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.83 9.17999C14.2706 8.61995 13.5576 8.23846 12.7813 8.08386C12.0049 7.92926 11.2002 8.00851 10.4689 8.31152C9.73758 8.61453 9.11264 9.12769 8.67316 9.78607C8.23367 10.4444 7.99938 11.2184 8 12.01C7.99916 13.0663 8.41619 14.08 9.16004 14.83" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 16.01C13.0609 16.01 14.0783 15.5886 14.8284 14.8384C15.5786 14.0883 16 13.0709 16 12.01" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.61 6.39004L6.38 17.62C4.6208 15.9966 3.14099 14.0944 2 11.99C6.71 3.76002 12.44 1.89004 17.61 6.39004Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.9994 3L17.6094 6.39" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.38 17.62L3 21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19.5695 8.42999C20.4801 9.55186 21.2931 10.7496 21.9995 12.01C17.9995 19.01 13.2695 21.4 8.76953 19.23" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'
                }
            </button>
        `;
        galleryElement.appendChild(bookElement);
    });
}

function getBookIndexByTitle(title){
    return myLibrary.findIndex(book => {
            return book.title === title;
            });
}

// delete book event handler
document.querySelector(".gallery").addEventListener("click", e => {
    const deleteBtn = e.target.closest(".book-delete");
    if (deleteBtn){
        const bookTitle = deleteBtn
                            .parentElement
                            .querySelector("h2").innerText;

        const index = getBookIndexByTitle(bookTitle);
        myLibrary.splice(index, 1);
        listLibrary();
    }
})

// toggle visibility event handler
document.querySelector(".gallery").addEventListener("click", e => {
    const visibilityBtn = e.target.closest(".book-read-mark");
    if (visibilityBtn){
        const bookTitle = visibilityBtn
                            .parentElement
                            .querySelector("h2").innerText;

        
        const book = myLibrary.find((book) => book.title === bookTitle);
        book.toggleReadStatus();
        listLibrary();
    }
});

listLibrary();

// implementar función para agregar nuevos libros al a biblioteca.