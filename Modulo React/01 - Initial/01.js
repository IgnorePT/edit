
//Array's estudar
// fif - fila
// lifo -stack

//Ex 1: Write a function that is called with a number and add 2 if the number is lower than 5 and add 3 if the number is higher or equal 5
const newSum = (number) => {
    return (number >= 5) ? number + 3 : number + 2;
}

console.log("New Sum: ", newSum(2))
console.log("New Sum: ", newSum(6))


// Ex 2: Write a function that is called with a number and print `fizz` if the number is divisible by 3, print `buzz` if the number is divisible by 5 and print `fizzbuzz` if the number is divisible by 3 and 5.

const fizzBuzz = (number) => {

    const isDivisibleBytree = number % 3 === 0;
    const isDivisibleByFive = number % 5 === 0;

    if (isDivisibleBytree && isDivisibleByFive) return "fizzbuzz";

    if (isDivisibleByFive) return "buzz";

    if (isDivisibleBytree) return "fizz";
}

const optimalFizzBuzz = (number) => {
    let str = '';

    if (number % 3 === 0) str += "fizz";
    if (number % 5 === 0) str += "buzz";

    return str;
}

console.log("Fizzbuzz: ", fizzBuzz(2))
console.log("Fizzbuzz: ", fizzBuzz(3))
console.log("Fizzbuzz: ", fizzBuzz(5))
console.log("Fizzbuzz: ", fizzBuzz(15))

//Ex 3: Write a function to create a new string adding `ab` in the start of the given string. If the given string begins with `ab` then return the original string.

const abString = (str) => {
    return (str.indexOf('ab') === 0) ? str : `ab${str}`;
}

console.log("abString: ", abString("nelson"))
console.log("abString: ", abString("absinto"))
console.log("abString: ", abString("Welcome"))

//Ex 4: Write a function that given a list of salaries and a decimal with the increase percentage, returns a new list with the salaries updated

const updateSalaries = (salaryList, increasePercentage) => {
    return salaryList.map((salary) => salary + (salary * increasePercentage));
}

console.log("updateSalaries: ", updateSalaries([100, 200, 300], 0.10));

//Ex 5: Index an object
const array = [
    {
        name: 'teste1',
        id: 1
    },
    {
        name: 'teste 2',
        id: 2
    }
];

const indexOfObject = (arrayOfObjects) => {
    return arrayOfObjects.reduce((acc, currentValue) => {
        acc[currentValue.id] = currentValue;
    }, {})
}

const indexOfObjectOld = (arrayOfObjects) => {

    let obj = {};

    arrayOfObjects.forEach(element => {
        obj[element.id] = element;
    });

    return obj;

}

console.log("indexOfObject: ", indexOfObject(array));
console.log("indexOfObjectOld: ", indexOfObjectOld(array));


//Ex 6: Remove elements from list
const removeFromList = (arrayOfNumbers) => {
    return arrayOfNumbers.filter(number => number < 10)
}

console.log("removeFromList: ", removeFromList([1, 40, 3, 6, 10, 90, 35]));


//Ex 7 : Largest number
const getLargestEvenNumber = (arrayOfNumbers) => {

    return arrayOfNumbers.reduce((acc, currentValue) => {
        return (currentValue % 2 === 0 && currentValue > acc) ? currentValue : acc;
    }, 0);
}

console.log("getLargestEvenNumber: ", getLargestEvenNumber([1, 40, 3, 6, 10, 91, 35]));

//Ex 8: Multiply evens
const multiplyEvens = (arrayOfNumbers) => {
    return arrayOfNumbers.filter(number => number % 2 === 0).map(evenNumbers => evenNumbers * 2);
}

const multiplyEvensReduce = (arrayOfNumbers) => {
    return arrayOfNumbers.reduce((acc, currentValue) => {
        if(currentValue % 2 === 0) acc.push(currentValue * 2);
        return acc;
    }, [])
}

console.log("multiplyEvens: ", multiplyEvens([1, 40, 3, 6, 10, 90, 35]));
console.log("multiplyEvensReduce: ", multiplyEvensReduce([1, 40, 3, 6, 10, 90, 35]));

//Ex 9: Swap
const swapElementsInArray = (array) => {
    const lastElement = array[array.length - 1];
    array[array.length - 1] = array[0];
    array[0] = lastElement;
    return array;
}

console.log("swapElementsInArray: ", swapElementsInArray([1, 40, 3, 6, 10, 90, 35]));

//Ex 10: Monotonous List

//Complex Way
const isBigger = (a,b) => {
    return a > b;
}


const isLower = (a,b) => {
    return a < b;
}

const isMonotonousList = (array) => {
    const validateMonotonous = (array[0] > array[0 + 1]) ? isBigger : isLower;

    let isMonotonous = true;

    for(let i = 1; i < array.length - 1; i++){
        if(!validateMonotonous(array[i], array[i + 1])){
            isMonotonous = false;
            break;
        }
    }

    return isMonotonous;
} 

console.log("isMonotonousList: ", isMonotonousList([1, 40, 3, 6, 10, 90, 35]));
console.log("isMonotonousList: ", isMonotonousList([1, 2, 3, 6, 10, 50]));
console.log("isMonotonousList: ", isMonotonousList([100, 20, 3, -6, -10, -50]));

//Ex 11: Voewls
function countVowels(string){
    return string.match(/[aeiou]/ig).length;
}

console.log("countVowels: ", countVowels("nelson"))
console.log("countVowels: ", countVowels("absinto"))
console.log("countVowels: ", countVowels("aaaeee"))












