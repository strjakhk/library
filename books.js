function Book(title, author, pages, isRead=false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function(){
        return [`${this.title}`,
                `by ${this.author},`,
                `${this.pages} pages,`,
                `${this.isRead ? "read." : "not read yet."}`]
                .join(" ");
    }
}

const b1 = new Book("There is not final", "Strack Juan Pablo", "643", true);