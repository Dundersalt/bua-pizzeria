import React from 'react';
import handGesture from './hand-gesture.png';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={handGesture} className="App-logo" alt="logo" />
        <h1>Bua pizzeria</h1>
        {/* <Link to="/hallaisen">HALLAISEN</Link> | {""} */}
      </header>
    </div>
  );
}

export default App;
