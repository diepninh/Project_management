import React, {useState} from 'react';
import { Container ,Modal} from 'react-bootstrap';
 
function ModalDetailProject(props) {
  const [showModalDetail, setShowModalDetail] = useState(false);
  return(
    <Container>
      <p onClick={() => setShowModalDetail(true)}>
        Drag and Drop
      </p>
          <Modal show={showModalDetail} onHide={() => setShowModalDetail(false)} size='lg'>
            <Modal.Header closeButton>
              <Modal.Title>Detail of</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <p>Name :</p>
                <p>Member :</p>
                <p>Start:</p>
                <p>Deadline:</p>
                <p>Status:</p>
              </Container>
            </Modal.Body>
          </Modal>
    </Container>
  )
}
export default ModalDetailProject;