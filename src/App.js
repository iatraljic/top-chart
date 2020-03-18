import React, { useContext, useState } from 'react';
import { Container, Row, Input } from 'reactstrap';

import { MainContext } from './context/index'
import Chart from './components/Chart';

import './App.css';

function App() {
  const [sort, setSort] = useState();
  const { songs } = useContext(MainContext);

  return (
    <Container className="App">
      <Row>
        <label>Sort by</label><br/>
        <Input type="select" onChange={(e) => {setSort(e.target.value)}}>
          <option value={'p'}>Popularity</option>
          <option value={'a'}>Duration (ascending)</option>
          <option value={'d'}>Duration (descending)</option>
        </Input>
      </Row>
      <Chart songs={songs} sort={sort} />
    </Container>
  );
}

export default App;
