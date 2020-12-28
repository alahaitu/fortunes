import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";
import Chart from "../Fortunes";
//CHILD
const Sidebar = ({ isOpen, toggle, radarData, radarOptions }) => {
  console.log(radarData);
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <Icon>
          <CloseIcon onClick={toggle}>X</CloseIcon>
        </Icon>
        <SidebarMenu>
          <SidebarLink to="/">My heaaart is so bluue</SidebarLink>
          <SidebarLink to="/">buhuuuuuuuuuuuuuu</SidebarLink>
          <SidebarLink to="/">its too much of a blur</SidebarLink>
          <Chart radarData={radarData} radarOptions={radarOptions} />
          <CloseIcon></CloseIcon>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/">Get to the start</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    </>
  );
};
// shift + alt + downarrow created these duplicates, how cool!
export default Sidebar;
