import { useState } from 'react';

const [operator1, setOperator1] = useState<(number | string)>();
const [operator2, setOperator2] = useState<(number | string)>();

function calculate(operation: (number | string)[]) {
  operation.forEach((item: number | string, index: number) => {
    if (typeof(item) === 'string') {
      setOperator1(operation[index - 2]);
      setOperator2(operation[index - 1]);
      if (item === '+') {
        addNumbers([Number(operator1), Number(operator2)]);
      } else if (item === '-') {
        subtractNumbers([Number(operator1), Number(operator2)]);
      } else if (item === '*') {
        multiplyNumbers([Number(operator1), Number(operator2)]);
      } else if (item === '/') {
        divideNumbers([Number(operator1), Number(operator2)]);
      }
    }
  })
}

function multiplyNumbers(operators: [number, number]): number {
  return operators[0] * operators[1];
};

function divideNumbers(operators: [number, number]): number {
  return operators[0] / operators[1];
};

function addNumbers(operators: [number, number]): number {
  return operators[0] + operators[1];
};

function subtractNumbers(operators: [number, number]): number {
  return operators[0] - operators[1];
};

export {};