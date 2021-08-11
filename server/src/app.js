// Imports
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const jounralRoutes = require('./routes/journalRoutes');

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

// Host static file
app.use(express.static('client/src'));

// Add the jounral router
app.use('/api/journal', jounralRoutes);

// Start the server
app.listen(config.server.PORT, () => {
    console.log('Starting express server');
    console.log(`Listening on localhost: ${config.server.PORT}`);
});
