import React from 'react'
import App from './App.jsx'
import LogIn from './LogIn'
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom'

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={hashHistory} >
        <div>
          <Route path='/' component={App} />
          <Route path='/login' component={LogIn} /> 
        </div>
      </Router>
    )
  }
}

export default AppRouter
