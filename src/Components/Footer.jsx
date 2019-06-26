import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="">Matchs</Nav.Link>
            <Nav.Link href="">Classement</Nav.Link>
            <Nav.Link href="">Équipes</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
