import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import "./calculator.css";

export default function Calculator() {
  const [negativeValue, setNegativeValue] = useState(false)
  const [operation, setOperation] = useState<(string|number)[]>([]);

  const addNumber = (number: number) => {
    if(negativeValue) {
      setOperation([...operation, -number]);
      setNegativeValue(false)
    } else {
      setOperation([...operation, number]);
    }
  };

  const addOperation = (symbole: string) => {
    setOperation([...operation, symbole]);
  };

  return (
    <div>
      <div className="display-result">
        {operation.map((item) => (
          <>{item}</>
        ))}
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
            <Button onClick={() => addOperation('/') fullWidth variant="contained">/</Button>
            <Button onClick={() => addOperation('*') fullWidth variant="contained">*</Button>
            <Button onClick={() => addOperation('+') fullWidth variant="contained">+</Button>
            <Button onClick={() => addOperation('-') fullWidth variant="contained">-</Button>
        </div>
        <div className="neg">
            <Button onClick={() => setNegativeValue(!negativeValue)} variant="contained" color="info" fullWidth>Negatif</Button>
        </div>
        <div className="equal">
            <Button variant="contained" color="secondary" fullWidth>=</Button>
        </div>
      </div>
    </div>
  );
}
