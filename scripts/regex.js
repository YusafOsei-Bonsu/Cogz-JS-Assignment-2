// Retrieves all 3-letter words from a given sentence (Regex 1)
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

// Removes numbers from a string (Regex 2)
export const removeNumbers = (str) => {
    // Regex used to replace numerical digits with a space
    const noNumbers = /[0-9]/g;
    str = str.replace(noNumbers, '');
    return str;
}

// Retrieves the monetary value from a string (Regex 3)
export const findMonetary = (str) => {
    const onlyMonetary = /([\£$€¥₹]\d+([\.,]\d{2}?))|(\d+([\.,]\d{2}?)[\£$€¥₹])|([\£$€¥₹]\d+)\s?/g; // regex
    str = str.endsWith('.') ? str.substring(0, (str.length - 1)) : str; // removing full stop
    const money = str.replace(/,/g, ' ').split(' ').filter(item => onlyMonetary.test(item));
    return money;
}

// Finds the email in the string (Regex 5)
export const findEmail = (str) => {
    // Regex to find the email
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // Contains the email from the string
    const email = str.split(' ').filter(item => regex.test(item));
    return email;
}