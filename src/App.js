import React from 'react';

import BarChart from './BarChart.react';
import {DataSorterPipe} from './DataSorterPipe.react';
import {FilterPipe} from './FilterPipe.react';

import './App.css';

function App() {
  const data = {
    'Jack': 10,
    'Jill': 5,
    'John': 7,
    'Kassem': 3,
  };

  // On the fly conversion from object to list of objects
  const listOfObjects = (() => {
    return Object.keys(data).map(key => ({name: key, value: data[key]}))
  })();

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Bar Chart
        </div>
        <FilterPipe data={listOfObjects}>
          <DataSorterPipe>
            <BarChart/>
          </DataSorterPipe>
        </FilterPipe>
      </header>
    </div>
  );
}

export default App;
