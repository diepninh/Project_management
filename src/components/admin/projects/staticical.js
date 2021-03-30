import React, { useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';

function Staticical() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <Container className='ml-2'>
      <Button onClick={() => setShowModal(true)} variant='warning'>Staticical</Button>
      <Modal show={showModal} onHide={() => setShowModal(false)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Staticical of project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Doughnut
              data={{
                labels: [
                  "done",
                  "unfinished"
                ],
                datasets: [
                  {
                    label: "project",
                    backgroundColor: [
                      "#62A945",
                      "#E7AE0C",

                    ],
                    data: []
                  }
                ]
              }}
              option={{
                title: {
                  display: true,
                  text: "Project"
                }
              }}
            />
          </Container>
        </Modal.Body>
      </Modal>
    </Container>

  )
}
export default Staticical;
