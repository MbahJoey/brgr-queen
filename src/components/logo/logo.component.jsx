import React from 'react';

import logo from '../../assets/burger-logo.png';
import './logo.styles.css';

const Logo = (props) => (
  <div className='Logo'>
    <img src={logo} alt='brgr-queen logo' />
  </div>
);

export default Logo;
