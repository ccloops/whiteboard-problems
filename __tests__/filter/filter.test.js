'use strict';

const Filter = require('../../lib/interview-questions/filter/filter.js');

describe('Testing challenge 1', () => {
  let filter = new Filter();
  
  test('It should return an array containing only odd integers', () => {
    expect(filter.oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([1, 3, 5, 7, 9]);
    expect(filter.oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toStrictEqual(5);
    expect(filter.oddValues([2, 3, 4, 179])).toStrictEqual([3, 179]);
    expect(filter.oddValues([2, 4, 6, 8])).toStrictEqual([]);
  });
});

describe('Testing challenge 2', () => {
  let filter = new Filter();
  
  test('It should return an array containing only words that have vowels', () => {
    expect(filter.filterStringsWithVowels(['gregor', 'hound', 'xyz'])).toStrictEqual(['gregor', 'hound']);
    expect(filter.filterStringsWithVowels(['gregor', 'hound', 'xyz']).length).toStrictEqual(2);
    expect(filter.filterStringsWithVowels(['a', 'b', 'cdefg'])).toStrictEqual(['a', 'cdefg']);
    expect(filter.filterStringsWithVowels(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ''])).toStrictEqual(['a', 'e', 'i', 'o', 'u']);
  });

  test('It should not contain any words that do not contain vowels', () => {
    expect(filter.filterStringsWithVowels(['gregor', 'hound', 'xyz'])).not.toContain('xyz');
  });
});

describe('Testing challenge 3', () => {
  let filter = new Filter();
  const firstNums = [1, 2, 3];
  const secondNums = [1, 2, 3, 4];

  const firstStrings = ['Demi', 'Gregor', 'Hound'];
  const secondStrings = ['Gary', 'Charlotte', 'Demi', 'Gregor', 'Hound'];

  test('It should return an array that includes any elements not in the first array', () => {
    expect(filter.notInFirstArray(firstNums, secondNums)).toStrictEqual([4]);
    expect(filter.notInFirstArray(firstNums, secondNums).length).toStrictEqual(1);
  });

  test('It should also work with an array of strings', () => {
    expect(filter.notInFirstArray(firstStrings, secondStrings)).toStrictEqual(['Gary', 'Charlotte']);
    expect(filter.notInFirstArray(firstStrings, secondStrings).length).toStrictEqual(2);
  });

  test('It should work with empty arrays', () => {
    expect(filter.notInFirstArray([], [])).toStrictEqual([]);
    expect(filter.notInFirstArray([], [1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
    expect(filter.notInFirstArray([1, 2, 3, 4, 5], [])).toStrictEqual([]);
  });
});

describe('Testing challenge 4', () => {
  let filter = new Filter();

  const snorlaxData = {
    stats: [
      {
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

  test('It should return an array containing the stats that are greater than the input', () => {
    expect(filter.getBaseStatGreaterThan(snorlaxData.stats, 75)).toStrictEqual([{ stat: { url: 'https://pokeapi.co/api/v2/stat/5/', name: 'special-defense' }, effort: 2, baseStat: 110 }]);
    expect(filter.getBaseStatGreaterThan(snorlaxData.stats, 75).length).toStrictEqual(1);
    expect(filter.getBaseStatGreaterThan(snorlaxData.stats, 110)).toStrictEqual([]);
  });
  test('It should work for non-Snorlax data', () => {
    expect(filter.getBaseStatGreaterThan([{ baseStat: 10 }, { baseStat: -85 }, { baseStat: 0 }, { baseStat: -50 }], -60)).toStrictEqual([{ baseStat: 10 }, { baseStat: 0 }, { baseStat: -50 }]);
  });
});

describe('Testing challenge 5', () => {
  let filter = new Filter();

  const snorlaxData = {
    stats: [
      {
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

  test('It should return the name of the stats that exceed that maximum', () => {
    expect(filter.getStatName(snorlaxData.stats, 50)).toStrictEqual(['special-defense', 'special-attack']);
    expect(filter.getStatName(snorlaxData.stats, 50).length).toStrictEqual(2);
  });

  test('It should return the name of the stats that exceed that maximum', () => {
    expect(filter.getStatName(snorlaxData.stats, 120)).toStrictEqual([]);
    expect(filter.getStatName(snorlaxData.stats, 120).length).toStrictEqual(0);
  });

  test('It should work for non-snorlax data', () => {
    expect(filter.getStatName([
      { baseStat: 10, stat: { name: 'one' } },
      { baseStat: -85, stat: { name: 'two' } },
      { baseStat: 0, stat: { name: 'three' } },
      { baseStat: -50, stat: { name: 'four' } },
    ], -60)).toStrictEqual(['one', 'three', 'four']);
  });
});

describe('Testing challenge 6', () => {
  let filter = new Filter();

  const characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark',
    },
    {
      name: 'Jon',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn',
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister',
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen',
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell',
    },
    {
      name: 'Sansa',
      spouse: 'Tyrion',
      house: 'Stark',
    },
    {
      name: 'Jon',
      spouse: null,
      house: 'Snow',
    },
  ];

  test('It should return an array containing characters who do not have children', () => {
    expect(filter.getCharactersWithoutChildren(characters)).toStrictEqual([{ name: 'Sansa', spouse: 'Tyrion', house: 'Stark' }, { name: 'Jon', spouse: null, house: 'Snow' }]);
    expect(filter.getCharactersWithoutChildren(characters).length).toStrictEqual(2);
  });
});

describe('Testing challenge 7', () => {
  let filter = new Filter();

  test('It should remove non-integers and return "even" or "odd', () => {
    expect(filter.evenOddNumericValues(['Gregor', 2, 4, 1])).toStrictEqual(['even', 'even', 'odd']);
    expect(filter.evenOddNumericValues(['Gregor', 2, 4, 1]).length).toStrictEqual(3);
    expect(filter.evenOddNumericValues(['a', 'b', 'c'])).toStrictEqual([]);
  });
  test('It should not accept strings that look like numbers', () => {
    expect(filter.evenOddNumericValues(['1', 2, 3, '4', 5, '6'])).toStrictEqual(['even', 'odd', 'odd']);
  });
});