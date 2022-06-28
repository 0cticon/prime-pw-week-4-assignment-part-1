console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  console.log('"Hello World!"');
  return;
}

// Call the function to test
hello();


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  console.log('Hello,', name + '!');
  return;
}
// Remember to call the function to test
helloName('Sam');

// 3. Function to add two numbers together & return the result

function addNumbers1(a, b) {
  console.log(a + b);
}
addNumbers1(5, 6);
// 
// 
function addNumbers(a, b) {
  console.log('a', a, 'b', b);
  let result = a + b;
  console.log('result', result);
  return result;
  // return firstNumber + secondNumber;
}
let c = addNumbers(4, 6);
console.log('addNumbers', c);
console.log(c);


// 4. Function to multiply three numbers & return the result
function multiplyThree(a, b, c) {
  console.log(a * b * c);
}
multiplyThree(3, 2, 4);
// 
// 
function multiplyThree1(a, b, c) {
  console.log('a', a, 'b', b, 'c', c);
  let result = a * b * c;
  console.log('result', result);
  return result;
}
let d = multiplyThree1(2, 3, 4);
console.log('multiplyThree1', d);

multiplyThree1(2, 3, 4);

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
// function isPositive(number) {
//   if (number > 0) {
//     console.log(true);
//   }
//   else if (number === 0) {
//     console.log(false);
//   }
//   else if (number < 0) {
//     console.log(false);
//   }
// }
// isPositive(3);
// isPositive(0);
// isPositive(-3);
function isPositive(number) {
  if (number > 0) {
    let number = true
    return number;
  }
  else if (number <= 0) {
    let number = false
    return number;
  }
}

// Call the function to test each outcome(true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array.If the 
//  array is empty, return `undefined`.
let array = [2, 10, 6, 2, 8];
function getLast(array) {
  if ((array.length - 1) >= 0) {
    let theLastItem = array[array.length - 1];
    return theLastItem;
  } else {
    return 'undefined';
  }
}
console.log(getLast(array));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//  DO NOT use Array.includes, Array.indexOf, or Array.find 

let array1 = ['919evo', 'Gemera', 'W11', 'Speirling'];
// console.log('Favorite race cars are: ', array1);
function find(value, a) {
  for (let i = 0; i < a.length; i++) {
    if (value === a[i]) {
      return true;
    }

  }
  return false;
}

console.log(find('919evo', array1));
console.log(find('Supra', array1));
console.log(find('W13', array1));
console.log(find('Gemera', array1));

// 

function find2(value, a) {
  for (let i = 0; i < a.length; i++) {
    return value === a[i];
  }
  return false;
}


console.log(find2('919evo', array1));
console.log(find2('Supra', array1));
console.log(find2('W13', array1));
console.log(find2('Gemera', array1));












// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
