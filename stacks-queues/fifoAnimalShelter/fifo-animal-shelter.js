'use strict';

class AnimalShelter {
  constructor() {
    this.queue = [];
  }

  enqueue(animal) {
    this.queue.unshift(animal);
    return this;
  }

  dequeue(pref) {
    let valueToBeReturned;

    if(pref !== 'cat' || pref !== 'dog')
      valueToBeReturned = null;
    else {
      valueToBeReturned = this.queue.pop();
      console.log('value', valueToBeReturned);
    }
    return valueToBeReturned;
  }
  // get highestPriority() {}
}

module.exports = AnimalShelter;