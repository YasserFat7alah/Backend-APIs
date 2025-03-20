const generator = require("../util/generator"); // Import the generator
const memStorage = require("../util/memory.storage"); // Import the storage
const model = require("../models/noteModel"); // Import the model

// Get all notes
exports.getAllNotes = (req, res) => {
  var values = memStorage.getValues(memStorage.store);

  if(values.length === 0) {
    res.status(404).send({error: "No notes found!"});
    return;
  }

    
  
  // Send the server response
  res.status(200).send(JSON.stringify(values));
  console.log('notes: ', values);
};

// Create a note
exports.createNote = (req, res) => {

  //variables intialization (required: title, content)
  var title = req.body.title; // Get the title from the request
  var content = req.body.content; // Get the content from the request
      // data validation
      if(!title || !content ) { // Check if the title and content are empty

        // Send the server response
        res.status(400).send("ERROR: Title and Content are required!");

        // Log the error
        console.log('================');
        console.log('ERROR: Title and Content are required!');
        console.log('title: ',title);
        console.log('content: ',content);
        return;
      }

  var seqID = generator.generate(); // Generate a new ID
  var author = "Yasser Fathallah"; // Get the author from the request  
  var dateOfCreation = Date.now().toLocaleString(); // Get the created date from the request
  var dateOfLastUpdate = Date.now().toLocaleString(); // Get the updated date from the request


  // new note creation
  var note = new model.Note(seqID, title, content, author, dateOfCreation, dateOfLastUpdate);
  memStorage.store.setItem(seqID, note);  // Store the note in the memory storage

  //server response
  res.status(201).send("SUCCESS: Note created!");
  console.log('Note created: ', note);

};

// Get a note // still in progress
exports.getNote = (req, res) => {
  res.send("GET NOTE");
   
};

// Update a note // still in progress
exports.updateNote = (req, res) => {
  res.send("UPDATE NOTE");

};

// Delete a note // still in progress
exports.deleteNote = (req, res) => {
  res.send("DELETE NOTE");
};
