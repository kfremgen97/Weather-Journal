// Imports
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const config = require('./config');
const Journal = require('./models/journal');

// Initalize projectData
const journal = new Journal();
// Initialize express app
const app = express();

// Add body-parser middle ware
// Set up middle ware that only parses urlencoded bodies and
// only looks at requests where the Content-Type header matches the type option.
app.use(bodyParser.urlencoded({ extended: false }));
// Set up middle ware that only parses json and looks at request with Content-Type to be json
app.use(bodyParser.json());

// Add cors middle ware
// Allow cross origin sharing
app.use(cors());

// Simple get
app.get('/', (req, res) => {
    res.send('Welcome to the weather jounral');
});

// Get journal entries
app.get('/journal', (req, res) => {
    // Send back all the jounral entries
    res.json(journal.getEntries());
});

// Add a new entry
app.post('/journal', (req, res) => {
    console.log(req.body);
    // Add the data to the jounral
    journal.addEntry(uuidv4(), req.body);
    // Send a sucess
    res.status(200).json({ status: 'OK', message: 'Journal entry added' });
});

// Start the server
app.listen(config.server.PORT, () => {
    console.log('Starting express server');
    console.log(`Listening on localhost: ${config.server.PORT}`);
});
