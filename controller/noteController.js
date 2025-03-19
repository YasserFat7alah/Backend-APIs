const generator = require("../util/generator"); // Import the generator
const memStorage = require("../util/memory.storage"); // Import the storage

// Get all notes
exports.getAllNotes = (req, res) => {
  var seqID = generator.generate(); // Generate a new ID 1
  memStorage.store.setItem(seqID, "New Note 1"); // Store the note

  var seqID = generator.generate(); // Generate a new ID 2
  memStorage.store.setItem(seqID, "New Note 2"); // Store the note

  var keys = memStorage.getKeys(memStorage.store);
  var values = memStorage.getValues(memStorage.store);

    console.log('Values: ', values);
    console.log('Keys: ', keys);
  res.send(
    "GET ALL NOTES KEY " +
      JSON.stringify(keys) +
      "... VALUE " +
      JSON.stringify(values)
  );
};

// Create a note
exports.createNote = (req, res) => {
  res.send("CREATE NOTE");
};

// Get a note
exports.getNote = (req, res) => {
  res.send("GET NOTE");
};

// Update a note
exports.updateNote = (req, res) => {
  res.send("UPDATE NOTE");
};

// Delete a note
exports.deleteNote = (req, res) => {
  res.send("DELETE NOTE");
};
