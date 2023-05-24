export const CounterReducer = (counter, {type}) => {
  switch (type) {
      case 'reduceCounter':
          return counter-1;
      case 'increaseCounter':
          return counter+1;
      case 'resetCounter':
          return 0;
      default:
          throw 'Action type does not exist'
  }
}
