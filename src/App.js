import React, { useContext, useState } from 'react';
import { Container, Input, Jumbotron } from 'reactstrap';

import { MainContext } from './context/index'
import Chart from './components/Chart';

function App() {
  const [sort, setSort] = useState();
  const { songs } = useContext(MainContext);

  return (
    <Container>
      <Jumbotron fluid
        style={{
          backgroundColor: 'white',
          color: 'black',
          borderBottom: 'solid 1px'
        }}
      >
        <Container fluid>
          <h1 
            className="display-3"
            style={{display: 'flex', justifyContent: 'center'}}
          >
            Top pop
          </h1>
          <p
            className="lead"
            style={{display: 'flex', justifyContent: 'center'}}
          >
            Top 10 most popular pop songs
          </p>
        </Container>
      </Jumbotron>
      <label>Sort by</label><br/>
      <Input
        type="select"
        style={{width: '20%'}}
        onChange={(e) => {setSort(e.target.value)}}
      >
        <option
          value={'p'}
        >
          Popularity
        </option>
        <option
          value={'a'}
        >
          Duration (ascending)
        </option>
        <option
          value={'d'}
        >
          Duration (descending)
        </option>
      </Input>
      <Chart
        songs={songs}
        sort={sort}
      />
    </Container>
  );
}

export default App;
