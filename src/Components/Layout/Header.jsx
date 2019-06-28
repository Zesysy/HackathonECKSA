import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Layout.css';

import Logo from '../../assets/images/Logo.png';

class Header extends React.Component {
  render() {
    if (window.screen.width < 768) {
      return (
        <header>
          <Navbar bg="dark" variant="dark">
            <NavLink to="/">
              <img src={Logo} alt="Logo" id="Logo" />
            </NavLink>
          </Navbar>
        </header>
      );
    }

    if (window.screen.width > 768) {
      return (
        <header>
          <Navbar bg="dark" variant="dark">
            <NavLink to="/">
              <img src={Logo} alt="Logo" id="Logo" />
            </NavLink>
            <Nav className="navBarDesktop">
              <NavLink
                to="/matches"
                style={{
                  color: '#4D7EA8',
                  fontSize: '1.2em',
                  marginLeft: '2rem',
                  textShadow: '2px 2px 1px black',
                }}
              >
                Matchs
              </NavLink>
              <NavLink
                to="/ranking"
                style={{
                  color: '#4D7EA8',
                  fontSize: '1.2em',
                  marginLeft: '2rem',
                  textShadow: '2px 2px 1px black',
                }}
              >
                Classement
              </NavLink>
              <NavLink
                to="/team"
                style={{
                  color: '#4D7EA8',
                  fontSize: '1.2em',
                  marginLeft: '2rem',
                  textShadow: '2px 2px 1px black',
                }}
              >
                Équipes
              </NavLink>
            </Nav>
          </Navbar>
        </header>
      );
    }
  }
}

export default Header;
