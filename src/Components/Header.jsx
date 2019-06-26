import React from 'react';
import Logo from '../Logo.png';

console.log(Logo);

class Header extends React.Component {
  render() {
    return (
      <div>
        <img src={Logo} alt="Logo" />
      </div>
    );
  }
}

export default Header;
