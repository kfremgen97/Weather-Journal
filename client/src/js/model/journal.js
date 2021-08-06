// Journal model
class Journal{
    // Private entries field
    #entries = {};

    setEntries(entries){
        // Replace the entries
        this.#entries = entries;
    }

    getEntries(){
        // Return an array of the entry keys
        return Object.values(this.#entries);
    }
}

// Export a single instance
export default new Journal();