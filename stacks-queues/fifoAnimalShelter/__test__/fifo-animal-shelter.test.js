'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');

describe('Animal Shelter functionality', () => {
  it('enqueue(animal) method to add an animal to the queue', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('dog');

    expect(shelter.queue).toEqual(['dog']);
  });

  it('dequeue(pref) method should have FIFO functionality and should remove the first enqueued item', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.dequeue('dog');
    expect(shelter.queue).toEqual(['dog', 'cat']);
  });

  it('dequeue(pref) method should return null if pref is not a dog or a cat', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.dequeue('floot');
    expect(shelter.dequeue()).toBeNull();
  });
});