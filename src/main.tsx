import React from 'react';
import ReactDOM from 'react-dom/client';

import './theme/index.css';
import { Router } from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
