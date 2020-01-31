import React from 'react';
import './App.css';
import Dashboard from './Dashboard'
import reducer from './reducer'
import  { createStore } from  'redux'
import { Provider } from 'react-redux'

const store=createStore(reducer)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </div>
  );
}

export default App;
