import React, { useContext, useState } from 'react';
import { Input } from 'reactstrap';

import { MainContext } from './context/index'
import Chart from './components/Chart';

import './App.css';

function App() {
  const [sort, setSort] = useState(' ');
  const { songs } = useContext(MainContext);

  return (
    <div className="App">
      <Input type="select" onChange={(e) => {setSort(e.target.value)}}>
        <option value={' '}> </option>
        <option value={'d'}>Padajući</option>
        <option value={'a'}>Rastući</option>
      </Input>
      {console.log(sort)}
      <Chart songs={songs} sort={sort} />
    </div>
  );
}

export default App;
