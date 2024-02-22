import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';


function ContactModal({ onClose }) {
    return (
        <div className="modal show" 
        style={{ display: 'block', 
        position: 'initial' }}>
            <Modal.Dialog>
                <Modal.Header closeButton onHide={onClose}>
                    <Modal.Title>Contact Form</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="2">name</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">email</Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextMessage">
                            <Form.Label column sm="2">message</Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" placeholder="Enter your message" rows={3} />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer 
                style={{ 
                    backgroundColor: 'black' }}>

                    <Button className="cancelButton" variant="outline-dark" onClick={onClose}
                        style={{
                            color: 'white',
                            border: ' 1px solid white'
                        }}
                    >cancel</Button>

                    <Button className="sendButton" variant="outline-dark"
                        style={{
                            color: 'white',
                            border: ' 1px solid white'
                        }}>send</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default ContactModal;
