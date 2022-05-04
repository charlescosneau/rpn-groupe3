import React, { useMemo } from "react";
import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import themeData from "./assets/theme";
import Calculator from '../src/components/Calculator/calculator';
import InputCalculator from './components/InputCalculator/InputCalculator';
import "./App.css";

import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material"


function App() {
  const theme = useMemo(() => {
    const themeContent = createTheme(themeData);
    return responsiveFontSizes(themeContent, { disableAlign: true });
  }, []);

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Typography  variant="h2">RPN</Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Input" {...a11yProps(0)} />
            <Tab label="Calculatrice" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <InputCalculator />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Calculator/>
        </TabPanel>
      </ThemeProvider>
    </div>
  );
}

export default App;
