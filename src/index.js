import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter as Router } from "react-router-dom";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <ColorModeScript />
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </>
);