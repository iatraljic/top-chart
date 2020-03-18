import React from 'react';
import { Button, Modal, Row, Col } from 'reactstrap';

import './index.css';

const ModalComponent = ({modal, toggle}) => {

  return (
    <Modal isOpen={modal.title !== undefined}>
      <Row
          className="picture-container"
          style={{
              backgroundImage:`url('${modal.album_cover_big}')`,
          }}
      >
      </Row>
      <Row>
        <Col lg="3" className="modal-popularity">
          {modal.position}
        </Col>
        <Col>
          <Row className="modal-title">{modal.title}</Row>
          <Row className="modal-artist">by {modal.artist}</Row>
          <Row className="modal-duration">
            Duration:
            {
              parseInt(modal.duration/60) < 10 ?
                "  0"+parseInt(modal.duration/60) :
                parseInt(modal.duration/60)
            }
            :
            {
              modal.duration%60 < 10 ?
              "0" + modal.duration % 60 :
              modal.duration % 60               
            }
          </Row>
        </Col>
        <Button color="secondary" onClick={() => toggle({})}>CLOSE MODAL</Button>
      </Row>
    </Modal>
  );
}

export default ModalComponent;