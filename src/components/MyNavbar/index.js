import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Whirly</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className='nav-link' to='/explore'>Explore</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/my-list'>My List</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/spin'>Spin</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {props.children}
    </div>
  );
};

export default MyNavbar;
