import { additionCalculation , substractionCalculation, multiplicationCalculation , divisionCalculation } from './calculate';

export function calculate(operation: (number | string)[]): number | string {
  console.log(operation);
  let result: number | string = 0;
  for (let i = 0; i < operation.length; i++) {
    if (operation.length > 1) {
      if (!+operation[i] && +operation[i] !== 0) {
        if (operation[i] === '+') {
          result = additionCalculation(Number(operation[i - 2]), Number(operation[i - 1]));
        } else if (operation[i] === '-') {
          result = substractionCalculation(Number(operation[i - 2]), Number(operation[i - 1]));
        } else if (operation[i] === '*') {
          result = multiplicationCalculation(Number(operation[i - 2]), Number(operation[i - 1]));
        } else if (operation[i] === '/') {
          result = divisionCalculation(Number(operation[i - 2]), Number(operation[i - 1]));
        } else {
          return "Mauvaise syntaxe";
        }
        operation.splice(i - 2, 3);
        operation.splice(i - 2, 0, result);
        i = 0;
      }
    }
  }
  console.log(operation);
  return operation[0];
}