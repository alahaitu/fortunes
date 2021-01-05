import React from "react";

import Chart from "../Fortunes";
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SideBtnWrap } from "./SidebarElements";

//CHILD
const Sidebar = ({ isOpen, toggle, radarData, radarOptions, progress }) => {
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
          <div>
            <label htmlFor="progress">Progress:</label>
            <progress id="progress" value={progress} max="100">
              {progress}%
            </progress>
          </div>
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
