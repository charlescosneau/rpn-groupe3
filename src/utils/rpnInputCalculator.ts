export const additionCalculation = (firstNumber: number, secondNumber: number) => {
  return (firstNumber) + (secondNumber);
};

export const substractionCalculation = (firstNumber: number, secondNumber: number) => {
  return (firstNumber) - (secondNumber);
};

export const multiplicationCalculation = (firstNumber: number, secondNumber: number) => {
  return (firstNumber) * (secondNumber);
};

export const divisionCalculation = (firstNumber: number, secondNumber: number) => {
  return (firstNumber) / (secondNumber);
};

export function calculate(operation: (number | string)[]): number | string {
  let result: number | string = 0;
  for (let i = 0; i < operation.length; i++) {
    if (operation.length > 1) {
      if (!+operation[i]) {
        if (operation[i] === '+') {
          result = additionCalculation(Number(operation[i - 2]), Number(operation[i - 1]));
        } else if (operation[i] === '-') {
          result = substractionCalculation(Number(operation[i - 2]), Number(operation[i - 1]));
        } else if (operation[i] === '*') {
          result = multiplicationCalculation(Number(operation[i - 2]), Number(operation[i - 1]));
        } else if (operation[i] === '/') {
          result = divisionCalculation(Number(operation[i - 2]), Number(operation[i - 1]));
        } else {
          result = "Mauvaise operation";
        }
        operation.splice(i - 2, 3);
        operation.splice(i -2, 0, result);
        i = 0;
      }
    } else {
      return operation[0];
    }
  }
  if (!result) {
    result = "Mauvaise operation"; 
  }
  return result;
}