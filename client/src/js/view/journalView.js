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
       
        // document fragment
        const docFragment = document.createDocumentFragment();

        entries.forEach((entry,index) => {
            // Get the date of the entry
            const date = new Date(entry.date);
            // get the color class
            const colorClass = index % 2 === 0 ? 'entry__item--primary' : 'entry__item--secondary';

            // Create a list item
            const listItem = document.createElement('li');
            listItem.classList.add('entry__item', colorClass);
        
            // Generate the html string for each entry
            const entryString = `
            <span class="entry__label">Date:</span>
            <p class="entry__content entry__content--date">${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}</p>

            <span class="entry__label">Zip code:</span>
            <p class="entry__content entry__content--zip">${entry.zip}</p>

            <p class="entry__content entry__content--temp">${entry.temp}</p>

            <p class="entry__content entry__content--feelings">${entry.feelings}</p>
            `;

            // Set the lsitItem inner html
            listItem.innerHTML = entryString;

            // Add the list as the first child
            docFragment.prepend(listItem);
        });

        // Reset jounral entries
        this.journalEntries.innerHTML = '';
        // Update journal entries with document fragment
        this.journalEntries.appendChild(docFragment);
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