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
    let animalTypes = this.queue.map(animal => animal.type);
    if(!animalTypes.includes(pref)) {
      return null;
    }

    if (pref === 'cat') {
      for (let i = this.queue.length - 1; i > 0; i--) {
        if (this.queue[i].type === 'cat') {
          console.log('pref should be a cat, this.queue[i]:', this.queue[i]);
          return this.queue[i];
        } 
      }
    } else if (pref === 'dog') {
      for (let i = this.queue.length - 1; i > 0; i--) {
        if (this.queue[i].type === 'dog') {
          console.log('pref should be a dog, this.queue[i]', this.queue[i]);
          return this.queue[i];
        } 
      }
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;