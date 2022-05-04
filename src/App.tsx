import React, { useMemo } from "react";
import "./App.css";
import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import themeData from "./assets/theme";
import Calculator from './components/calculator/calculator'
import { Grid } from "@mui/material";

function App() {
  const theme = useMemo(() => {
    const themeContent = createTheme(themeData);
    return responsiveFontSizes(themeContent, { disableAlign: true });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid>
        <Calculator/>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
