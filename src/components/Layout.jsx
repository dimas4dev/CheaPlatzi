import React from 'react';
import {useLocation} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
  const location = useLocation().pathname;

  return (
    <>
      {location === '/login' ? (
        <>{children}</>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
