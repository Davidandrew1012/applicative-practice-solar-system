export function minBy(array, cb) {
    let lowest = undefined;
    let lowestValue = undefined;
    for (let i = 0; i < array.length; i++) {
      const currentValue = cb(array[i]);
      if (lowestValue === undefined || currentValue < lowestValue) {
        lowest = array[i];
        lowestValue = currentValue;
      }
    }
    return lowest;
  }
  
  export function maxBy(array, cb) {
    let highest = undefined;
    let highestValue = undefined;
    for (let i = 0; i < array.length; i++) {
      const currentValue = cb(array[i]);
      if (highestValue === undefined || currentValue > highestValue) {
        highest = array[i];
        highestValue = currentValue;
      }
    }
    return highest;
  }

