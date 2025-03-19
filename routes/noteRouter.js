const express = require('express'); // Import express
const router = express.Router(); // Create a Router
const controller = require('../controller/noteController'); // Import noteController    


router.get('/notes', controller.getAllNotes); // Get all notes


router.post('/notes/create', controller.createNote); // Create a note


router.get('/notes/:id', controller.getNote); // Get a note


router.put('/notes/update', controller.updateNote); // Update a note


router.delete('/notes/delete', controller.deleteNote); // Delete a note


module.exports = router; // Export the router