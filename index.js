/*

function product(arr, i = 0) {
  if (i === arr.length - 1) return arr[i];
  return arr[i]*product(arr,i+1)
}


*/


////////////////////////
//POD CS PREP DAY 2 ✅
////////////////////////
/*# POD Day 2 - Regular - Reverse String 

Create a function reverseString that accepts a string as a parameter and returns the reverse of that string.

For example: 

> reverseString("I love testing") // should return "gnitset evol I" */

// Challenge 1 

function reverseString(string) {
  let newString ='';
   for (let i = string.length - 1; i >= 0; i--) { 
        newString += string[i];
  }
  return newString;
}

/* 
// split = convert string to array
//reverse 
// join = convert it back to string
function reverseString (string) {
  return string.split('').reverse()join('')
}

*/

reverseString('Hello');

console.log('Challenge 1:', reverseString("codesmith prep") === "perp htimsedoc" ? "Correct!" : "Try again!")

/* 
# **POD Day 2 - Advanced - Draw Stairs**

Write a function that console logs a staircase of any given height where 1 <= N <= 100. The staircase must climb up from left to right. The last line should only consist of asterisks, without any leading/trailing spaces.  


For example:   

       

```
drawStairs(5) ->
    *
   **
  ***
 ****
*****
```

*/

/*
function drawStairs(n) {
  //for loop to track rows
  for (let i=0; i<=n; i++) {
    //initialize variable with value of " " (string)
    let whitespace = " ";
    //initialize variable with value of * (string)
    let asterisk = '*';
    //for every iteration, print n-1 whitespace and i asterisk using repeat method
    console.log(`${whitespace.repeat(n-1)}${asterisk.repeat(i)}`);
  }
}
drawStairs(5)

*/

function drawStairs(n) {
  for (let i=n-1; i>=0; i--) {
    let stairs = ' ';
     
    for (let j=0; j<n; j++) {
      if (j>= i) {
        stairs += '*';
      } else {
        stairs += ' ';
      }
    }
    console.log(stairs);
  }
}

drawStairs(5);


////////////////////////
//POD CS PREP DAY 3  ✅
////////////////////////
//Challenge 1 
// Findings common elements of 2 arrays and removing the duplicates

function commonElements(array1, array2){
  const common=[];
  for (let i=0; i<array1.length; i++) {
    for (let j=0; j<array2.length; j++){
      if (array1[i]=== array2[j]) {
        common.push(array1[i])
      }
    }
  }
return [...new Set(common)];
}

function commonElementsTests() {
  var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  console.log(commonElements(array1, array2), " -> ", [ 12, 'ferret', 'dog']);
}

commonElementsTests() // uncomment to test


//Challenge 2
// finding the mean & mode

function modemean(arr) {
  if(mode(arr) === mean(arr)) {
    return true;
  } else {
  return false;
}
}

function mode (arr) {
  const arrObj = {};
  arr.forEach((el) => {
    if (!arrObj[el]) arrObj[el] = 0;
    arrObj[el] ++;
  });
  let result =0;
  let max = 0;
  
  for (let key in arrObj) {
    if (arrObj[key] > max) {
      result =[key];
      max = arrObj[key];
    } 
  }
return parseInt(result);
}


function mean(arr){
  let sum = 0;
  for (let i=0; i<arr.length; i++) {
    sum += arr[i];
  }
  return sum/arr.length;
}

myarr = [5,5,5,6,4,3,2,1,1,0]
myarr2 = [5,5,5,5]
console.log(modemean(myarr)) // false
console.log(modemean(myarr2)) //true


////////////////////////
//POD CS PREP DAY 4 ✅
////////////////////////
//# **POD Day 4 - Regular - LargestAndSmallest -** 

/*The function `largestAndSmallest` should take one parameter, an array, and return a new array containing the largest and smallest elements from the original array.
EX: 
[1, 2, 3, 4, 5] --> [1, 5]
[90, 30, 44, 66, 10] --> [10, 90]
[16, -70, 122] --> [-70, 122] */

function largestAndSmallest(array) {
  const newArr = [];
  newArr.push(Math.min(...array));
  newArr.push(Math.max(...array));
  return newArr;
}


console.log(largestAndSmallest([1, 2, 3, 4, 5])); //should log [1, 5]
console.log(largestAndSmallest([90, 30, 44, 66, 10])); //should log [10, 90]
console.log(largestAndSmallest([16, -70, 122])); 
//should log [-70, 122]

