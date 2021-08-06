// Imports
import * as resourceConstants from './resourceConstants.js';

// Add jounral entry
export const addEntry = function (entry) {
    console.log(entry);
    const url = resourceConstants.JOUNRAL_API;

    return fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry),
    })
        .then((response) => {
            if (!response.ok) throw new Error('Unable to add jounral entry');
            return response.json();
        }).then((data) => {
            console.log(data);
            return data;
        }).catch((error) => {
            console.error(error);
            throw error;
        });
};

// Get entries
export const getEntries = function() {
    const url = resourceConstants.JOUNRAL_API;

    return fetch(url)
        .then((response) => {
            if (!response.ok) throw new Error('Unable to get journal entries');
            return response.json();
        })
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
};