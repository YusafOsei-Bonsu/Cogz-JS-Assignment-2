import chai from 'chai';
const { assert, expect } = chai;
// JS functions using regex and promises
import { find3LetterWords, removeNumbers, findEmail } from "../scripts/regex.js";
import { testNum, makeAllCaps, sortWords } from '../scripts/promises.js'

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
        // Test suite for first Promise exercise
        describe('Promise 1 - If number is greater/less than 10', () => {

            let result;
            // Testing the scenario where the provided value is 10
            it('Should return 10', async () => {
                result = await testNum(10);
                assert.equal(result, 10);
            });

            // Testing the scenario where the provided value is greater than 10
            it('Should return the number being greater than 10', async () => {
                result = await testNum(20);
                assert.equal(result, '20 is greater than 10');

                result = await testNum(30);
                assert.equal(result, '30 is greater than 10');

                result = await testNum(50);
                assert.equal(result, '50 is greater than 10');

                result = await testNum(100);
                assert.equal(result, '100 is greater than 10');
            });
            
            // Testing the scenario where the provided value is less than 10
            it('Should return the number being less than 10', async () => {
                result = await testNum(1);
                assert.equal(result, '1 is less than 10');
                
                result = await testNum(2);
                assert.equal(result, '2 is less than 10');
                
                result = await testNum(5);
                assert.equal(result, '5 is less than 10');
                
                result = await testNum(7.4);
                assert.equal(result, '7.4 is less than 10');
                
                result = await testNum(9);
                assert.equal(result, '9 is less than 10');
            });
        });

        // Test suite for second Promise exercise
        describe('Promise 2 - Capitalising an array of words and alphabetically sorting them', () => {

            // Returns a sorted, capitalised version of the original array
            it('Should return [A, B, C, D]', () => {
                return makeAllCaps(['b','d','c','a'])
                    .then(capitalisedArr => {
                        return sortWords(capitalisedArr);
                    }).then(sortedArr => {
                        assert.strictEqual(sortedArr, ['A','B','C','D']);
                    }).catch(err => {
                        return err;
                    });
            });

            it("Should return 'Array contains at least one non-alphabetical string'", () => {
                return makeAllCaps(['hello','world', 1])
                    .then(capitalisedArr => {
                        return sortWords(capitalisedArr);
                    }).then(sortedArr => {
                        return sortedArr
                    }).catch(err => {
                        assert.equal(err, 'Array contains at least one non-alphabetical string');
                    });
            });
        });
    });
});
