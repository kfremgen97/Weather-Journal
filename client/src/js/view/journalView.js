// Journal View
class JournalView {

    // Elements
    form = document.querySelector('.form');
    zipInput = document.querySelector('.form__input--zip');
    feelingsInput = document.querySelector('.form__input--feelings');
    formButton = document.querySelector('.button--form');
    journalEntries = document.querySelector('.journal-entries');


    // Reset the form inputs
    _resetFormInputs() {
        // Reset form fields
        this.zipInput.value = '';
        this.feelingsInput.value = '';
    }

    _updateEntries(entries) {
        // Hold the entry string
        let entryString = '';

        entries.forEach((entry) => {
            // Get the date of the entry
            const date = new Date(entry.date);

            // Generate the html string for each entry
            entryString += `
        <article class="entry">
        <div class="entry__temp">
            <span class="entry__label">Temp:</span>
            <p class="entry__content">${entry.temp}</p>
        </div>
        <div class="entry__date">
            <span class="entry__label">Date:</span>
            <p class="entry__content">${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}</p>
        </div>
        <div class="entry__feelings">
            <span class="entry__label">Feelings:</span>
            <p class="entry__content">${entry.feelings}</p>
        </div>
    </article>
        `;
        });

        // Reset jounral entries
        this.journalEntries.innerHTML = '';
        // Update journal entries
        this.journalEntries.insertAdjacentHTML('afterbegin', entryString);
    }

    // Update UI
    updateUI(entries) {
        this._resetFormInputs();
        this._updateEntries(entries)
    }

    // Present an alert
    presentAlert(message) {
        alert(message);
    }

    // Listen for form submit event
    formPublisher(handler) {
        this.form.addEventListener('submit', (event) => {
            // Prevent default action
            event.preventDefault();

            // Get the form data
            const formData = new FormData(this.form);
            // Add the current date to the form data
            formData.append('date', new Date());
            // Pass the form data to the handler
            handler(formData);
        });
    }
}

export default new JournalView();