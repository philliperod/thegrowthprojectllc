import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Hamburger,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">logo</NavLogo>
          <Hamburger>
            <FaBars />
          </Hamburger>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/consultation">Consultation</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
