const express = require('express'); // Import express
const router = express.Router(); // Create a Router
const controller = require('../controller/storeController'); // Import storeController    

/*  ---- ---- ---- ---- Routes ---- ---- ---- ----   */
    // Get all stores available
    router.get('/stores', controller.getStoreList); 

    // create a store
    router.post('/stores', controller.createStore); 

    // Delete a store **todo
   

    // Get a store **todo
     

/*  ---- ---- ---- ---- ---- ---- ---- ---- ----   */


module.exports = router; // Export the router