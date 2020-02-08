import React from 'react';
import './App.css';
import Dashboard from './Dashboard'
import reducer from './reducer'
import  { createStore } from  'redux'
import { Provider } from 'react-redux'
import io from 'socket.io-client'

const store= createStore(reducer)
let socket;

const sendChatAction= (value) => {
  socket.on('hello', ()=>{
    socket.emit('hi..message is sent by ', value);
  })
}

function App() {
  if(!socket){
    socket=io.connect(':3002')
  }
  return (
    <div className="App">
      <Provider store={store}>
        <Dashboard sendChatAction= { value=> sendChatAction(value) }/>
      </Provider>
    </div>
  );
}

export default App;
