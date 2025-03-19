const sequential = require('sequential-ids'); // Import sequential-ids

var generator = new sequential.Generator(
    {
        digits: 3, // Number of digits in the ID
        restore: '000' // Restore the ID
    }
); // Create a new instance of sequential-ids

generator.start(); // Start the generator

module.exports = generator; // Export the generator