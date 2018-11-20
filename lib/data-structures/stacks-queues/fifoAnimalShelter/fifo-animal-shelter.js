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
    if(pref === undefined) {
      return this.queue.pop();
    }

    let animalTypes = this.queue.map(animal => animal.type);
    if(!animalTypes.includes(pref)) {
      return null;
    }

    if (pref === 'cat') {
      for (let i = this.queue.length - 1; i > 0; i--) {
        if (this.queue[i].type === 'cat') {
          return this.queue.splice(i, 1)[0];
        } 
      }
    } else if (pref === 'dog') {
      for (let i = this.queue.length - 1; i > 0; i--) {
        if (this.queue[i].type === 'dog') {
          return this.queue.splice(i, 1)[0];
        } 
      }
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;