export const additionCalculation = (firstNumber: number, secondNumber: number) => {
  return firstNumber + secondNumber;
};

export const substractionCalculation = (firstNumber: number, secondNumber: number) => {
  return firstNumber - secondNumber;
};

export const multiplicationCalculation = (firstNumber: number, secondNumber: number) => {
  return firstNumber * secondNumber;
};

export const divisionCalculation = (firstNumber: number, secondNumber: number) => {
  return firstNumber / secondNumber;
};

export default function calculate(operation: (number | string)[]): number | string {
  let result: number | string = 0;
  while (operation.length > 1) {
    operation.forEach((caracter: number | string, index: number) => {
      if (caracter === '+') {
        result = additionCalculation(Number(operation[index - 2]), Number(operation[index - 1]));
      } else if (caracter === '-') {
        result = substractionCalculation(Number(operation[index - 2]), Number(operation[index - 1]));
      } else if (caracter === '*') {
        result = multiplicationCalculation(Number(operation[index - 2]), Number(operation[index - 1]));
      } else if (caracter === '/') {
        result = divisionCalculation(Number(operation[index - 2]), Number(operation[index - 1]));
      } else if (+caracter) {
        return;
      } else {
        result = "Mauvaise operation"
      }
      operation.splice(index - 2, 3);
      operation.splice(index -2, 0, result);
    });
  }
  return result;
}