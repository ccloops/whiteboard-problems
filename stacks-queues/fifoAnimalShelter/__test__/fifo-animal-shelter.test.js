'use strict';

const Animal = require('../lib/animal.js');
const AnimalShelter = require('../fifo-animal-shelter.js');

describe('Animal Shelter functionality', () => {
  it('enqueue(animal) method to add an animal to the queue', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue(new Animal('dog', 'sport'));

    expect(shelter.queue[0].type).toEqual('dog');
    expect(shelter.queue[0].name).toEqual('sport');
    expect(shelter.queue).toEqual([{'name': 'sport','type': 'dog'}]);
  });

  // it('dequeue(pref) method should have FIFO functionality and should remove the first enqueued item', () => {
  //   let shelter = new AnimalShelter();
  //   shelter.enqueue(new Animal('dog', 'sport'));
  //   shelter.enqueue(new Animal('cat', 'mooshy'));
  //   shelter.enqueue(new Animal('dog', 'mabel'));
  //   shelter.dequeue('cat');
  //   expect(shelter.queue).toEqual([{ 'name': 'mabel', 'type': 'dog' }, { 'name': 'mooshy', 'type': 'cat' }]);
  // });

  // If a cat or dog isn’t preferred, return whichever animal has been waiting in the shelter the longest.

  // dequeue(pref): returns either a dog or a cat. If pref, a string, is ‘cat’ return the longest-waiting cat (or null if none available.) If pref is ‘dog’, return the longest-waiting dog (or null if none available.) For any other preference (including undefined) return null.

  it('dequeue(pref) method should return the longest-waiting cat if the value of pref is cat', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue(new Animal('dog', 'sport'));
    shelter.enqueue(new Animal('cat', 'lola'));
    shelter.enqueue(new Animal('cat', 'mooshy'));
    shelter.enqueue(new Animal('cat', 'big kitten'));
    shelter.enqueue(new Animal('dog', 'mabel'));
    expect(shelter.dequeue('cat')).toEqual({ 'type': 'cat', 'name': 'lola' });
  });

  it('dequeue(pref) method should return the longest-waiting dog if the value of pref is dog', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue(new Animal('dog', 'sport'));
    shelter.enqueue(new Animal('cat', 'lola'));
    shelter.enqueue(new Animal('cat', 'mooshy'));
    shelter.enqueue(new Animal('cat', 'big kitten'));
    shelter.enqueue(new Animal('dog', 'mabel'));
    expect(shelter.dequeue('dog')).toEqual({ 'type': 'dog', 'name': 'sport' });
  });

  it('dequeue(pref) method should return null if pref is not a dog or a cat', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue(new Animal('dog', 'sport'));
    shelter.enqueue(new Animal('cat', 'mooshy'));
    shelter.enqueue(new Animal('dog', 'mabel'));
    shelter.dequeue('floot');
    expect(shelter.dequeue()).toBeNull();
  });

  it('dequeue(pref) method should return null if pref is a cat, but the queue does not contain any cats', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue(new Animal('dog', 'sport'));
    shelter.enqueue(new Animal('dog', 'mabel'));
    shelter.enqueue(new Animal('dog', 'summer'));
    expect(shelter.dequeue('cat')).toBeNull();
  });
});