import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../assets/images/crm-logo.png';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
  };
  return (
    <Navbar collapseOnSelect variant='dark' expand='md' bg='dark'>
      <Navbar.Brand>
        <img
          src={Logo}
          alt='Logo'
          width='50px'
          height='50px'
          style={{ marginLeft: '10px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          <LinkContainer to='/dashboard'>
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/tickets'>
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
