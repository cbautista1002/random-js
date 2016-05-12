'use strict';

class Feeling{

  constructor(){
    this.funLevel = 0;
  }

  increaseFL(){
    this.funLevel++;
  }

}


module.exports.Play = class Play extends Feeling{

  constructor(first){
    super();
    this.first = first;
  }

  get second(){
    return ++this.first;
  }

  printAll(){
    console.log(`F: ${this.first}\nS: ${this.second}`);
  }

};

module.exports.Work = class Work extends Feeling{

  constructor(f){
    super();
    console.log(`FL 1: ${this.funLevel}`);
    this.funLevel = f;
    console.log(`FL 2: ${this.funLevel}`);
  }

}