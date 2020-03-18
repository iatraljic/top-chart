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
          backgroundColor: '#43286f',
          color: 'black',
          backgroundImage: 'url("https://ak6.picdn.net/shutterstock/videos/1023807856/thumb/1.jpg")',
          backgroundSize: 'contain',
        }}
      >
        <Container fluid>
          <h1 
            className="display-3"
          >
            Top pop
          </h1>
          <p
            className="lead"
          >
            Top 10 most popular pop songs
          </p>
        </Container>
      </Jumbotron>
      <label>
        Sort by
      </label><br/>
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
