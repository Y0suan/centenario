import React from 'react';
import Header from './Header';
import Nav from './Nav';
import EspacioPublicitario from './EspacioPublicitario';

const Layout = ({ children }) => {
  return (
    <div className='body'>
      <Header />
      <Nav />
      {children}
      <EspacioPublicitario />
    </div>
  );
};

export default Layout;
