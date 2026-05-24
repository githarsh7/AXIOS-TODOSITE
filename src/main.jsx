import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'

// MOCK API URL
axios.defaults.baseURL =
  'https://6a12b0af78d0434e0d5d5c08.mockapi.io/userDatas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)