import React from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from '../assets/images/Logo.png';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div id="Header">
        <Navbar bg="dark" variant="dark">
          <img src={Logo} alt="Logo" id="Logo" />
        </Navbar>
      </div>
    );
  }
}

export default Header;
