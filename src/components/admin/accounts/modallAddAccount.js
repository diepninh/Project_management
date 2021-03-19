import React, { useState } from 'react';
import { Container, Modal, Button} from 'react-bootstrap';
import AddAnAccount from './addAnAccount';

function ModalAddAccount() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <Container className='ml-2' >
      <Button onClick={() => setShowModal(true)}>Add</Button>
      <Modal show={showModal} onHide={() => setShowModal(false)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Add an account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <AddAnAccount/>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>

  );
}
export default ModalAddAccount;