/* # **POD Day 4 - Advanced -**  Reverse Number

The function `reverseNumber` should take one parameter, a number, it should reverse the number and return it.

EX: 
`923 --> 329`
`100 --> 1`
`-87 --> -78`
*/

function reverseNumber(num) {
let arr = num.toString().split('').reverse().join('');  //change number to string, then separate each number, then to reverse them and finally join again together
newArr = parseInt(arr) //convert from string to number
 return newArr * Math.sign(num); // make sure get negative sign if given number was negative
}

console.log(reverseNumber(456)); // should log 654
console.log(reverseNumber(1000)); // should log 1
console.log(reverseNumber(-789)); // should log -987


////////////////////////
//POD CS PREP DAY 5  ✅
////////////////////////
//Problem #1
//Given an array of numbers and a target number, return true if there are two numbers in the array that sum up to the target value; return false otherwise
 
//BONUS: Get twoSum to work without using nested loops


function twoSum () {
function twoSum(arr, target) {
    if (arr.length<2) {
      return false;
    }
  for (let i=0; i<arr.length-1; i++) {
    for (let j =1; j<arr.length; j++){
      if (arr[i]+ arr[j] === target) {
        return true;
      } 
    }
  }
  return false;
}
  

function twoSumTests() {
  console.log(twoSum([1,2,5,7], 3), ' -> ', true);
  console.log(twoSum([1,2,5,7], 5), ' -> ', false);
  console.log(twoSum([1], 5), ' -> ', false);
  console.log(twoSum([1, -1, 0, -2, 2, 2, 3, 4, 5, 7], -1), ' -> ', true);
}

twoSumTests()
}

/*
function twoSum (arr,target) {
  return arr.some(elem => arr.includes(target-elem));
}

*/

//Problem #2
/*Given an array of numbers, return an array of sums where the value at each index of the output array is the sum of the the values at all other indices of the
input array

Ex:
[1, 3, 4, 2] -> [9, 7, 6, 8], since 9 = 3 + 4 + 2, 7 = 1 + 4 + 2, 6 = 1 + 3 + 2, and 8 = 1 + 3 + 4
 
Bonus 1: Get exclusiveSum to work without nested loops

Bonus 2: Modify this function to be 'exclusive product'
Ex:
[1, 3, 4, 2] -> [24, 8, 6, 12]
 
Make sure your solution can handle zeros! */

