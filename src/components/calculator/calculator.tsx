import React, { useState } from "react";
import { Button } from "@mui/material";
import "./calculator.css";
import { calculateOperation, Operator } from "../../utils/rpnCalculator";

export default function Calculator() {
  const [negativeValue, setNegativeValue] = useState(false);
  const [displayOperation, setDisplayOperation] = useState<(number | string)[]>(
    []
  );
  const [result, setResult] = useState<number[]>([]);
  const [displayResult, setDisplayResult] = useState(false);

  const addNumber = (number: number) => {
    if (negativeValue) {
      setDisplayOperation([...displayOperation, -number]);
      setResult([...result, -number]);
      setNegativeValue(false);
    } else {
      setDisplayOperation([...displayOperation, number]);
      setResult([...result, number]);
    }
  };

  const resetOperation = () => {
    setDisplayOperation([]);
    setResult([]);
    setDisplayResult(false);
  };

  const calculate = (operator: Operator) => {
    setDisplayOperation([...displayOperation, operator]);
    const lastElement = result.pop();
    const secondLastElement = result.pop();
    let newValue;
    if (lastElement && secondLastElement) {
      newValue = calculateOperation(operator, secondLastElement, lastElement)
    }
    if (result && newValue) {
      setResult([...result, newValue]);
    }
  };

  const finalOperation = () => {
    setDisplayResult(!displayResult);
  };

  // TODO : Bug quand result === 0 car plus de tableau

  return (
    <div>
      <div className="display-result">
        {displayOperation.map((item) => (
          <>{item}</>
        ))}
      </div>
      <div className="parent">
        <div className="numbers numbers-org">
          <div className="equal">
            <Button
              onClick={resetOperation}
              variant="contained"
              color="secondary"
              fullWidth
            >
              Effacer
            </Button>
          </div>
          <div className="row1 numbers-row">
            <Button variant="outlined" onClick={() => addNumber(7)}>
              7
            </Button>
            <Button variant="outlined" onClick={() => addNumber(8)}>
              8
            </Button>
            <Button variant="outlined" onClick={() => addNumber(9)}>
              9
            </Button>
          </div>
          <div className="row2 numbers-row">
            <Button variant="outlined" onClick={() => addNumber(4)}>
              4
            </Button>
            <Button variant="outlined" onClick={() => addNumber(5)}>
              5
            </Button>
            <Button variant="outlined" onClick={() => addNumber(6)}>
              6
            </Button>
          </div>
          <div className="row3 numbers-row">
            <Button variant="outlined" onClick={() => addNumber(1)}>
              1
            </Button>
            <Button variant="outlined" onClick={() => addNumber(2)}>
              2
            </Button>
            <Button variant="outlined" onClick={() => addNumber(3)}>
              3
            </Button>
          </div>
          <div className="row4">
            <Button variant="outlined" fullWidth onClick={() => addNumber(0)}>
              0
            </Button>
          </div>
        </div>
        <div className="operators operators-org">
          <Button
            onClick={() => calculate("/")}
            fullWidth
            variant="contained"
          >
            /
          </Button>
          <Button
            onClick={() => calculate("*")}
            fullWidth
            variant="contained"
          >
            *
          </Button>
          <Button
            onClick={() => calculate("+")}
            fullWidth
            variant="contained"
          >
            +
          </Button>
          <Button
            onClick={() => calculate("-")}
            fullWidth
            variant="contained"
          >
            -
          </Button>
        </div>
        <div className="neg">
          <Button
            onClick={() => setNegativeValue(!negativeValue)}
            variant={negativeValue ? "contained" : "outlined"}
            color="info"
            fullWidth
          >
            Negatif
          </Button>
        </div>
        <div className="equal">
          <Button
            onClick={finalOperation}
            variant="contained"
            color="secondary"
            fullWidth
          >
            =
          </Button>
        </div>
      </div>
      {displayResult && result.length === 1 ? (
        <div>Resultat : {result}</div>
      ) : null}
    </div>
  );
}
