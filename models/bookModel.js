exports.Note = class Note {

    constructor( bookId, title, isbn, description, author, publisher, pageCount){
        this.bookId = bookId;
        this.title = title;
        this.isbn = isbn;
        this.description = description;
        this.author = author;
        this.publisher = publisher;
        this.pageCount = pageCount;
    }
}