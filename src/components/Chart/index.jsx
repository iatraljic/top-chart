import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';

import ModalComponent from '../ModalComponent/index';

import './index.css';

function Chart({songs, sort}) {
    const [modal, setModal] = useState({});

    const showChart = () => {
        let tempChart = [];
        let sortSongs = songs.map(el => el);

        if(sort === 'd')
            sortSongs.sort((a,b) => ( a.duration > b.duration ? -1 : 1));
        else if (sort === 'a')
            sortSongs.sort((a,b) => ( a.duration < b.duration ? -1 : 1));

        tempChart = sortSongs.map(el => 
            <Row
                className="chart-element"
                onClick={() => toggle(el)}
                key={el.position}
            >
                <Col lg="3">
                    <Row
                        className="chart-picture-container"
                        style={{
                            backgroundImage:`url('${el.album_cover}')`,
                        }}
                    >
                    </Row>
                    <Row className="title">{el.title}</Row>
                    <Row className="artist">by {el.artist}</Row>
                </Col>
            </Row>
        );
        
        return tempChart;
    };

    const toggle = (el) => setModal(el);

    return(
        <>
            {
                modal.title !== undefined &&
                <ModalComponent modal={modal} toggle={toggle}/>
            }
            {
                songs.length!==0 && showChart()
            }
        </>
    );
}

export default Chart;