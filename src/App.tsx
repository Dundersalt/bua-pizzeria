import React from 'react';
import handGesture from './hand-gesture.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={handGesture} className="App-logo" alt="logo" />
        <h1>Bua pizzeria</h1>        
      </header>
    </div>
  );
}

export default App;
