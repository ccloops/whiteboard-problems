'use strict';

const PassBy = require('../../lib/interview-questions/pass-by/pass-by.js');

describe('Testing challenge 1', () => {
  let passBy = new PassBy();

  test('It should append without modifying the oiginal', () => {
    const a = 'This is my story.';
    const b = passBy.appendTheEnd(a);

    expect(a).toStrictEqual('This is my story.');
    expect(b).toStrictEqual('This is my story. The end.');
  });
});

describe('Testing challenge 2', () => {
  let passBy = new PassBy();

  test('It should append by modifying the oiginal', () => {
    const a = ['Yes', 'it', 'is'];
    passBy.appendFirstToLast(a);

    expect(a).toStrictEqual(['Yes', 'it', 'is', 'Yes']);
  });
});

describe('Testing challenge 3', () => {
  let passBy = new PassBy();

  test('It should add a property to an object', () => {
    const a = {
      fullName: 'Octavia Butler',
    };
    passBy.addBirthYearProperty(a, 1947);

    expect(a.yearBorn).toStrictEqual(1947);
  });
});

describe('Testing challenge 4', () => {
  let passBy = new PassBy();

  test('It should add a property to every object in an array', () => {
    const a = [{
      fullName: 'Octavia Butler',
    }, {
      fullName: 'Ray Bradbury',
    }, {
      fullName: 'Kurt Vonnegut',
    }];
    passBy.setStatusAsAuthor(a);

    expect(a[0].isAuthor).toStrictEqual(true);
    expect(a[1].isAuthor).toStrictEqual(true);
    expect(a[2].isAuthor).toStrictEqual(true);
  });
});

describe('Testing challenge 5', () => {
  let passBy = new PassBy();

  test('It should append the second array to the first', () => {
    const a = [1, 2, 3, 4];
    const b = [5, 6, 7, 8];
    passBy.append(a, b);

    expect(a).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});