import React, { useMemo } from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function calculator() {
  return (
      <Grid>
        <Typography>Calcualtor</Typography>
        <Button variant='contained'>Button</Button>
        <Button variant='outlined'>Outlined</Button>
        <Button variant='text'>Button</Button>
        <Button color='secondary'>Secondary</Button>
        <Button color='secondary' variant='contained'>Button</Button>
        <Button color='info' variant='outlined'>Outlined</Button>
        <Button color='info' variant='contained'>Outlined</Button>
      </Grid>
  )
}
