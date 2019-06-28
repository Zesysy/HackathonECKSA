import React from 'react';

import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div id="Layout">
      <header>
        <Header />
      </header>
      <section>{children}</section>
      <Footer />
    </div>
  );
};
export default Layout;
