const express = require('express'); // Import express
const router = express.Router(); // Create a Router
const controller = require('../controller/bookController'); // Import bookController    

/*  ---- ---- ---- ---- Routes ---- ---- ---- ----   */
    // create a book
    router.post('/books', controller.saveBook); 

    // Get all books available **TODO
    //router.get('/books', controller.getBookList); 

    // Delete a book **todo
   

    // Get a book **todo
     

/*  ---- ---- ---- ---- ---- ---- ---- ---- ----   */


module.exports = router; // Export the router