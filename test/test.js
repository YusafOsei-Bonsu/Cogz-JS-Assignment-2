import chai from 'chai';
const { expect } = chai;
import { find3LetterWords, removeNumbers } from "../scripts/regex.js";

// Sample test data
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';

describe('JS Assignment 2', () => {

    // Test suite for the Regex exercises
    describe('Regex Exercises', () => {
        // Test suite for first regex question
        describe('Regex 1 - Find 3 letter words', () => {
  
            it("Should return [ 'The', 'fox', 'the', 'dog' ]", () => expect(find3LetterWords('The quick brown fox jumped over the lazy dog')).to.eql(['The', 'fox', 'the', 'dog']));

            it("Should return [ 'Ben' ]", () => expect(find3LetterWords('I am Ben')).to.eql(['Ben']));

            it("Should return [ 'pin', 'pip', 'one', 'jew', 'two' ]", () => expect(find3LetterWords('pin pip one jew two')).to.eql(['pin', 'pip', 'one', 'jew', 'two']));

            it("Should return [ 'one', 'old', 'and', 'poo' ]", () => expect(find3LetterWords('Hello, I am a one years old and I poo alot 123 .')).to.eql(['one', 'old', 'and', 'poo']));
        });

        // Test suite for second regex question
        describe('Regex 2 - Remove all numbers from string', () => {
            it("Should return 'ABCDEFGHIJ'", () => expect(removeNumbers('A1B2C3D4E5F6G7H8I9J10')).to.equal('ABCDEFGHIJ'));
            
            it("Should return 'IAmYusaf'", () => expect(removeNumbers('1111I22222Am333333Yusaf')).to.equal('IAmYusaf'));
            
            it("Should return 'HELLO'", () => expect(removeNumbers('1H23E45L67L89O')).to.equal('HELLO'));
            
            it("Should return 'FIREFOX'", () => expect(removeNumbers('F1122222IRE1281FOX')).to.equal('FIREFOX'));
        });
    });
    
});
