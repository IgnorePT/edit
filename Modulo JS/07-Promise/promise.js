// Exercise 1:
// Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.
const testNum = (number) => new Promise((resolve, reject) => {

    if(!number && typeof number !== "number") {
        reject("It's Not a Number");
    }

    resolve((number > 10) ? true : false);

})

testNum(4545)
    .then(isHigherThanTen => console.log("Number is ", (isHigherThanTen) ? "higher" : "lower"))
    .catch((err) => {
        console.error("Error: ", err);
    })

// Exercise 2:
// Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.

const makeAllCaps = (arr) => new Promise((resolve, reject) => {

    if (Array.isArray(arr)) {
        const uppercaseArray = [];

        arr.forEach(string => {
            if(string && typeof string === "string"){
                uppercaseArray.push(string.toUpperCase());
            }
        })
        
        return resolve(uppercaseArray);
    }

    reject("Variable is not a String");

});


const sortWords = (arr) => new Promise((resolve, reject) => {

    if (arr && Array.isArray(arr)) {
        return resolve(arr.sort());
    }

    reject("Variable is not an array");

});

const arrStrings = ['this', 'is', "a", "shiiiit"];

makeAllCaps(arrStrings)
    .then(uppercaseArray => sortWords(uppercaseArray))
    .then(res => console.log(res))
    .catch(err => console.error(err))



// Test your knowledge
// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/its-quiz-time

// The real challenge
// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/the-last-challenge