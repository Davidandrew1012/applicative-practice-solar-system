export function minBy(array, cb) {
    let lowest = undefined;
    for (let i = 0; i < array.length; i++) {
      if (!lowest || cb(array[i]) < cb(lowest)) {
        lowest = array[i];
      }
    }
    return lowest;
  }
  
  export function maxBy(array, cb) {
    let highest = undefined;
    for (let i = 0; i < array.length; i++) {
      const currentValue = cb(array[i]);
      if (!highest || cb(array[i]) > cb(highest)) {
        highest = array[i];
      }
    }
    return highest;
  }

