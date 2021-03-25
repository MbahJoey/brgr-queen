import React from 'react';

import './custom-button.styles.css';

const CustomButton = (props) => (
  <button onClick={props.clicked} className={`Button ${props.btnType}`}>
    {props.children}
  </button>
);

export default CustomButton;
