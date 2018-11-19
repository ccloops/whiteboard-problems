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

    if(pref === 'cat' || pref === 'dog') {
      valueToBeReturned = this.queue.pop();
      console.log('value', valueToBeReturned);
    }
    else {
      valueToBeReturned = null;
      
      console.log('value', valueToBeReturned);
    }
    console.log(valueToBeReturned);
    return valueToBeReturned;
  }
  // get highestPriority() {}
}

module.exports = AnimalShelter;