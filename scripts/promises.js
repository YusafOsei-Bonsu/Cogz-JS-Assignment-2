// Checks if the provided value is greater/less than 10
export const testNum = num => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(`${num} is greater than 10`);
        }
        else if (num < 10) {
            resolve(`${num} is less than 10`);
        } 
        else if (num === 10) {
            resolve(10);
        }
    });
}

// Capitalises each word in an array
export const makeAllCaps = wordArray => {
    return new Promise((resolve, reject) => {
        const isAlphabet = /^[a-zA-Z]+$/;

        // Creating new array that contains capitalised version of 
        let capitalised = wordArray.map(word => {
            // If 'word' is a string with only alphabets
            if (typeof(word) == 'string' && isAlphabet.test(word)) {
                return word.toUpperCase();
            } else {
                reject('Array contains at least one non-alphabetical string');
            }
        });

        resolve(capitalised);
    });
}

// Sorts an array of words
export const sortWords = capitalisedArr => { 
    return new Promise((resolve, reject) => {
        if (Array.isArray(capitalisedArr)) {
            resolve(capitalisedArr.sort());
        } else {
            reject('There is no array to sort');
        }
    });
}