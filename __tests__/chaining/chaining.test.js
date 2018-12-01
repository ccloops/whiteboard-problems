'use strict';

const Chaining = require('../../lib/interview-questions/chaining/chaining.js');

describe('Testing challenge 1', () => {
  let chaining = new Chaining();

  test('It should return the number of times the input is in the nested arrays', () => {
    expect(chaining.count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
    expect(chaining.count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(2);
    expect(chaining.count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(0);
  });
  test('It should work on empty arrays', () => {
    expect(chaining.count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])).toStrictEqual(4);
    expect(chaining.count(5, [])).toStrictEqual(0);
  });
});

describe('Testing challenge 2', () => {
  let chaining = new Chaining();

  test('It should add all the numbers in the arrays', () => {
    const nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6]];

    expect(chaining.totalSum(nums)).toStrictEqual(66);
  });
});

xdescribe('Testing challenge 3', () => {
  let chaining = new Chaining();

  test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', () => {
    expect(chaining.divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
  });

  test('It should return an empty array if none of the numbers are divisible by five', () => {
    expect(chaining.divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]])).toStrictEqual([[], [32, 1024, 32768]]);
  });

  test('It should return an empty array if the values are not numbers', () => {
    expect(chaining.divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]])).toStrictEqual([[], [], [32]]);
  });
});

xdescribe('Testing challenge 4', () => {
  let chaining = new Chaining();

  let starWarsData = [{
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  }];

  test('It should return only characters that are male or female', () => {
    expect(chaining.findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
    expect(chaining.findMaleAndFemale([{ name: 'person', gender: 'female' }, { gender: 'lol' }, { name: 'persontwo', gender: 'male' }])).toStrictEqual('person and persontwo');
  });
});

xdescribe('Testing chalenge 5', () => {
  let chaining = new Chaining();

  let starWarsData = [{
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  }];
  
  test('It should return the name of the shortest character', () => {
    expect(chaining.findShortest(starWarsData)).toStrictEqual('R2-D2');
  });
});