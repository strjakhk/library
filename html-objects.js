function HtmlBookCard(book){
    this.title = book.title;
    this.author = book.author;
    this.pages = book.pages;
    this.isRead = book.isRead;
    this.uuid = book.uuid;

    this.bookElement = document.createElement("div");
}

HtmlBookCard.prototype.setIdAttribute = function(){
    this.bookElement.setAttribute("data-id", this.uuid);
}

HtmlBookCard.prototype.addBookClass = function(){
    this.bookElement.classList.add("book")
}

HtmlBookCard.prototype.createElement = function(){
    this.setIdAttribute();
    this.addBookClass();
    this.bookElement.innerHTML = `
            <img class="cover-bg" src="./img/book-cover-texture-2.png" alt="${this.title}">
            <h2 class="book-title">${this.title}</h2>
            <p class="book-author">${this.author}</p>
            <p class="book-pages">${this.pages} pages</p>
            <button type="button" class="btn-book-delete">
                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
            <button type="button" class="btn-toggle-read">
                ${this.isRead ?
                    '<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 11.98C8.09 1.31996 15.91 1.32996 22 11.98" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 12.01C15.91 22.67 8.09 22.66 2 12.01" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>' :
                    '<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.83 9.17999C14.2706 8.61995 13.5576 8.23846 12.7813 8.08386C12.0049 7.92926 11.2002 8.00851 10.4689 8.31152C9.73758 8.61453 9.11264 9.12769 8.67316 9.78607C8.23367 10.4444 7.99938 11.2184 8 12.01C7.99916 13.0663 8.41619 14.08 9.16004 14.83" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 16.01C13.0609 16.01 14.0783 15.5886 14.8284 14.8384C15.5786 14.0883 16 13.0709 16 12.01" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.61 6.39004L6.38 17.62C4.6208 15.9966 3.14099 14.0944 2 11.99C6.71 3.76002 12.44 1.89004 17.61 6.39004Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.9994 3L17.6094 6.39" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.38 17.62L3 21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19.5695 8.42999C20.4801 9.55186 21.2931 10.7496 21.9995 12.01C17.9995 19.01 13.2695 21.4 8.76953 19.23" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'
                }
            </button>
        `;
}

HtmlBookCard.prototype.getBook = function(){
    return this.bookElement;
}



function HtmlAddBookForm(){
    this.addBookForm = document.createElement("div");
}

HtmlAddBookForm.prototype.createElement = function(){
    this.addBookForm.classList.add("form-add-book");
    this.addBookForm.innerHTML = `            
            <form name="addBookForm">
                <button type="button" class="btn-close-form">x</button>
                <img src="/img/paper.jpg" alt="paper">
                <div class="title">
                    <label for="book-title">Title:</label>
                    <input type="text" name="title" id="book-title" required>
                </div>
                <div class="author">
                    <label for="book-author">Author:</label>
                    <input type="text" name="author" id="book-author" required>
                </div>
                <div class="pages">
                    <label for="book-pages">Pages:</label>
                    <input type="tel" name="pages" id="book-pages" required>
                </div>
                <div class="form-add-button">
                    <button type="submit">Add</button>
                </div>
            </form>
        `;
}

HtmlAddBookForm.prototype.getForm = function(){
    return this.addBookForm;
}