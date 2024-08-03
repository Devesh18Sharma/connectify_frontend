import React from 'react';
import { io } from 'socket.io-client';
import { SocketContext } from '../context/SocketContext';
import Dashboard from '../components/Dashboard';

const socket = io('http://localhost:8000');

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Dashboard />
    </SocketContext.Provider>
  );
}

export default App;