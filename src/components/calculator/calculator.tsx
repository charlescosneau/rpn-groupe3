import { useState } from "react";
import { Button } from "@mui/material";
import "./calculator.css";

export default function Calculator() {

  const [operation, setOperation] = useState<number[]>([])

  const addNumber = (number: number) => {
    const tableOfNumber: number[] = []
    tableOfNumber.push(number)

    setOperation(tableOfNumber)
  }

  return (
    <div>
      <div className="display-result">
        {operation}
      </div>
      <div className="parent">
        <div className="numbers numbers-org">
          <div className="row1 numbers-row">
            <Button variant="outlined" onClick={() => addNumber(7)}>7</Button>
            <Button variant="outlined" onClick={() => addNumber(8)}>8</Button>
            <Button variant="outlined" onClick={() => addNumber(9)}>9</Button>
          </div>
          <div className="row2 numbers-row">
            <Button variant="outlined" onClick={() => addNumber(4)}>4</Button>
            <Button variant="outlined" onClick={() => addNumber(5)}>5</Button>
            <Button variant="outlined" onClick={() => addNumber(6)}>6</Button>
          </div>
          <div className="row3 numbers-row">
            <Button variant="outlined" onClick={() => addNumber(1)}>1</Button>
            <Button variant="outlined" onClick={() => addNumber(2)}>2</Button>
            <Button variant="outlined" onClick={() => addNumber(3)}>3</Button>
          </div>
          <div className="row4">
            <Button variant="outlined" fullWidth onClick={() => addNumber(0)}>0</Button>
          </div>
        </div>
        <div className="operators operators-org">
            <Button fullWidth variant="contained">/</Button>
            <Button fullWidth variant="contained">*</Button>
            <Button fullWidth variant="contained">+</Button>
            <Button fullWidth variant="contained">-</Button>
        </div>
        <div className="neg">
            <Button variant="contained" color="info" fullWidth>Negatif</Button>
        </div>
        <div className="equal">
            <Button variant="contained" color="secondary" fullWidth>=</Button>
        </div>
      </div>
    </div>
  );
}
