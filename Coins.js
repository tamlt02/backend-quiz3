import { Scale } from './Scale.js';
import _ from 'lodash';

const scale = new Scale()

function findCoinsDefect() {

  scale.array = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const shuffle = [
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
  ];
  for (let i = 0; i < shuffle.length; i =+ 1) {
    console.log(shuffle[i]);
    let array1 = _.slice(shuffle[i], 0, 3);
    let array2 = _.slice(shuffle[i], 3, 6);
    let array3 = _.slice(shuffle[i], 6, 9);
    let array4 = _.slice(shuffle[i], 9, 12);
    console.log(array2);
    if (scale.weight(array1, array2)) {
      if (scale.weight(array2, array3)) {
        let resultCoin = scale.findHeavierLighter(array4, array1);
        resultCoin.index += 10;
        return resultCoin;
      }
      else {
        let resultCoin = scale.findHeavierLighter(array3, array1);
        resultCoin.index += 7;
        return resultCoin;
      }
    }
    else {
      if (_.sum(array1) < _.sum(array2)) {
        let resultCoin = scale.compare3Group(array1, array2, array3);
        if (scale.weight(array2, array3)) {
          resultCoin.index += 1;
        }
        else {
          resultCoin.index += 4;
        }
        return resultCoin;
      }
      else {
        //array1 loi 
        let resultCoin = scale.compare3Group(array2, array1, array3);
        if (scale.weight(array2, array3)) {
          resultCoin.index += 1;
        }
        else {
          resultCoin.index += 4;
        }
        return resultCoin;
      }
    }
  }
}


console.log(findCoinsDefect());
//scale.checkResult(findCoinsDefect());