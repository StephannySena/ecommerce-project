import React from 'react';
import './App.css';
import Header from './Components/Common/Header';
import { ThemeProvider } from '@material-ui/core';
import theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
