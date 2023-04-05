import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App';
import './index.css';
import { light } from 'utils/theme';
import { ThemeContextProvider } from 'providers/themeContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      {/* <ThemeProvider theme={light}> */}
      <App />
      {/* </ThemeProvider> */}
    </ThemeContextProvider>
    
  </React.StrictMode>
);
