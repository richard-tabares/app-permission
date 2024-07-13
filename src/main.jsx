import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/styles.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './login/context/AuthProvider.jsx'
import { AppRouter } from './router/AppRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  // </React.StrictMode>
)
