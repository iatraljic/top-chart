import React from 'react';
import { Container, Row, Col } from 'reactstrap';


function Chart({songs, sort}) {
    
    const showChart = () => {
        let tempChart = [];
        let sortSongs = songs.map(el => el);

        if(sort === 'd')
            sortSongs.sort((a,b) => ( a.duration > b.duration ? -1 : 1));
        else if (sort === 'a')
            sortSongs.sort((a,b) => ( a.duration < b.duration ? -1 : 1));


        console.log(sortSongs);

        tempChart = sortSongs.map(el => 
            <div
                style={{
                        display: "flex",
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 0,
                        margin: "20px 0 0 0",
                        border: 'solid 1px'
                    }}
            >
                <div
                    style={{
                            height: '250px',
                            width: '250px',
                            backgroundImage:`url("${el.album_cover}")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'fit',
                        }}
                >
                </div>
                <div>
                    {el.title}
                </div>
                <div>
                    {el.artist}
                </div>
            </div>
        );
        
        return tempChart;
    };

    return(
        <Container fluid="md" style={{marginTop: "50px", marginBottom: "50px"}}>
            {songs.length!==0 && showChart()}
        </Container>
    );
}

export default Chart;