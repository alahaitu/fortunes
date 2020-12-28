import React, { useState } from "react";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
  StillScrolling,
} from "./HeroElements";
import Navbar from "../Navbar";
const PAGE_START = "start";

const Testisivu = ({ page, radarData, radarOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StillScrolling>
      <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar
          isOpen={isOpen}
          toggle={toggle}
          radarData={radarData}
          radarOptions={radarOptions}
        />
        <HeroContent>
          <HeroItems>
            <HeroH1>Go back home</HeroH1>
            <HeroP>Already lost?</HeroP>
            <HeroBtn>Start here</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </StillScrolling>
  );
};

export default Testisivu;
