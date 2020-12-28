import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-height: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 4rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
 display; block; 
 position: absolute;
 padding: 2rem;
 right: 25px;
 cursor: pointer;
 color: #fff;

 p {
     transform: translate(-75%, 100%);
     font-weight: bold;
 }
`;
