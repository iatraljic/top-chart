import React, { createContext, useEffect } from 'react';

import axios from 'axios';

export const MainContext = createContext();

function AppContext(props) {

    useEffect(() => {

        axios.get('/chart')
            .then(res => console.log(res.data.tracks.data))
            .catch(err => console.log(err));

    }, []);


    return (
        <MainContext.Provider
          value = {{
          }}
        >
          {props.children}
        </MainContext.Provider>
      );
}

export default AppContext;