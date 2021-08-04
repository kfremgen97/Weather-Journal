// Imports
const express = require('express');
const journalController = require('../controllers/journalController');

// Initialize express router instance
const router = express.Router();

// Get the jounral
router.get('/entries', journalController.getJournal);

// Add a jounral entry
router.post('/entries', journalController.addEntry);

// Export the router
module.exports = router;
