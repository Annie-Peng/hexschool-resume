import React from 'react'
import ReactDOM from 'react-dom/client'
import Resume from './Resume.jsx'
import './styles/global.css';
import './styles/editor.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>,
)
