import React from 'react'
import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Verificationcode from './components/VerificationCode/Verificationcode'
import Dashboard from './components/Dashbaord/Dashboard'
function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Landing}/>
        <Route path="/verification" exact component={Verificationcode}/>
        <Route path="/dashboard" exact component={Dashboard}/>
      </Router>
      
    </div>
  )
}

export default App
