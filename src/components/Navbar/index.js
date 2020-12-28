import React from "react";
import { Nav, NavLink, NavIcon } from "./NavbarElements";
import { Fades } from "../styled";

const Navbar = ({ toggle, isOpen }) => {
  return (
    <>
      <Nav>
        {isOpen ? (
          <NavLink to="/">chartview</NavLink>
        ) : (
          <NavLink to="/">byebye blue</NavLink>
        )}
        {isOpen ? "" : <NavIcon onClick={toggle}>My Chart</NavIcon>}
      </Nav>
    </>
  );
};

export default Navbar;
