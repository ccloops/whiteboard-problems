'use strict';

const ArrayMethods = require('../../lib/interview-questions/array-methods/array-methods.js');

describe('Testing challenge 1', () => {
  let arrayMethods = new ArrayMethods();

  test('It should sort high-to-low the numbers in an array', () => {
    const nums = [3, 4, 5, 6, 7];
    expect(arrayMethods.sortBackwards(nums)).toStrictEqual([7, 6, 5, 4, 3]);
    expect(arrayMethods.sortBackwards([3, 2, 1])).toStrictEqual([3, 2, 1]);
    expect(arrayMethods.sortBackwards([12, 20, 3])).toStrictEqual([20, 12, 3]);
    expect(arrayMethods.sortBackwards([])).toStrictEqual([]);
    expect(arrayMethods.sortBackwards([1])).toStrictEqual([1]);
  });
});

describe('Testing challenge 2', () => {
  let arrayMethods = new ArrayMethods();

  test('It should sort strings alphabetically', () => {
    expect(arrayMethods.alphabetize(['alphabet', 'Zebra', 'Alphabet', 'carrot'])).toStrictEqual(['Alphabet', 'Zebra', 'alphabet', 'carrot']);
    expect(arrayMethods.alphabetize(['alphabet', 'Alphabet', 'carrot'])).toStrictEqual(['Alphabet', 'alphabet', 'carrot']);
    expect(arrayMethods.alphabetize([])).toStrictEqual([]);
  });
});

describe('Testing challenge 3', () => {
  let arrayMethods = new ArrayMethods();

  test('It should sort strings by length', () => {
    const ans = arrayMethods.sortByLength(['alphabet', 'Zebra', 'Alphabet', 'carrot']);
    expect(ans.slice(0, 2)).toStrictEqual(['Zebra', 'carrot']);
    expect(ans.slice(2, 4)).toEqual(expect.arrayContaining(['Alphabet', 'alphabet']));
    expect(arrayMethods.sortByLength(['a', 'bc', ''])).toStrictEqual(['', 'a', 'bc']);
    expect(arrayMethods.sortByLength(['a'])).toStrictEqual(['a']);
    expect(arrayMethods.sortByLength([])).toStrictEqual([]);
  });
});

describe('Testing challenge 4', () => {
  let arrayMethods = new ArrayMethods();

  test('It should alphabetize without regard to capitalization', () => {
    expect(arrayMethods.alphabetizeBetter(['Alice', 'apple', 'alert', 'Average'])).toStrictEqual(['alert', 'Alice', 'apple', 'Average']);
    const ans = arrayMethods.alphabetizeBetter(['alphabet', 'Zebra', 'Alphabet', 'carrot']);
    expect(ans.slice(0, 2)).toEqual(expect.arrayContaining(['Alphabet', 'alphabet']));
    expect(ans.slice(2)).toStrictEqual(['carrot', 'Zebra']);
  });
});

describe('Testing challenge 5', () => {
  let arrayMethods = new ArrayMethods();

  test('It should sort items by their price', () => {
    expect(arrayMethods.sortByPrice([{
      name: 'Sweatshirt',
      price: 45,
    },
    {
      name: 'Bookmark',
      price: 2.50,
    },
    {
      name: 'Tote bag',
      price: 15,
    },
    ])).toStrictEqual([{
      name: 'Bookmark',
      price: 2.50,
    },
    {
      name: 'Tote bag',
      price: 15,
    },
    {
      name: 'Sweatshirt',
      price: 45,
    },
    ]);
    expect(arrayMethods.sortByPrice([{
      price: 12,
    }, {
      price: 10,
    }])).toStrictEqual([{
      price: 10,
    }, {
      price: 12,
    }]);
    expect(arrayMethods.sortByPrice([])).toStrictEqual([]);
  });
});

xdescribe('Testing challenge 6', () => {
  let arrayMethods = new ArrayMethods();

  test('It should sort numbers by their length', () => {
    expect(arrayMethods.sortNumbersByLength([10, 2.8, 1, -47.75])).toStrictEqual([1, 10, 2.8, -47.75]);
    expect(arrayMethods.sortNumbersByLength([100, 2.82, 1, -47.75])).toStrictEqual([1, 100, 2.82, -47.75]);
    expect(arrayMethods.sortNumbersByLength([1, 2, 3])).toEqual(expect.arrayContaining([1, 2, 3]));
  });
});

