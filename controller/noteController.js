const generator = require('../Util/generator'); // Import the generator



exports.getAllNotes = (req, res) => {
    var seqID = generator.generate(); // Generate a new ID
    res.send('GET ALL NOTES ' + seqID);
};

exports.createNote = (req, res) => { 
    res.send('CREATE NOTE');
};

exports.getNote = (req, res) => {
    res.send('GET NOTE');
};

exports.updateNote = (req, res) => {    
    res.send('UPDATE NOTE');
};

exports.deleteNote = (req, res) => {
    res.send('DELETE NOTE');
};

