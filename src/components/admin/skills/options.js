
import React ,{useState} from 'react';
import { Container ,Button,Row,Col,Modal} from 'react-bootstrap';

function Options(){
  const [showModalDel, setShowModalDel] = useState(false);
  const [showModalAccept, setShowModalAccept] = useState(false);
  const handleCloseDel = () =>{
    setShowModalDel(false);
  }
  const handleCloseAccept = () =>{
    setShowModalAccept(false);
  }
  return(
    <Container>
      <Row>
        <Col sm='6'><Button variant='success' onClick={() =>setShowModalAccept(true)}>Accept</Button></Col>
        <Col sm='6'><Button variant='danger' onClick={() =>setShowModalDel(true)}>Deny</Button></Col>
      </Row>
      {/* Chap nhan */}
      <Modal show={showModalAccept} onHide={handleCloseAccept}>
        <Modal.Header closeButton>
          <Modal.Title>Accept</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn chấp nhận yêu cầu này ?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseAccept}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
      {/* tu choi */}
      <Modal show={showModalDel} onHide={handleCloseDel}>
        <Modal.Header closeButton>
          <Modal.Title>Deny</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn từ chối yêu cầu này ?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseDel}>
            Deny
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}
export default Options;