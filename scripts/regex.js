// Retrieves all 3-letter words from a given sentence
export const find3LetterWords = (sentence) => {
    const onlyLetters = /^[a-zA-Z]+$/; // Checks if there's only alphabetical letters
    const threeLetters = /(?:^|(?<=\s))\w{3}(?=\s|$)/; // Checks if the word contains exactly 3 letters
    
    // Retrieves and stores 3-letter words from the sentence
    const threeLettersOnly = sentence.split(' ').filter(word => {
        if (onlyLetters.test(word)) {
            return threeLetters.test(word);
        }
    });
    return threeLettersOnly;
}