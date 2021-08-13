import React from 'react';
import './App.css';
import Portfolio from './Portfolio';
import { data, filters } from './data';

function App() {
  return (
    <Portfolio
      data={data}
      filters={filters}
    />
  );
}

export default App;
