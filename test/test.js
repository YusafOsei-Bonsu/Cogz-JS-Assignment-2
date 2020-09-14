// const assert = require('chai').assert;
// const expect = require('chai').expect;
import chai from 'chai';
const { expect } = chai;
import { find3LetterWords } from "../scripts/regex.js";

// Sample test data
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';

describe('JS Assignment 2', () => {

    // Test suite for the Regex exercises
    describe('Regex Exercises', () => {
        // First regex question
        describe('Regex 1 - Find 3 letter words', () => {
            let ex1;
            it("Should return [ 'The', 'fox', 'the', 'dog' ]", () => {
                ex1 = 'The quick brown fox jumped over the lazy dog';
                expect(find3LetterWords(ex1)).to.eql(['The', 'fox', 'the', 'dog']);
            });

            it("Should return [ 'Ben' ]", () => {
                ex1 = 'I am Ben';
                expect(find3LetterWords(ex1)).to.eql(['Ben']);
            });

            it("Should return [ 'pin', 'pip', 'one', 'jew', 'two' ]", () => {
                ex1 = 'pin pip one jew two';
                expect(find3LetterWords(ex1)).to.eql(['pin', 'pip', 'one', 'jew', 'two']);
            });

            it("Should return [ 'one', 'old', 'and', 'poo' ]", () => {
                ex1 = 'Hello, I am a one years old and I poo alot 123 .';
                expect(find3LetterWords(ex1)).to.eql(['one', 'old', 'and', 'poo']);
            });
        });
    });

    // Test suite for the Promise exercises
    // describe('Promise Exercises', () => {

    // });
});
