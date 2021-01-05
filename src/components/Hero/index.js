import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroBtn,
  HeroBtn2,
  HeroBtn3,
  HeroBtn4,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
  StillScrolling
} from "./HeroElements";

const Hero = ({ radarData, radarOptions, progress }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const handlePathBtn = (e) => {
    console.log("path 1 is chosen!");
  };
  const handlePathBtn2 = (e) => {
    console.log("path 2 is chosen!");
  };
  const handlePathBtn3 = (e) => {
    console.log("path 3 is chosen!");
  };
  const handlePathBtn4 = (e) => {
    console.log("path 4 is chosen!");
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
          progress={progress}
        />
        <HeroContent>
          <HeroItems>
            <HeroH1>Your heart just found another way to be broken</HeroH1>
            <HeroP>Have you seen a doctor recently?</HeroP>
            <Link to="/fortunes/1">
              <HeroBtn>Start here</HeroBtn>
            </Link>
          </HeroItems>
          <HeroItems>
            <HeroH1>Planning your next step and how to ditch it </HeroH1>
            <HeroP>When and why</HeroP>
            <Link to="/fortunes/2">
              <HeroBtn2 onClick={handlePathBtn2}>Start here</HeroBtn2>
            </Link>
          </HeroItems>
          <HeroItems>
            <HeroH1>Family:</HeroH1>
            <HeroP>
              A healthy constellation among those who've decided children are
              the future
            </HeroP>
            <Link to="/fortunes/3">
              <HeroBtn onClick={handlePathBtn}>Start here</HeroBtn>
            </Link>
          </HeroItems>
          <HeroItems>
            <HeroH1>The new environment</HeroH1>
            <HeroP>Roadmaps burned, hills crossed....</HeroP>
            <Link to="/fortunes/4">
              <HeroBtn3 onClick={handlePathBtn3}>Start here</HeroBtn3>
            </Link>
          </HeroItems>
          <HeroItems>
            <HeroH1>No rest</HeroH1>
            <HeroP>No rest</HeroP>
            <Link to="/fortunes/5">
              <HeroBtn4 onClick={handlePathBtn4}>Start here</HeroBtn4>
            </Link>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </StillScrolling>
  );
};

export default Hero;
