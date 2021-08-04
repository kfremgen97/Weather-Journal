// Imports
const { v4: uuidv4 } = require('uuid');
const journal = require('../models/journal');

// Get the journal
module.exports.getJournal = function (req, res) {
    // Send back all the jounral entries
    res.json(journal.getEntries());
};

// Add an entry
module.exports.addEntry = function (req, res) {
    console.log(req.body);
    // Add the data to the jounral
    journal.addEntry(uuidv4(), req.body);
    // Send a sucess
    res.status(200).json({ status: 'OK', message: 'Journal entry added' });
};
