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

  it('dequeue(pref) method should have FIFO functionality and should remove the first enqueued item', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue(new Animal('dog', 'sport'));
    shelter.enqueue(new Animal('cat', 'mooshy'));
    shelter.enqueue(new Animal('dog', 'mabel'));
    shelter.dequeue('cat');
    expect(shelter.queue).toEqual([{ 'name': 'mabel', 'type': 'dog' }, { 'name': 'mooshy', 'type': 'cat' }]);
  });

  xit('dequeue(pref) method should return null if pref is not a dog or a cat', () => {
    let shelter = new AnimalShelter();
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.dequeue('floot');
    expect(shelter.dequeue()).toBeNull();
  });
});