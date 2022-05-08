import { additionCalculation , substractionCalculation, multiplicationCalculation,divisionCalculation } from '../../utils/calculate';
import { calculate } from '../../utils/rpnInputCalculator';
import { transformInputToValues } from '../../utils/transformInputToValues';

describe("1) Test : Addition", () => {
  it("1) Addition of two numbers", () => {
    expect(additionCalculation(1, 1)).toEqual(2);
  });
  it("2) Addition with negative numbers", () => {
    expect(additionCalculation(-4, 1)).toEqual(-3);
  });
  it("3) Addition with float numbers", () => {
    expect(additionCalculation(17.4, 1.3)).toEqual(18.7);
  });
});

describe("2) Test : Subtraction", () => {
  it("1) Subtraction of two numbers", () => {
    expect(substractionCalculation(2, 1)).toEqual(1);
  });
  it("2) Subtraction with negative numbers", () => {
    expect(substractionCalculation(-2, 1)).toEqual(-3);
  });
  it("3) Subtraction with float numbers", () => {
    expect(substractionCalculation(-2.5, 1.3)).toEqual(-3.8);
  });
});

describe("3) Test : Multiplication", () => {
  it("1) Multiplication of two numbers", () => {
    expect(multiplicationCalculation(2, 3)).toEqual(6);
  });
  it("2) Multiplication with negative numbers", () => {
    expect(multiplicationCalculation(-2, 3)).toEqual(-6);
  });
  it("3) Multiplication with float numbers", () => {
    expect(multiplicationCalculation(-2.5, 3)).toEqual(-7.5);
  });
});

describe("4) Test : Division", () => {
  it("1) Dividing two numbers", () => {
    expect(divisionCalculation(4, 2)).toEqual(2);
  });
  it("2) Dividing with negative numbers", () => {
    expect(divisionCalculation(-6, 2)).toEqual(-3);
  });
  it("3) Dividing with float numbers", () => {
    expect(divisionCalculation(-5.5, 2)).toEqual(-2.75);
  });
});

describe("5) Test : transforInputToValues", () => {
  it("1) Should return right size of elements", () => {
    expect(transformInputToValues('1.4 3 - +').length).toEqual(4);
  });
  it("2) Should return valid array", () => {
    expect(transformInputToValues('1.4 3N - +')).toEqual(['1.4', -3, '-', '+']);
  });
  it("3) Should return negative value for negate", () => {
    expect(transformInputToValues('3N')).toEqual([-3]);
  });
})

describe("6) Test : Calculate", () => {
  it("1) Addition", () => {
    expect(calculate(transformInputToValues('1.5 4 5N + +'))).toEqual(0.5);
  });
  it("2) Soustraction", () => {
    expect(calculate(['1.5', '4', '5', '-', '-'])).toEqual(2.5);
  });
  it("3) Multiplication", () => {
    expect(calculate(transformInputToValues('1.5 4N 5 * *'))).toEqual(-30);
  });
  it("4) Division", () => {
    expect(calculate(transformInputToValues('1.5 4N 5 / /'))).toEqual(-1.875);
  });
  it("5) Expression complexe", () => {
    expect(calculate(transformInputToValues('1 1 + 4 * 2 / 9N 2 + +'))).toEqual(-3);
  });
  it("6) Expression complexe - Fail expected", () => {
    expect(calculate(transformInputToValues('1 1 + 4 * 2 / 9N 2 +'))).toEqual("Mauvaise expression");
  });
  it("7) Addition simple", () => {
    expect(calculate(['1', '1', '+'])).toEqual(2);
  })
});
