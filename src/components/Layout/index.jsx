import React from 'react';
import {Outlet} from 'react-router-dom';
import NavbarSection from '../Nav';

function Layout() {
  return (
    <div>
       <NavbarSection />
       <Outlet />
    </div>
  )
}

export default Layout