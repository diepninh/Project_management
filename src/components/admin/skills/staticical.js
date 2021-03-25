import React, { useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import { HorizontalBar } from 'react-chartjs-2';

function Staticical() {
  const [showModal, setShowModal] = useState(false);
 
  return (
    <Container className='ml-2'>
      <Button onClick={() => setShowModal(true)} variant='warning'>Staticical</Button>
      <Modal show={showModal} onHide={() => setShowModal(false)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Staticical of skill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <HorizontalBar
              data={{
                labels: [
                  'nodeJs' ,
                  'ruby',
                  'react',
                  'angular',
                ],
                datasets: [
                  {
                    label: 'total of people',
                    backgroundColor: [
                      '#7FA9EA','#7FA9EA','#7FA9EA','#7FA9EA',
                
                    ],
                    data: [11,20,9,8]
                  }
                ]
              }}
              option={{
                title: {
                  display: true,
                  text: 'total of people'
                }
              }}
            />
          </Container>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
export default Staticical;
