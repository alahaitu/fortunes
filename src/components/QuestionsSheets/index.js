import React, { useState } from "react";
import { Link } from "react-router-dom";

import { HeroContainer1, HeroContent, HeroH1, HeroItems, HeroP, StillScrolling } from "../Hero/HeroElements";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { EndBtn } from "./TESTElements";

const Hellings = ({ radarData, radarOptions, progress }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StillScrolling>
      <Link to="/finished">
        <EndBtn>end presence</EndBtn>
      </Link>
      <HeroContainer1>
        <Navbar toggle={toggle} />
        <Sidebar
          isOpen={isOpen}
          toggle={toggle}
          radarData={radarData}
          radarOptions={radarOptions}
          progress={progress}
        />
        <HeroContent>
          <HeroItems>
            <HeroH1>
              You have already come far to be finished with the presence
            </HeroH1>
            <HeroP>Are you ready for what comes after?</HeroP>
          </HeroItems>
        </HeroContent>
      </HeroContainer1>
    </StillScrolling>
  );
};

export default Hellings;
