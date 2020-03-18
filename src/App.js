import React from 'react';
import Navbar from './Components/Navbar'
import './App.css';
import Users from './Components/Users/Users';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
      <Users/>
      </div>
    </div>
  );
}

export default App;
