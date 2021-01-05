import React, { useState } from "react";

import Hero from "../components/Hero";
import { GlobalStyle } from "../globalStyles";

// PAGES

const StartPage = ({ radarData, radarOptions, progress }) => {
  return (
    <>
      <GlobalStyle />
      <Hero
        radarData={radarData}
        radarOptions={radarOptions}
        progress={progress}
      />
    </>
  );
};

export default StartPage;
