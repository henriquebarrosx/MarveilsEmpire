import React from 'react';
import ReactDOM from 'react-dom/client';

import './theme/index.css';
import { Router } from './routes';
import { SessionProvider } from './store/Session';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SessionProvider>
      <Router />
    </SessionProvider>
  </React.StrictMode>
)
