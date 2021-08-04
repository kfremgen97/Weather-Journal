// Jounral class
class Journal {

    #projectData;

    constructor() {
        this.#projectData = {};
    }

    addEntry(entry) {
        this.#projectData[entry.date] = entry;
    }

    getEntries() {
        return this.#projectData;
    }
}

module.exports = Journal;
