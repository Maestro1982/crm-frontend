import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../../assets/images/logo.png';

const Header = () => {
  return (
    <Navbar collapseOnSelect variant='dark' expand='md'>
      <Navbar.Brand>
        <img
          src={Logo}
          alt='Logo'
          width='48px'
          height='48px'
          style={{ marginLeft: '10px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
          <Nav.Link href='/dashboard'>Tickets</Nav.Link>
          <Nav.Link href='/dashboard'>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
