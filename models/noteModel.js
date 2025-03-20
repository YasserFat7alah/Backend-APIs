exports.Note = class Note {

     constructor(id, title, content, author,
                            dateOfCreation, dateOfLastUpdate) {
        
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.dateOfCreation = dateOfCreation;
        this.dateOfLastUpdate = dateOfLastUpdate;
  }
};
