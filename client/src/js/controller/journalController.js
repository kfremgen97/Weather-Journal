// Imports
import { getWeather } from '../service/weatherService.js';
import * as journalService from '../service/journalService.js';
import journal from '../model/journal.js';
import journalView from '../view/journalView.js';

// Add event listener for form submit
const formHandler = async function (formData) {
    // Present spinner
    journalView.presentSpinner();

    try {
        // Get the weather based on the form data
        const weatherData = await getWeather(formData.get('zip'));
        // Add the temperature to the formData
        formData.append('temp', weatherData.main.temp);
        // Create an object from the form data
        const journalEntry = Object.fromEntries(formData.entries());
        // Add the entry to journal via api
        await journalService.addEntry(journalEntry);
        // Get the entries via journal api
        const entries = await journalService.getEntries();
        // Update the entries in the model
        journal.setEntries(entries);
        // Update the view
        journalView.updateUI(journal.getEntries());
    } catch (error) {
        // Present alert
        journalView.presentAlert(error.message);
        // Update the view
        journalView.updateUI(journal.getEntries());
    }
};

//  // Add event listener for form submit
// const formHandler = function (formData) {   getWeather(formData.get('zip'))
//         .then((data) => {
//             // Add the temperature to the formData
//             formData.append('temp', data.main.temp);
//             // Create an object from the form data
//             const journalEntry = Object.fromEntries(formData.entries());
//             // Return the entry for when promise is resolved to be sent down the promise chain
//             return journalEntry;
//         })
//         .then((entry) => {
//             // Add the entry and return the promise to be sent down chain
//             return journalService.addEntry(entry);
//         })
//         .then((postData) => {
//             // Get the entries and return the promise to be sent down chain
//             return journalService.getEntries();
//         })
//         .then((entries) => {
//             // Update the entries in the model
//             journal.setEntries(entries);
//             // Update the view
//             journalView.updateUI(journal.getEntries());
//         })
//         .catch((error) => {
//             // Present alert
//             journalView.presentAlert();
//         });
// };

// Add event listeners
journalView.formPublisher(formHandler);
