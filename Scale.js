import _ from 'lodash';
export class Scale {
  constructor() {
    this.array = [];
  }

  weight(left, right) {
    //TODO
    if (_.isEqual(left, right)) {
      return true;
    }
    return false;
  }

  checkResult({index, isWeight}) {
    //TODO
    const result = [
      {index: 1, isWeight: 'Lighter'},
      {index: 2, isWeight: 'Lighter'},
      {index: 3, isWeight: 'Lighter'},
      {index: 4, isWeight: 'Lighter'},
      {index: 5, isWeight: 'Lighter'},
      {index: 6, isWeight: 'Lighter'},
      {index: 7, isWeight: 'Lighter'},
      {index: 8, isWeight: 'Lighter'},
      {index: 9, isWeight: 'Lighter'},
      {index: 10, isWeight: 'Lighter'},
      {index: 11, isWeight: 'Lighter'},
      {index: 12, isWeight: 'Lighter'},
      {index: 1, isWeight: 'Heavier'},
      {index: 2, isWeight: 'Heavier'},
      {index: 3, isWeight: 'Heavier'},
      {index: 4, isWeight: 'Heavier'},
      {index: 5, isWeight: 'Heavier'},
      {index: 6, isWeight: 'Heavier'},
      {index: 7, isWeight: 'Heavier'},
      {index: 8, isWeight: 'Heavier'},
      {index: 9, isWeight: 'Heavier'},
      {index: 10, isWeight: 'Heavier'},
      {index: 11, isWeight: 'Heavier'},
      {index: 12, isWeight: 'Heavier'}
    ];
    let answer = {index: index, isWeight: isWeight};
    for(let i = 0; i < result.length; i++) {
      if(this.weight(result[i], answer[i])) {
        console.log(answer, true);
        return true;
      }
      console.log(answer, false);
      return false;
    }
    
  }

  findHeavierLighter(fault, normal) {
    if (_.sum(fault) < _.sum(normal)) {
      if (fault[0] = fault[1]) {
        console.log(fault[0]);
        return { index: 2, isWeight: 'Lighter' }
      }
      if (fault[0] < fault[1]) {
        return { index: 0, isWeight: 'Lighter' }
      }
      else {
        return { index: 1, isWeight: 'Lighter' }
      }
    }
    if (_.sum(fault) > _.sum(normal)) {
      if (this.weight(fault[0], fault[1])) {
        return { index: 2, isWeight: 'Heavier' }
      }
      if (fault[0] > fault[1]) {
        return { index: 0, isWeight: 'Heavier' }
      }
      else {
        return { index: 1, isWeight: 'Heavier' }
      }
    }
  }

  compare3Group(lighter, heavier, normal) {
    if (this.weight(lighter, normal)) {
      //hevier loi
      if (this.weight(heavier[0], heavier[1])) {
        return { index: 2, isWeight: 'Heavier' };
      }
      else {
        if (heavier[0] < heavier[1]) {
          return { index: 0, isWeight: 'Heavier' };
        }
        else {
          return { index: 1, isWeight: 'Heavier' };
        }
      }
    }
    else {
      //lighter loi
      if (this.weight(lighter[0], lighter[1])) {
        return { index: 2, isWeight: 'Lighter' };
      }
      else {
        if (lighter[0] < lighter[1]) {
          return { index: 0, isWeight: 'Lighter' };
        }
        else {
          return { index: 1, isWeight: 'Lighter' };
        }
      }
    }
  }
}