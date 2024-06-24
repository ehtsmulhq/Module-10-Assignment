// 1. Write a function named 'calculateSum' that takes two arguments their sum.
 
function calculateSum(a,b){
    return a+b
}
console.log(calculateSum(5,6));


/* 2.Write a function named ‘isEven’ that takes one argument and returns true if the number is even, 
and false otherwise. */

function isEven(a){
    return a%2===0
}

console.log(isEven(5));
console.log(isEven(6));


/* 3.Write a function named ‘findMax’ 
that takes an array of numbers and returns the largest number in the array. */

function findMax(array){
    return Math.max(...array)
}
console.log(findMax([1,2,5,8,7,10]));


/* 4.Write a function named ‘reverseString’ that takes a string and returns the string reversed.*/

function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString('Hello'));


/* 5.Write a function named ‘filterOddNumbers’ 
that takes an array of numbers and returns a new array containing only the odd numbers. */

function filterOddNumbers(array){
    return array.filter(num => num % 2 !==0)
}
console.log(filterOddNumbers([2,3,4,6,8,10])); // here 3 is the only Odd number



/* 6. Write a function named ‘sumArray’ that takes an array of   
numbers and returns the sum of all elements. */


function sumArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
    return sum
}

console.log(sumArray([1,2,3,4,5]));

/* 7.Write a function named ‘sortArray’ that 
takes an array of numbers and returns a new array sorted in ascending order. */


function sortArray(array){
   return array.sort()
}
console.log(sortArray([1,7,8,2,4]));


/* 8.Write a function named ‘capitalizeFirstLetter’ 
that takes a string and returns the same string with the first letter capitalized. 
Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"*/

function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}

console.log(capitalizeFirstLetter("hello"));