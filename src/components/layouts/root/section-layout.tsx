import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const SectionLayout: React.FC<any> = (_props) => {
  return (
    <>
      <header> 
        <Link to='/'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/gallery'>Gallery</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer> Footer Goes Here. </footer>
    </>
  );
};
