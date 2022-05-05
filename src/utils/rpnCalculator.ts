export type Operator = "+" | "*" | "-" | "/";

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

export const operationCalculation = (
  operator: Operator,
  firstNumber: number,
  secondNumber: number
) => {
  switch (operator) {
    case "+":
      return additionCalculation(firstNumber, secondNumber);
    case "-":
      return substractionCalculation(firstNumber, secondNumber);
    case "*":
      return multiplicationCalculation(firstNumber, secondNumber);
    case "/":
      return divisionCalculation(firstNumber, secondNumber);
    default:
      break;
  }
};
