/* --- SETUP SERVER --- */
const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const noteRouter = require('./Routes/noteRouter');

// Create express app
const app = express();
const port = 3000;

// Setup server port
app.use(cors());

// Parse app/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse app/json
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Server Started!');
});

app.use('/api/v1', noteRouter);
// Setup listener
app.listen(port, () => {
    console.log("Server is starting ........");
    console.log(`Server is listening on port ${port}`);
});


