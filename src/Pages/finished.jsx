import React, { useState } from "react";

import EndofLine from "../components/FINISHED";
import { GlobalStyle } from "../globalStyles";

// PAGES

const FinishedPage = ({ radarData, radarOptions }) => {
  return (
    <>
      <GlobalStyle />
      <EndofLine />
    </>
  );
};

export default FinishedPage;
