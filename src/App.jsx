import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppLayout from './components/App/AppLayout/AppLayout'
import './App.css'
import './assets/modal.css'

function App() {

  return (
        <BrowserRouter>
            <AppLayout/>
        </BrowserRouter>
  )
}

export default App