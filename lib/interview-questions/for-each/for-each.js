'use strict';

class ForEach {
  constructor() {

  }
 
  // Write a function named greeting that takes in a string and returns the string in all uppercase letters.
  // Then, write a function named speaker that takes in a string and a callback function. The speaker function should return the string in all uppercase letters only by invoking the callback.

  greeting(word) {
    return word.toUpperCase();
  }

  speaker(message, callback) {
    return callback(message);
  }

  // Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.
  // Then, write a function named addNumbers that takes in four arguments:
  //   - A number to be added to an array
  //   - An array into which the number should be added
  //   - The number of times the number should be added
  //   - A callback function to use to add the numbers to the array (Hint: you already defined it)
  // Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.
  // Return the modified array.

  addValues(arr, value) {
    return arr.push(value); 
  }

  addNumbers(num, arr, times, callback) {
    for(let i = 0; i < times; i++) 
      callback(arr, num);
    return arr;
  }


  // Write a function named removeOne that takes in a number and an array. If the number divided by three has a remainder of two, pop one element off of the array.
  // Hint: you may want to look into the modulo operation.
  // Then, write a function named removeElements that takes in an array and a callback. This function should use a for loop to iterate over the array and invoke the callback once for each element in the array.
  // Return the modified array.

  removeOne(num, arr) {
    if(num % 3 === 2) 
      arr.pop();
  }

  removeElements(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
      callback(arr[i], arr);
    }
    return arr;
  }

  // Write a function named removeWithForEach that produces the same output as challenge 3, but uses forEach.

  removeWithForEach(arr, callback) {
    arr.forEach(element => {
      callback(element, arr);
    });
    return arr; 
  }

  // Write a function named removeWithAnon that produces the same output as challenges 3 and 4.
  // This function should use forEach again, but rather than taking in a callback as an argument, define an anonymous function as the argument to forEach.
  // This anonymous function should accept up to three arguments: the element, the index, and the array.

  removeWithAnon(arr) {
    arr.forEach(element => {
      if (element % 3 === 2)
        arr.pop();
    });
    return arr; 
  }

  // Write a function named createList that takes in an array of the current store intentory.
  // The inventory is formatted like this:
  // [
  //   { name: 'apples', available: true },
  //   { name: 'pears', available: true },
  //   { name: 'oranges', available: false },
  //   { name: 'bananas', available: true },
  //   { name: 'blueberries', available: false }
  // ]
  // This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.

  createList(availableItems) {
    let groceryList = [];
    availableItems.forEach(element => {
      if (element.available) groceryList.push(element.name);
    });
    return groceryList;
  }

  // Write a function named fizzbuzz that takes in an array of numbers.
  // Iterate over the array using forEach to determine the output based on several rules:
  //   - If a number is divisible by 3, add the word "Fizz" to the output array.
  //   - If the number is divisible by 5, add the word "Buzz" to the output array.
  //   - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  //   - Otherwise, add the number to the output array.
  // Return the resulting output array.

  fizzbuzz(arr) {
    let output = [];
    arr.forEach(element => {
      if(element % 3 === 0 && element % 5 === 0)
        output.push('Fizz Buzz');
      else if(element % 3 === 0) 
        output.push('Fizz');
      else if(element % 5 === 0)
        output.push('Buzz');
      else 
        output.push(element);
    });
    return output;
  }
}

module.exports = ForEach;