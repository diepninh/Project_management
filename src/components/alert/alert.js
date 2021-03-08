import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AlertForm( props) {
  return (
    <div style={{ display: props.displayAlert}}>
      <div className='alert alert-danger' role='alert'>
         {props.message}
          <button type="button" className="close" onClick={() => props.setDisplayAlert('none')}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  )
}
export default AlertForm;
