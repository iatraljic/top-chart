import React from 'react';
import { Container, Row, Col } from 'reactstrap';


function Chart({songs}) {
    
    const showChart = () => {
        let tempChart = [];

        tempChart = songs.map(el => 
            <Row
                style={{
                        display: "flex",
                        height: "100px",
                        width: "100%",
                        padding: 0,
                        margin: 0
                    }}
            >
                <Col>{el.title}</Col>
                <Col>{el.artist}</Col>
                <Col
                    style={{
                            backgroundImage:`url("${el.album_cover}")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain'
                        }}
                >
                </Col>
            </Row>
        );
        
        return tempChart;
    };

    return(
        <Container fluid>
            {songs.length!==0 && showChart()}
        </Container>
    );
}

export default Chart;