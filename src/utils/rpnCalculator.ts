export type Operator = "+" | "*" | "-" | "/";

export const additionCalculation = (a: number, b: number) => {
  return a + b;
};

export const substractionCalculation = (a: number, b: number) => {
  return a - b;
};

export const multiplicationCalculation = (a: number, b: number) => {
  return a * b;
};

export const divisionCalculation = (a: number, b: number) => {
  return a / b;
};

export const calculateOperation = (
  operator: Operator,
  a: number,
  b: number
) => {
  switch (operator) {
    case "+":
      return additionCalculation(a, b);
    case "-":
      return substractionCalculation(a, b);
    case "*":
      return multiplicationCalculation(a, b);
    case "/":
      return divisionCalculation(a, b);
    default:
      break;
  }
};
