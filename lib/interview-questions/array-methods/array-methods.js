'use strict';

class ArrayMethods {
  constructor() {

  }

  // Write a function named sortBackwards that takes in an array of numbers and returns the same array, with the numbers sorted, highest to smallest.

  sortBackwards(arr) {
    return arr.sort((a, b) =>  b - a);
  }

  // Write a function named alphabetize that takes in an array of strings and returns the same array with the strings sorted alphabetically.
  // In this alphabetization, capital letters come before lower case letters.
  // For example, ['Alphabet', 'Zebra', 'alphabet', 'carrot'] is correctly sorted

  alphabetize(arr) {
    return arr.sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
  }


  // Write a function named sortByLength that takes in an array of strings and returns the same array, with the strings sorted by their length, lowest to highest.

  sortByLength(arr) {
    return arr.sort((a, b) => a.length > b.length ? 1 : a.length < b.length ? -1 : 0);
  }

  // Write a function named alphabetizeBetter that takes in an array of strings and returns the same array, with the strings sorted alphabetically. Capitalization should not change the sort order of two strings.
  // For example, ['Alphabet', 'alphabet', 'carrot', 'Zebra'] is correctly sorted, and so is ['alphabet', 'Alphabet', 'carrot', 'Zebra'].

  alphabetizeBetter(arr) {
    return arr.sort((a, b) => {
      return a.toLowerCase() > b.toLowerCase() ? 1 : a.toLowerCase() < b.toLowerCase() ? -1 : 0;
    });
  }


  // Write a function named sortByPrice that takes in an array of objects, each of which has a 'price' property, and sorts those objects by price, lowest to highest, returning the same array.
  // Here is an example of the input:
  // [
  //   {name: 'Sweatshirt', price: 45},
  //   {name: 'Bookmark', price: 2.50},
  //   {name: 'Tote bag', price: 15}
  // ];

  sortByPrice(arr) {
    return arr.sort((a, b) => a.price - b.price);
  }


  // Write a function named sortNumbersByLength that takes in an array of numbers and sorts those numbers by their length.
  // For example, [1, 14, 0.2, -281, 54782] is only correctly sorted in that order.

  sortNumbersByLength(arr) {
    return arr.sort((a, b) => a.toString().length > b.toString().length);
  }


  // Write a function named sortPeople that takes in an array of Person objects, each of which has firstName, lastName, and age properties, and sorts those people by their last names. Do not worry about capitalization or first names.

  sortPeople(arr) {
    return arr.sort((a, b) => a.lastName > b.lastName ? 1 : a.lastName < b.lastName ? -1 : 0);
  }

  /* ------------------------------------------------------------------------------------------------
CHALLENGE 8
Write a function named sortPeopleBetter that takes in an array of Person objects, each of which has firstName, lastName, and age properties, and sorts those people by their last names.
If two people share the same last name, alphabetize on their first name.
If two people have the same full name, the younger one should come first. Do not worry about capitalization.
------------------------------------------------------------------------------------------------ */

  sortPeopleBetter(arr) {
    return arr.sort((a, b) => {
      if (a.firstName === b.firstName && a.lastName === b.lastName) {
        return a.age - b.age;
      } else if(a.lastName === b.lastName) {
        return a.firstName > b.firstName ? 1 : a.firstName < b.firstName ? -1 : 0;
      } else {
        return a.lastName > b.lastName ? 1 : a.lastName < b.lastName ? -1 : 0;
      }
    });
  }


  // Write a function named sortMeetingsByDay that takes in an array of objects, each of which represents a meeting happening a particular day of the week, with a particular start time and end time.
  // Sort the meetings by the day on which they happen, Monday-Friday. It does not matter which order meetings come in on a particular day. For example, if there are two meetings on Monday, it does not matter which comes first.


  sortMeetingsByDay(arr) {
    const week = {
      Monday: 0,
      Tuesday: 1,
      Wednesday: 2,
      Thursday: 3,
      Friday: 4,
    };

    return arr.sort((a, b) => week[a.dayOfWeek] - week[b.dayOfWeek]);
  }


  // This challenge should use the array of meetings from challenge 9, above.
  // Sort the meetings in the order that they start. If two meetings start at the same time on the same day, the shorter meeting should come first.
  // You DO NOT need to use your solution to Challenge 9 in completing Challenge 10.

  sortSchedule(arr) {

    const week = {
      Monday: 0,
      Tuesday: 1,
      Wednesday: 2,
      Thursday: 3,
      Friday: 4,
    };

    return arr.sort((a, b) => {
      return (week[a.dayOfWeek] - week[b.dayOfWeek]) || (a.start > b.start ? 1 : (a.start < b.start ? -1 : 0)) || (a.end > b.end ? 1 : (a.end < b.end ? -1 : 0));
    });
  }
}

module.exports = ArrayMethods;
