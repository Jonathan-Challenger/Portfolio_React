import { useState } from "react";
import logo from "../img/logo.png";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const AppNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar color='danger' expand='lg' light className='mb-2'>
        <NavbarBrand href='/'>
          <img src={logo} alt='Logo' id='logo'></img>
        </NavbarBrand>
        <NavbarToggler onClick={() => toggle()} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ms-auto' navbar>
            <NavItem className='mx-1'>
              <NavLink href='/'>About</NavLink>
            </NavItem>
            <NavItem className='mx-1'>
              <NavLink href='/'>Skills</NavLink>
            </NavItem>
            <NavItem className='mx-1'>
              <NavLink href='/'>Projects</NavLink>
            </NavItem>
            <NavItem className='mx-1'>
              <NavLink href='/'>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default AppNav;
