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

    if (pref === 'cat') {
      // if (!this.queue.includes(pref)) {
      //   return this.queue.pop();
      // }
      for (let i = this.queue.length - 1; i > 0; i--) {
        if (this.queue[i].type === 'cat') {
          console.log(`cat at index ${i}`);
          console.log('pref should be a cat, this.queue[i]:', this.queue[i]);
          valueToBeReturned = this.queue[i];
        }
      }
      // } else if (pref === 'dog') {
      //   if (!this.queue.includes(pref)) {
      //     return this.queue.pop();
      //   }
      //   for (let i = valueToBeReturned.length - 1; i > 0; i--) {
      //     if (this.queue[i] === 'dog') {
      //       console.log(`dog at index ${i}`);
      //       console.log('pref should be a dog', pref);
      //       return pref;
      //     }
      //   }
    } else {
      valueToBeReturned = null;
    }
    console.log('valueToBeReturned', valueToBeReturned);
    return valueToBeReturned;
  }
}

module.exports = AnimalShelter;