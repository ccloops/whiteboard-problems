'use strict';

class AnimalShelter {
  constructor() {
    this.queue = [];
  }

  enqueue(animal) {
    // this.queue[this.queue.length] = animal;
    this.queue.push(animal);
    console.log(this);
    return this;
  }
}

module.exports = AnimalShelter;

let shelter = new AnimalShelter();

shelter.enqueue('dog');