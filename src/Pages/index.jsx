import React, { useState } from "react";

import Hero from "../components/Hero";
import { GlobalStyle } from "../globalStyles";

// PAGES

const StartPage = ({ radarData, radarOptions }) => {
  return (
    <>
      <GlobalStyle />
      <Hero radarData={radarData} radarOptions={radarOptions} />
    </>
  );
};

export default StartPage;
