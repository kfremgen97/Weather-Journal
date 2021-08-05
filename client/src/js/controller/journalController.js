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
    // Create an object from the form data
    const journalEntry = Object.fromEntries(formData.entries());
    console.log(journalEntry);
});
