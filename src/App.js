import React from 'react';
import './App.css';
import Reddit from './Reddit';
import Bikes from './Bikes';

//const App = () => {
//function App() {

//disse to er same-same^

function App() {
  return (
    <div className="App">
      <h1>Infoskjerm</h1>
      <Reddit />
      <Bikes /> 
    </div>
  );
}

export default App;
