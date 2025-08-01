import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'jquery';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
