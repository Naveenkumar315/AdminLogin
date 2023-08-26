import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar'
import Signup from './components/Signup'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <NavBar /> */}
    <Signup />
  </React.StrictMode>,
)
