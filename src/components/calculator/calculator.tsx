import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";


export default function Calculator() {

  const [operation, setOperation] = useState<number[]>([])

  const addNumber = (number: number) => {
    const tableOfNumber: number[] = []
    tableOfNumber.push(number)

    setOperation(tableOfNumber)
  }

  return (
    <Grid>
      <Grid
        sx={{
          border: 1,
          paddingTop: 1,
          paddingBottom: 1,
          paddingLeft: 3,
          paddingRight: 3,
          marginTop: 3,
          marginBottom: 0.1,
        }}
      >
        {operation}
      </Grid>
      <Grid container>
        <Grid
          sx={{
            border: 1,
            marginRight: 0.1,
          }}
        >
          <Grid>
            <Button onClick={() => addNumber(7)}>7</Button>
            <Button onClick={() => addNumber(8)}>8</Button>
            <Button onClick={() => addNumber(9)}>9</Button>
          </Grid>
          <Grid>
            <Button onClick={() => addNumber(4)}>4</Button>
            <Button onClick={() => addNumber(5)}>5</Button>
            <Button onClick={() => addNumber(6)}>6</Button>
          </Grid>
          <Grid>
            <Button onClick={() => addNumber(1)}>1</Button>
            <Button onClick={() => addNumber(2)}>2</Button>
            <Button onClick={() => addNumber(3)}>3</Button>
          </Grid>
          <Grid>
            <Button fullWidth onClick={() => addNumber(0)}>0</Button>
          </Grid>
        </Grid>
        <Grid
          sx={{
            border: 1,
          }}
        >
          <Grid>
            <Button>/</Button>
            <Button>*</Button>
          </Grid>
          <Grid>
            <Button>+</Button>
            <Button>-</Button>
          </Grid>
          <Grid>
            <Button fullWidth>Negatif</Button>
          </Grid>
          <Grid>
            <Button fullWidth>=</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
