import React, {useState} from 'react';
import { Container ,Modal} from 'react-bootstrap';
 
function ModalDetail(props) {
  const [showModalDetail, setShowModalDetail] = useState(false);
  return(
    <Container>
      <p onClick={() => setShowModalDetail(true)}></p>
      <Modal show={showModalDetail} onHide={() => setShowModalDetail(false)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Detail of</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <p>Name :</p>
            <p>Email :</p>
            <p>ID:</p>
            <p>Date of birth:</p>
            <p>Date of join:</p>
            <p>Date of contract:</p>
            <p>Sex:</p>
            <p>Phone:</p>
            <p>Role:</p>
            <p>Contract:</p>
          </Container>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
export default ModalDetail;
