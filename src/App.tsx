import React, { useMemo, useState } from "react";
import "./App.css";
import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import themeData from "./assets/theme";
import Calculator from '../src/components/Calculator/calculator'
import InputCalculator from './components/InputCalculator/InputCalculator'

import { Button, Grid, Typography } from "@mui/material"


function App() {
  const theme = useMemo(() => {
    const themeContent = createTheme(themeData);
    return responsiveFontSizes(themeContent, { disableAlign: true });
  }, []);

  const [displayComponent, setDisplayComponent] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container direction={'column'} alignItems={'center'}>
        <Typography variant={'h1'}>Reverse polish notation Calculator</Typography>
        <Grid>
          <Button onClick={() => setDisplayComponent(false)}>Afficher la calculette</Button>
          <Button onClick={() => setDisplayComponent(true)}>Afficher l'input</Button>
        </Grid>
        {displayComponent ? <InputCalculator /> : <Calculator/>}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
