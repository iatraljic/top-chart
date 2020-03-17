import React, { createContext, useEffect, useState } from 'react';

import axios from 'axios';

export const MainContext = createContext();

function AppContext(props) {
    const [songs, setSongs] = useState([]);

    useEffect(() => {

        axios.get('/chart')
            .then(res => storeSongs(res.data.tracks.data))
            .catch(err => console.log(err));

    }, []);

    const storeSongs = (data) => {
        let tempSongs = [];

        tempSongs = data.map(el => {
            return {
                title: el.title,
                duration: el.duration,
                position: el.position,
                artist: el.artist.name,
                artist_picture: el.artist.picture_xl,
                album_title: el.album.title,
                album_cover: el.album.cover_xl
            }
        });

        console.log(tempSongs);
        
    }


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