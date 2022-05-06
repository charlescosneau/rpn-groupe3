import React, { useMemo } from "react";
import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import themeData from "./assets/theme";
import Calculator from '../src/components/calculator/calculator';
import InputCalculator from './components/InputCalculator/InputCalculator';
import "./App.css";

import { Box, Tab, Tabs, Typography } from "@mui/material"


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
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  function handlePropsTab(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const [valueTabPanel, setValueTabPanel] = React.useState(0);
  const changeValueTabPanel = (event: React.SyntheticEvent, newValueTabPanel: number) => {
    setValueTabPanel(newValueTabPanel);
  };


  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Typography  variant="h2">RPN</Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={valueTabPanel} onChange={changeValueTabPanel} aria-label="basic tabs example">
            <Tab label="Calculatrice" {...handlePropsTab(0)} />
            <Tab label="Input" {...handlePropsTab(1)} />
          </Tabs>
        </Box>
        <TabPanel value={valueTabPanel} index={0}>
          <Calculator/>
        </TabPanel>
        <TabPanel value={valueTabPanel} index={1}>
          <InputCalculator />
        </TabPanel>
      </ThemeProvider>
    </div>
  );
}

export default App;
