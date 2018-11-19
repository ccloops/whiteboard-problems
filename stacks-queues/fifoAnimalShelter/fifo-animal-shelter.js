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

    if(pref.type === 'cat') {
      // if(this.queue.includes('cat'));
      for(let i = valueToBeReturned.length - 1; i > 0; i--) {
        if(this.queue[i] === 'cat') {
          console.log(`cat at index ${i}`);
        }
      }
      console.log('cat is included');
    }

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