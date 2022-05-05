import {
  additionCalculation,
  subtractionCalculation,
  multiplicationCalculation,
  divisionCalculation,
  operationCalculation,
} from "./rpnCalculator";

describe("1) Test : Addition", () => {
  it("1) Addition of two numbers", () => {
    expect(additionCalculation(1, 1)).toEqual(2);
  });
});

describe("2) Test : Subtraction", () => {
  it("1) Subtraction of two numbers", () => {
    expect(subtractionCalculation(2, 1)).toEqual(1);
  });
});

describe("3) Test : Multiplication", () => {
  it("1) Multiplication of two numbers", () => {
    expect(multiplicationCalculation(2, 3)).toEqual(6);
  });
});

describe("4) Test : Division", () => {
  it("1) Dividing two numbers", () => {
    expect(divisionCalculation(4, 2)).toEqual(2);
  });
});

describe("5) Test : Operation", () => {
  it("1) Operator : '+'", () => {
    expect(operationCalculation("+", 4, 2)).toEqual(6);
  });
  it("2) Operator : '-'", () => {
    expect(operationCalculation("-", 4, 2)).toEqual(2);
  });
  it("3) Operator : '*'", () => {
    expect(operationCalculation("*", 4, 2)).toEqual(8);
  });
  it("4) Operator : '/'", () => {
    expect(operationCalculation("/", 6, 2)).toEqual(3);
  });
});
