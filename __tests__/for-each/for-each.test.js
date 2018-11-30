const ForEach = require('../../lib/interview-questions/for-each/for-each.js');

describe('Testing challenge 1', () => {
  let forEach = new ForEach();
  
  test('It should return the message with all uppercase characters', () => {
    expect(forEach.speaker('hello 301 students!', forEach.greeting)).toStrictEqual('HELLO 301 STUDENTS!');
  });
});

describe('Testing challenge 2', () => {
  let forEach = new ForEach();

  test('It should add the number 8 to the array five times', () => {
    expect(forEach.addNumbers(8, [], 5, forEach.addValues)).toStrictEqual([8, 8, 8, 8, 8]);
    expect(forEach.addNumbers(8, [], 5, forEach.addValues).length).toStrictEqual(5);
  });
});

describe('Testing challenge 3', () => {
  let forEach = new ForEach();

  test('It should remove three elements from the array', () => {
    expect(forEach.removeElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], forEach.removeOne)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(forEach.removeElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], forEach.removeOne).length).toStrictEqual(7);
  });
});

describe('Testing challenge 4', () => {
  let forEach = new ForEach();

  test('It should remove three elements from the array', () => {
    expect(forEach.removeWithForEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], forEach.removeOne)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(forEach.removeWithForEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], forEach.removeOne).length).toStrictEqual(7);
  });
});

describe('Testing challenge 5', () => {
  let forEach = new ForEach();

  test('It should remove three elements from the array', () => {
    expect(forEach.removeWithAnon([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(forEach.removeWithAnon([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toStrictEqual(7);
  });
});

describe('Testing challenge 6', () => {
  let forEach = new ForEach();

  const inventory = [{
    name: 'apples',
    available: true,
  }, {
    name: 'pears',
    available: true,
  }, {
    name: 'oranges',
    available: false,
  }, {
    name: 'bananas',
    available: true,
  }, {
    name: 'blueberries',
    available: false,
  }];

  test('It should only add the available items to the list', () => {
    expect(forEach.createList(inventory)).toStrictEqual(['apples', 'pears', 'bananas']);
    expect(forEach.createList(inventory).length).toStrictEqual(3);
  });
});

describe('Testing challenge 7', () => {
  let forEach = new ForEach();

  const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  test('It should print out messages or numbers', () => {
    expect(forEach.fizzbuzz(inputs)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
    expect(forEach.fizzbuzz(inputs).length).toStrictEqual(16);
  });
});