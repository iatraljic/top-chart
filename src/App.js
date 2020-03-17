import React, { useContext } from 'react';

import { MainContext } from './context/index'
import Chart from './components/Chart';

import './App.css';

function App() {
  const { songs } = useContext(MainContext);

  return (
    <div className="App">
      <Chart songs={songs} />
    </div>
  );
}

export default App;
