import React from 'react';

import './modal.styles.css';

import Backdrop from '../backdrop/backdrop.component';
import Fragment from '../../../hoc/fragment/fragment.hoc';

const Modal = (props) => (
  <Fragment>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className='Modal'
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  </Fragment>
);

export default Modal;
