
const dbConnection = require('../db/connection')
const queries = require('../db/queries')

// save a new book function
exports.saveBook = async (req, res) =>{
    try {
        var title = req.body.title;
        var description = req.body.description;
        var author = req.body.author;
        var publisher = req.body.publisher;
        var pageCount = req.body.pageCount;
        var storeCode = req.body.storeCode;
    
        if(!title || !description || !author || !publisher || !pageCount || !storeCode){
            console.log("title: ", title);
            console.log("description: ", description);
            console.log("author: ",author);
            console.log("publisher: ",publisher);
            console.log("pageCount: ",pageCount);
            console.log("storeCode: ",storeCode);
            return res.status(400).send({error: "title, description, author, publisher, page count, and store code are required!"})
        }
    
        var createdBy = "Yasser Fathallah";
        var createdOn = new Date();
    
        values = [title, description, author, publisher, pageCount, storeCode, createdBy, createdOn];
    
        var saveBookQuery = queries.queryList.SAVE_BOOK_QUERY;
        await dbConnection.dbQuery(saveBookQuery, values);
    
        return res.status(201).send("Success! Book Saved");
    } 
    catch (err) {
        console.log("ERROR! : ", err);
        return res.status(500).send({error: "Couldn't save the book!"});
        
    }
   
};

// view all books function