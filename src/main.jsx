import React from 'react'
import ReactDOM from 'react-dom/client'
import AppGame from './AppGame.jsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { QuestionProvider } from './context/QuestionProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuestionProvider>
      <BrowserRouter>
        <AppGame />
      </BrowserRouter>
    </QuestionProvider>
  </React.StrictMode>,
)
