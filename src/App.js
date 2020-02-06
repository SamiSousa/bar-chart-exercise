import React from 'react';

import BarChart from './BarChart.react'

import './App.css';

function App() {
  const data = {
    'Jack': 10,
    'Jill': 5,
    'John': 7,
    'Kassem': 3,
  };

  return (
    <div className="App">
      <header className="App-header">
        <BarChart data={data}/>
      </header>
    </div>
  );
}

export default App;
