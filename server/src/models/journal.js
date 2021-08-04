// Jounral class
class Journal {

    #projectData;

    constructor() {
        this.#projectData = {};
    }

    addEntry(entryID,entry) {
        this.#projectData[entryID] = {id: entryID, ...entry};
    }

    getEntries() {
        return this.#projectData;
    }
}

module.exports = Journal;