describe('Testing challenge 7', () => {
  let arrayMethods = new ArrayMethods();

  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  const people = [
    new Person('Wes', 'Washington', 25),
    new Person('Casey', 'Codefellow', 38),
    new Person('Stan', 'Seattle', 67),
  ];

  test('It should sort people by their last names', () => {
    expect(arrayMethods.sortPeople(people)).toStrictEqual([
      new Person('Casey', 'Codefellow', 38),
      new Person('Stan', 'Seattle', 67),
      new Person('Wes', 'Washington', 25),
    ]);
    expect(arrayMethods.sortPeople([{
      lastName: 'banana',
    }, {
      lastName: 'apple',
    }]))
      .toStrictEqual([{
        lastName: 'apple',
      }, {
        lastName: 'banana',
      }]);
  });
});

describe('Testing challenge 8', () => {
  let arrayMethods = new ArrayMethods();

  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  test('It should sort people with more strict ordering', () => {
    const family = [
      new Person('Casey', 'Codefellows', 55),
      new Person('Casey', 'Codefellows', 37),
      new Person('Charlie', 'Codefellows', 21),
      new Person('Charles', 'Codefellows', 29),
      new Person('Carol', 'Codefellow', 88),
    ];
    expect(arrayMethods.sortPeopleBetter(family)).toStrictEqual([
      new Person('Carol', 'Codefellow', 88),
      new Person('Casey', 'Codefellows', 37),
      new Person('Casey', 'Codefellows', 55),
      new Person('Charles', 'Codefellows', 29),
      new Person('Charlie', 'Codefellows', 21),
    ]);
    expect(arrayMethods.sortPeopleBetter([{
      firstName: 'andrew',
      lastName: 'apple',
    }, {
      firstName: 'andre',
      lastName: 'apple',
    }]))
      .toStrictEqual([{
        firstName: 'andre',
        lastName: 'apple',
      }, {
        firstName: 'andrew',
        lastName: 'apple',
      }]);
  });
});

describe('Testing challenge 9', () => {
  let arrayMethods = new ArrayMethods();

  function Meeting(dayOfWeek, start, end) {
    this.dayOfWeek = dayOfWeek;
    this.start = start;
    this.end = end;
  }
  const meetings = [
    new Meeting('Monday', '0900', '1000'),
    new Meeting('Wednesday', '1300', '1500'),
    new Meeting('Tuesday', '1145', '1315'),
    new Meeting('Wednesday', '0930', '1000'),
    new Meeting('Monday', '0900', '0945'),
    new Meeting('Friday', '1200', '1345'),
  ];

  test('It should sort meetings by the day on which they happen', () => {
    const sortedMeetings = arrayMethods.sortMeetingsByDay(meetings);
    expect(sortedMeetings.slice(0, 2)).toEqual(expect.arrayContaining([new Meeting('Monday', '0900', '0945'), new Meeting('Monday', '0900', '1000')]));
    expect(sortedMeetings[2]).toStrictEqual(new Meeting('Tuesday', '1145', '1315'));
    expect(sortedMeetings.slice(3, 5)).toEqual(expect.arrayContaining([new Meeting('Wednesday', '0930', '1000'), new Meeting('Wednesday', '1300', '1500')]));
    expect(sortedMeetings[5]).toStrictEqual(new Meeting('Friday', '1200', '1345'));
  });
});

describe('Testing challenge 10', () => {
  let arrayMethods = new ArrayMethods();

  function Meeting(dayOfWeek, start, end) {
    this.dayOfWeek = dayOfWeek;
    this.start = start;
    this.end = end;
  }
  const meetings = [
    new Meeting('Monday', '0900', '1000'),
    new Meeting('Wednesday', '1300', '1500'),
    new Meeting('Tuesday', '1145', '1315'),
    new Meeting('Wednesday', '0930', '1000'),
    new Meeting('Monday', '0900', '0945'),
    new Meeting('Friday', '1200', '1345'),
  ];

  test('It should sort meetings by when they happen', () => {
    expect(arrayMethods.sortSchedule(meetings)).toStrictEqual([
      new Meeting('Monday', '0900', '0945'),
      new Meeting('Monday', '0900', '1000'),
      new Meeting('Tuesday', '1145', '1315'),
      new Meeting('Wednesday', '0930', '1000'),
      new Meeting('Wednesday', '1300', '1500'),
      new Meeting('Friday', '1200', '1345'),
    ]);
  });
});