import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter,Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
    </BrowserRouter>
  )
}

export default App;
