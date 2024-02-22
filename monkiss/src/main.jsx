import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {UserProvider} from './Context/userContext.jsx'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import { MonkiProvider } from './Context/monkiContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <MonkiProvider>
        <App />
      </MonkiProvider>
    </UserProvider>
  </BrowserRouter>
)
