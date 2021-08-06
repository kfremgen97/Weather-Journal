// Imports
import { getWeather } from '../service/weatherService.js';
import * as journalService from '../service/journalService.js';

// Elements
const form = document.querySelector('.form');
const zipInput = document.querySelector('.form__input--zip');
const feelingsInput = document.querySelector('.form__input--feelings');
const formButton = document.querySelector('.button--form');
const jounralEntries = document.querySelector('.journal-entries');

// Add event listener for form submit
form.addEventListener('submit', function (event) {
    // Prevent default
    event.preventDefault();

    // Get the form data
    const formData = new FormData(this);
    // Add the current date to the form data
    formData.append('date', new Date());
    // Get the current weather based on the zip code
    getWeather(formData.get('zip'))
        .then((data) => {
            // Add the temperature to the formData
            formData.append('temp', data.main.temp);
            // Create an object from the form data
            const journalEntry = Object.fromEntries(formData.entries());
            console.log(journalEntry);
            // Return the entry for when promise is resolved to be sent down the promise chain
            return journalEntry;
        })
        .then((entry) => {
            // Add the entry and return the promise to be sent down chain
            return journalService.addEntry(entry);
        })
        .then((postData) => {
            console.log(postData);
        })
        .catch((error) => {
            // Present alert
            alert(error.message);
        });
});
