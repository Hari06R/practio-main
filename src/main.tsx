import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import GridBackground from './components/GridBackground.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GridBackground/>
    <App />
  </StrictMode>
);
