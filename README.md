# JS Assignment 2

This assignment requires the creation and testing of JS functions that utilise regular expressions (regex) and the Promise API. 

## Tech Stack

- JavaScript
- Mocha & Chai

## Project Setup

1. In terminal, I entered `npm i --save-dev mocha chai` to locally install the Mocha and Chai testing package.
2. In `package.json`, I set the testing framework as Mocha by setting the property to Mocha (i.e. `"scripts": { "test": "mocha" }`)
3. Initial test code:
```javascript
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('JS Assignment 2', () => {
    describe('Regex Exercises', () => {

    });
    describe('Promise Exercises', () => {

    });
});
```

## Exercises

```javascript
const ex1 = 'The quick brown fox jumped over the lazy dog';
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';
```

### REGEX
1. Using a regex pattern, get the 3 letter words in the ex1 string.
2. Using a regex pattern, remove all of the numbers from the ex2 string.
3. Using a regex pattern, find the monetary value contained within the ex3 string.
4. Using a regex pattern, find the telephone number contained within the ex4 string.
5. Using a regex pattern, find the email address contained within the ex5 string.

### Promise
1. Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.
2. Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalise them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
3. Write examples to use all, allSettled methods in Promise with examples 