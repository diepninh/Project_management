import React, {useState} from 'react';
import { Container ,Modal } from 'react-bootstrap';
import { BsFillPersonLinesFill} from 'react-icons/bs';
 
function ModalDetail(props) {
  const [showModalDetail, setShowModalDetail] = useState(false);
  return(
    <Container>
      <BsFillPersonLinesFill onClick={() => setShowModalDetail(true)} />
      <Modal show={showModalDetail} onHide={() => setShowModalDetail(false)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Detail of {props.user.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <p>Name : {props.user.name}</p>
            <p>Email : {props.user.email}</p>
            <p>ID: {props.user.id}</p>
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
