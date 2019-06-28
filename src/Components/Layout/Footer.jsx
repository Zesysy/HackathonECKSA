import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Layout.css';

class Footer extends React.Component {
  render() {
    if (window.screen.width > 768) {
      return <footer style={{ color: 'white' }}>lolo</footer>;
    }

    if (window.screen.width < 768) {
      return (
        <footer>
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
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
        </footer>
      );
    }
  }
}

export default Footer;
