// Retrieves all 3-letter words from a given sentence
export const find3LetterWords = (str) => {
    const onlyLetters = /^[a-zA-Z]+$/; // Checks if there's only alphabetical letters
    const threeLetters = /(?:^|(?<=\s))\w{3}(?=\s|$)/; // Checks if the word contains exactly 3 letters
    
    // Retrieves and stores 3-letter words from the sentence
    const threeLettersOnly = str.split(' ').filter(word => {
        if (onlyLetters.test(word)) {
            return threeLetters.test(word);
        }
    });
    return threeLettersOnly;
}

// Removes numbers from a string
export const removeNumbers = (str) => {
    // Regex used to replace numerical digits with a space
    const noNumbers = /[0-9]/g;
    str = str.replace(noNumbers, '');
    return str;
}

// Finds the email in the string
export const findEmail = (str) => {
    // Regex to find the email
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // Contains the email from the string
    const email = str.split(' ').filter(item => regex.test(item));
    return email;
}