import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/styles.css'
import { AppRouter } from './router/AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
