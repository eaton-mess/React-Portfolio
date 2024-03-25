import React, { useState } from 'react';
import ContactLogo from '../../assets/images/ContactLogo.png';
import ContactModal from '../ContactModal';
import './index.css';

const Contact = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <h5 style={{
                marginTop: '2em',
                marginBottom: '2em'
            }}>Click the button to keep in touch!</h5>
            <img className="contactLogo" src={ContactLogo} alt="Contact" onClick={openModal} />
            {showModal && <ContactModal onClose={closeModal} />}
        </>
    );
}

export default Contact;