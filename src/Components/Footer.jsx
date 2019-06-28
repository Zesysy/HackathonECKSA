import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div id="Footer">
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="">Matchs</Nav.Link>
            <Nav.Link href="">Classement</Nav.Link>
            <Nav.Link href="/team">Équipes</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
