import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ActivityProvider } from './context/ActivityContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ActivityProvider>

      <App />
    
    </ActivityProvider>
  </React.StrictMode>,
)
