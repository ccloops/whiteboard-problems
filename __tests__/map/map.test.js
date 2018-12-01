'use strict';

const MapFunctions = require('../../lib/interview-questions/map/map.js');

describe('Testing challenge 1', () => {
  let mapFunctions = new MapFunctions();
  
  test('It should return two raised to the power of the integer', () => {
    expect(mapFunctions.forLoopTwoToThe([0, 4, 5])).toStrictEqual([1, 16, 32]);
    expect(mapFunctions.forLoopTwoToThe([0, 4, 5]).length).toStrictEqual(3);
  });

  test('It should return decimals if the integer is negative', () => {
    expect(mapFunctions.forLoopTwoToThe([-1, -2, -3])).toStrictEqual([0.5, 0.25, 0.125]);
  });
});

describe('Testing challenge 2', () => {
  let mapFunctions = new MapFunctions();

  test('It should return two raised to the power of the integer', () => {
    expect(mapFunctions.forEachTwoToThe([0, 4, 5])).toStrictEqual([1, 16, 32]);
    expect(mapFunctions.forEachTwoToThe([0, 4, 5]).length).toStrictEqual(3);
  });

  test('It should return decimals if the integer is negative', () => {
    expect(mapFunctions.forEachTwoToThe([-1, -2, -3])).toStrictEqual([0.5, 0.25, 0.125]);
  });
});

describe('Testing challenge 3', () => {
  let mapFunctions = new MapFunctions();

  test('It should return two raised to the power of the integer', () => {
    expect(mapFunctions.mapTwoToThe([0, 4, 5])).toStrictEqual([1, 16, 32]);
    expect(mapFunctions.mapTwoToThe([0, 4, 5]).length).toStrictEqual(3);
  });

  test('It should return decimals if the integer is negative', () => {
    expect(mapFunctions.mapTwoToThe([-1, -2, -3])).toStrictEqual([0.5, 0.25, 0.125]);
  });
});

describe('Testing challenge 4', () => {
  let mapFunctions = new MapFunctions();

  test('It should return an array containing the character code for each letter', () => {
    expect(mapFunctions.charCode(['C', 'o', 'd', 'e', '3', '0', '1'])).toStrictEqual([67, 111, 100, 101, 51, 48, 49]);
    expect(mapFunctions.charCode(['C', 'o', 'd', 'e', '3', '0', '1']).length).toStrictEqual(7);
  });
});

describe('Testing challenge 5', () => {
  let mapFunctions = new MapFunctions();

  test('It should return an array containing the keys from an object', () => {
    expect(mapFunctions.evenOdd([5, 8, 2, 6, 9, 13, 542, 541])).toStrictEqual(['odd', 'even', 'even', 'even', 'odd', 'odd', 'even', 'odd']);
    expect(mapFunctions.evenOdd([5, 8, 2, 6, 9, 13, 542, 541]).length).toStrictEqual(8);
  });

  test('It should work with all odd numbers', () => {
    let mapFunctions = new MapFunctions();

    expect(mapFunctions.evenOdd([1, 3, 5, 7, 9])).toStrictEqual(['odd', 'odd', 'odd', 'odd', 'odd']);
    expect(mapFunctions.evenOdd([1, 3, 5, 7, 9]).length).toStrictEqual(5);
  });

  test('It should work with all even numbers', () => {
    expect(mapFunctions.evenOdd([2, 4, 6, 8, 10])).toStrictEqual(['even', 'even', 'even', 'even', 'even']);
    expect(mapFunctions.evenOdd([2, 4, 6, 8, 10]).length).toStrictEqual(5);
  });

  test('It should return the string "N/A" if a non-number is included in the array', () => {
    expect(mapFunctions.evenOdd([5, 8, 2, 'hi'])).toStrictEqual(['odd', 'even', 'even', 'N/A']);
    expect(mapFunctions.evenOdd([5, 8, 2, 'hi']).length).toStrictEqual(4);
  });
});

describe('Testing challenge 6', () => {
  let mapFunctions = new MapFunctions();

  const snorlaxAbilities = {
    abilities: [{
      slot: 3,
      is_hidden: true,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/82/',
        name: 'gluttony',
      },
    },
    {
      slot: 2,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/56/',
        name: 'cute charm',
      },
    },
    {
      slot: 1,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/17/',
        name: 'immunity',
      },
    },
    ],
    name: 'snorlax',
    weight: 4600,
  };


  test('It should return an array containing only the ability names', () => {
    expect(mapFunctions.extractAbilities(snorlaxAbilities.abilities)).toStrictEqual(['gluttony', 'cute charm', 'immunity']);
    expect(mapFunctions.extractAbilities(snorlaxAbilities.abilities).length).toStrictEqual(3);
  });
});

describe('Testing challenge 7', () => {
  let mapFunctions = new MapFunctions();

  const snorlaxStats = {
    stats: [{
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
    ],
    name: 'snorlax',
    weight: 4600,
  };

  test('It should return an array containing objects with name and total values', () => {
    expect(mapFunctions.extractStats(snorlaxStats.stats)).toStrictEqual([{
      name: 'speed',
      total: 35,
    },
    {
      name: 'special-defense',
      total: 112,
    },
    {
      name: 'special-attack',
      total: 74,
    },
    ]);
    expect(mapFunctions.extractStats(snorlaxStats.stats).length).toStrictEqual(3);
  });
});

