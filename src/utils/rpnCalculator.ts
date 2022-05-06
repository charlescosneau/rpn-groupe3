import { additionCalculation , substractionCalculation, multiplicationCalculation , divisionCalculation } from './calculate'

export type Operator = "+" | "*" | "-" | "/";

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
