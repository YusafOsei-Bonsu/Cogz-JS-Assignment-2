import chai from 'chai';
const { expect } = chai;
// JS functions using regex
import { find3LetterWords, removeNumbers, findEmail } from "../scripts/regex.js";
// JS functions using promises
import { testNum } from '../scripts/promises.js'

// Sample test data
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';

// Tests for JS assignment 2
describe('JS Assignment 2', () => {

    // Test suite for the Regex exercises
    describe('Regex Exercises', () => {
        
        describe('Regex 1 - Find 3 letter words', () => {
  
            it("Should return [ 'The', 'fox', 'the', 'dog' ]", () => expect(find3LetterWords('The quick brown fox jumped over the lazy dog')).to.eql(['The', 'fox', 'the', 'dog']));

            it("Should return [ 'Ben' ]", () => expect(find3LetterWords('I am Ben')).to.eql(['Ben']));

            it("Should return [ 'pin', 'pip', 'one', 'jew', 'two' ]", () => expect(find3LetterWords('pin pip one jew two')).to.eql(['pin', 'pip', 'one', 'jew', 'two']));

            it("Should return [ 'one', 'old', 'and', 'poo' ]", () => expect(find3LetterWords('Hello, I am a one years old and I poo alot 123 .')).to.eql(['one', 'old', 'and', 'poo']));
        });

        describe('Regex 2 - Remove all numbers from string', () => {
            it("Should return 'ABCDEFGHIJ'", () => expect(removeNumbers('A1B2C3D4E5F6G7H8I9J10')).to.equal('ABCDEFGHIJ'));
            
            it("Should return 'IAmYusaf'", () => expect(removeNumbers('1111I22222Am333333Yusaf')).to.equal('IAmYusaf'));
            
            it("Should return 'HELLO'", () => expect(removeNumbers('1H23E45L67L89O')).to.equal('HELLO'));
            
            it("Should return 'FIREFOX'", () => expect(removeNumbers('F1122222IRE1281FOX')).to.equal('FIREFOX'));
        });

        describe('Regex 5 - Find email in string', () => {
            it("Should return [ 'james@juniordevelopercentral.com' ]", () => {
                expect(findEmail('You can contact me on Twitter @codebubb or james@juniordevelopercentral.com')).to.eql(['james@juniordevelopercentral.com']);
            });

            it("Should return [ 'yusafoseibonsu@hotmail.com', '875394@cognizant.com' ]", () => {
                expect(findEmail('My peronal email is yusafoseibonsu@hotmail.com and my professional email is 875394@cognizant.com')).to.eql(['yusafoseibonsu@hotmail.com','875394@cognizant.com']);
            });
        });
    });

    // Test suite for the Promise exercises
    describe('Promise Exercises', () => {
        describe('Promise 1 - If number is greater/less than 10', () => {

            // Testing the scenario where the provided value is 10
            it('Should return 10', () => testNum(10).then(result => expect(result).to.equal(10)));

            // Testing the scenario where the provided value is greater than 10
            it('Should return the number being greater than 10', () => {
                testNum(20).then(result => expect(result).to.equal('20 is greater than 10'));

                testNum(30).then(result => expect(result).to.equal('30 is greater than 10'));

                testNum(50).then(result => expect(result).to.equal('50 is greater than 10'));

                testNum(100).then(result => expect(result).to.equal('100 is greater than 10'));
            });
            
            // Testing the scenario where the provided value is less than 10
            it('Should return the number being less than 10', () => {
                testNum(1).then(result => expect(result).to.equal('1 is less than 10'));

                testNum(2).then(result => expect(result).to.equal('2 is less than 10'));

                testNum(5).then(result => expect(result).to.equal('5 is less than 10'));
                
                testNum(7.4).then(result => expect(result).to.equal('7.4 is less than 10'));

                testNum(9).then(result => expect(result).to.equal('9 is less than 10'));
            });

            it("Should return 'Not a number'", () => {
                testNum('hello world').catch(result => expect(result).to.equal('Not a number'));
                testNum(true).catch(result => expect(result).to.equal('Not a number'));
            });
        });
    });
});
