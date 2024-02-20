import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { socket } from './sockets';

function App() {
  React.useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
