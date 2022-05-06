import { useState } from "react";
import { Button } from "@mui/material";
import "./calculator.css";
import { operationCalculation, Operator } from "../../utils/rpnCalculator";

export default function Calculator() {
  // TODO : Cas d'erreur

  const [negativeValue, setNegativeValue] = useState(false);
  const [displayOperation, setDisplayOperation] = useState<(number | string)[]>(
    []
  );
  const [result, setResult] = useState<number[]>([]);
  const [displayResult, setDisplayResult] = useState(false);
  const [zeroResult, setZeroResult] = useState(false);
  const [errorResult, setErrorResult] = useState(false);

  const addNumber = (number: number) => {
    if (negativeValue) {
      setDisplayOperation([...displayOperation, number + "N"]);
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
    setZeroResult(false);
    setErrorResult(false);
  };

  const calculate = (operator: Operator) => {
    setDisplayOperation([...displayOperation, operator]);
    const lastElement = result.pop();
    const secondLastElement = result.pop();
    let newValue;

    if (lastElement && secondLastElement) {
      newValue = operationCalculation(operator, secondLastElement, lastElement);
    }
    if (newValue === 0) {
      setZeroResult(true);
    } else if (result && newValue) {
      setResult([...result, newValue]);
    } else {
      setErrorResult(true);
    }
  };


  const renderResult = () => {
    let renderResult;
    if (displayResult && result.length === 1) {
      renderResult = `Resultat : ${result}`;
    } else if (displayResult && zeroResult) {
      renderResult = "Resultat : 0";
    } else if (displayResult && errorResult) {
      renderResult = "Erreur d'opération";
    } else {
      renderResult = null;
    }
    return renderResult;
  };

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
          <Button onClick={() => calculate("/")} fullWidth variant="contained">
            /
          </Button>
          <Button onClick={() => calculate("*")} fullWidth variant="contained">
            *
          </Button>
          <Button onClick={() => calculate("+")} fullWidth variant="contained">
            +
          </Button>
          <Button onClick={() => calculate("-")} fullWidth variant="contained">
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
            onClick={() => setDisplayResult(!displayResult)}
            variant="contained"
            color="secondary"
            fullWidth
          >
            =
          </Button>
        </div>
      </div>
      <div>{renderResult()}</div>
    </div>
  );
}
