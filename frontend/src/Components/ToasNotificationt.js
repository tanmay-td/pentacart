import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function ToastNotification(props ) {


  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => props.setShow(false)} show={props.show} delay={3000} autohide bg='danger'>
          <Toast.Header>
            <strong className="me-auto">Alert</strong>
          </Toast.Header>
          <Toast.Body>{props.msg}</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
      </Col>
    </Row>
  );
}

export default ToastNotification;