function exclusiveSum(arr) {
let final=[];
const total = (arr.reduce(reducer));
for (let i=0; i<arr.length; i++){
  final.push(total-arr[i]);
}
return final;
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function exclusiveSumTests() {
  console.log(exclusiveSum([1,3,4,2]), ' -> ', [9, 7, 6, 8]);
  console.log(exclusiveSum([1,2,5]), ' -> ', [7, 6, 3]);
  console.log(exclusiveSum([1,2,5,0]), ' -> ', [7, 6, 3, 8]);
  console.log(exclusiveSum([1]), ' -> ', [0]);
}

exclusiveSumTests() // uncomment to test


////////////////////////
//POD CS PREP DAY 6 ✅
////////////////////////
 
//Challenge Part 1 =  addingToX 
//Create a function called addingToX that accepts a number as an argument.
 
//It will return the sum of every integer from 1 up to and including the input numb

function addingToX(num) {
  //make a variable for the sum
  let sum=0;
  //make a loop so we have the numbers that we can add to each while we decrement and should stop on zero
    for(i=num; i>=0; i--) { 
      sum += i;
    }
  //return the sum
  return sum;
}

// Test your answer (delete the //)
console.log(addingToX(1));  // 1
console.log(addingToX(2));  // 3
console.log(addingToX(3));  // 6
console.log(addingToX(10)); // 55

//Challenge Part 2 arrayToX
//Write a function arrayToX that accepts a number as an argument.
 
//It will return an array where each element is the return value of calling addingToX on each integer from 1 up to and including the input number.

function arrayToX(n) {
  let arr=[];
  for (let i=1; i<=n; i++) {
    arr.push(addingToX (i))
  }
  return arr;
}

//Test your answer (delete the //)
console.log(arrayToX(1));   // [1]
console.log(arrayToX(2));   // [1, 3]
console.log(arrayToX(3));   // [1, 3, 6]
console.log(arrayToX(10));  // [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]

////////////////////////
//POD CS PREP DAY 7 ✅
////////////////////////

// Advanced = Factorial using recursion
//Problem 1 Reverse Integer 
//Given a positive integer, return the number you get when you reverse all the digits. Do this without converting the number to a string!

function reverseInt(int) {
  let arr = [];
  arr.push(int)
  return arr.reverse()
}

console.log(reverseInt(1234)) //4321

//Problem 2 
//Is a Number Prime? complexity of the algorithm from O(n)
// 2 is prime but all other even numbers are not prime
// 0,1 not prime
function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

console.log(isPrime(12)); //false 
console.log(isPrime(25)); //false 
console.log(isPrime(21)); // false 
console.log(isPrime(2)); // true
console.log(isPrime(1)); // false 
console.log(isPrime(3));  // true
console.log(isPrime(9)); // false 

/*
You can also decrease the complexity of the algorithm from O(n) to O(sqrt(n)) if you run the loop until square root of a number:

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
*/

//Problem 3 Factorial using recursion
function factorial(num) {
if (num === 1 || num===0) {return 1}
  else {return num*factorial(num-1)}
}


// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1 



////////////////////////
//  ASSESSMENT
////////////////////////
// CHALLENGE 1 
/* Define a function `**select**` which takes two arguments, an array and a callback function. The callback function can be considered a test in that it will return either true or false depending on the input. `**select**` will iterate/loop through the array and pass each array element to the callback as an argument.

If the callback called on a certain value returns true, the original value (the input to the callback) is pushed to a new array. **`select`** will return this new array. */


//declare a function select with 2 params - arr,cb (returns T or F) 
function select (arr,cb) {
  // new array where we push the elements that returns true from cb
  let newArr = []; 
  // select iterates thru arr, passing each element to the cb as argument, if cb is true then we return the element
  for (let i=0; i<arr.length; i++) {
   if(cb(arr[i])=== true){
     newArr.push(arr[i])
   }
  }
  return newArr
}

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const arr = [1, 2, 3, 4, 5];
//const arr2 = [5,6,7,8,9,10];
const isEven = n => n % 2 === 0;
console.log(select(arr, isEven)); // should log: [2, 4]
//console.log(select(arr2, isEven)); //should log: [6,8,10]


// CHALLENGE 2 - ADD CODE BELOW
// **Challenge 2: Russian Roulette**
/* Define a function **`russianRoulette`** that accepts a number (let us call it **`n`**), and returns a function. The returned function will take no arguments, and will return the string **`‘click’`** the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string **`‘bang’`**. On every invocation after that, the returned function returns the string **`‘reload to play again’`*/

// declare function with 1 parameter and should return another function
function russianRoulette (n) {
  //counter will track how many invocations already happened
  let counter = 0;
  return function babyFunc () {
    //increment counter each invocation
    counter++
    //function returns CLICK if function was invoked less than nth times
    if (counter <= n-1) {
      return 'click'
    //function returns BANG if function was invoked nth times
    } else if (counter===n) {
      return 'bang'
    ////function returns RELOAD TO PLAY AGAIN if function was invoked more than nth times
    } else if (counter >= n+1){
      return 'reload to play again' 
    }
  }
}

const play = russianRoulette(3);
console.log(play()); // should log: ‘click’
console.log(play()); // should log: ‘click’
console.log(play()); // should log: ‘bang’
console.log(play()); // should log: ‘reload to play again’
console.log(play()); // should log: ‘reload to play again’

// CHALLENGE 3 - ADD CODE BELOW
//Challenge 3: Golden Sequence
/* Define a function **`goldenSequence`** that takes a number **`n`** and returns **`n`**'s corresponding Fibonacci number.

Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

 - Each number is found by adding the previous two

 - The first two values, index 0 and index 1, of the sequence shall be 1 and 1

More Info: https://en.wikipedia.org/wiki/Fibonacci_number */


//declare a function with 1 parameter and should return n's fibonacci number
function goldenSequence (n) {
//first 2 values = index 0 and index 1 would both equal to 1
  if(n===0 || n===1) return 1 
    //each number equals to adding 2 previous numbers
    return goldenSequence(n-1) + goldenSequence(n-2);
}

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
console.log(goldenSequence(0)); // should log: 1
console.log(goldenSequence(1)); // should log: 1
console.log(goldenSequence(2)); // should log: 2
console.log(goldenSequence(3)); // should log: 3
console.log(goldenSequence(4)); // should log: 5
console.log(goldenSequence(12)); // should log: 233


