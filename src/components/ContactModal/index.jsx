import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

function ContactModal({ onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleAction = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const formSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        const emailContent = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const mailtoLink = `mailto:l.elizabeth.eaton@gmail.com?subject=New Message&body=${encodeURIComponent(emailContent)}`;
        window.location.href = mailtoLink;
        onClose();
    }

    return (
        <div className="modal show"
            style={{
                display: 'block',
                position: 'initial'
            }}>
            <Modal.Dialog>
                <Modal.Header closeButton onHide={onClose}>
                    <Modal.Title>Contact Form</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={formSubmit}>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="2">Name</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" name="name" value={formData.name} onChange={handleAction} placeholder="Enter your name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">Email</Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" name="email" value={formData.email} onChange={handleAction} placeholder="Enter your email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextMessage">
                            <Form.Label column sm="2">Message</Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" name="message" value={formData.message} onChange={handleAction} placeholder="Enter your message" rows={3} />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer
                    style={{
                        backgroundColor: 'black'
                    }}>

                    <Button className="cancelButton" variant="outline-dark" onClick={onClose}
                        style={{
                            color: 'white',
                            border: ' 1px solid white'
                        }}
                    >Cancel</Button>

                    <Button type="submit" className="sendButton" variant="outline-dark" onClick={formSubmit}
                        style={{
                            color: 'white',
                            border: ' 1px solid white'
                        }}>Send</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default ContactModal;
