import React, { useState} from 'react';
import {Container ,Modal , Button} from 'react-bootstrap';
import {BsTrashFill} from 'react-icons/bs';

function DeleteMember(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <BsTrashFill onClick={() => setShowModal(true)} />
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn xóa {props.name} ra khỏi danh sách ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
export default DeleteMember;
