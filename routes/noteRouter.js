const express = require('express'); // Import express
const router = express.Router(); // Create a Router
const controller = require('../controller/noteController'); // Import noteController    

/*  ---- ---- ---- ---- Routes ---- ---- ---- ----   */
    // Create a note
    router.post('/notes', controller.createNote); 

    // Update a note
    router.put('/notes', controller.updateNote); 

    // Delete a note
    router.delete('/notes/:id', controller.deleteNote); 

    // Get a note
    router.get('/notes/:id', controller.getNote); 

    // Get all notes
    router.get('/notes', controller.getAllNotes); 
/*  ---- ---- ---- ---- ---- ---- ---- ---- ----   */


module.exports = router; // Export the router