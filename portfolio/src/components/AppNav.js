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
      <Navbar color='danger' expand='lg' light fixed='top'>
        <NavbarBrand href='/#landing'>
          <img src={logo} alt='Logo' id='logo'></img>
        </NavbarBrand>
        <NavbarToggler onClick={() => toggle()} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ms-auto' navbar>
            <NavItem className='mx-1'>
              <NavLink href='/#about'>About</NavLink>
            </NavItem>
            <NavItem className='mx-1'>
              <NavLink href='/#skills'>Skills</NavLink>
            </NavItem>
            <NavItem className='mx-1'>
              <NavLink href='/#projects'>Projects</NavLink>
            </NavItem>
            <NavItem className='mx-1'>
              <NavLink href='#contact'>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default AppNav;
