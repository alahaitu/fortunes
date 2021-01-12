import React, { useState } from "react";

import EndofLine from "../components/FINISHED";
import { GlobalStyle } from "../globalStyles";

// PAGES

const FinishedPage = ({ radarData, radarOptions, allFinished }) => {
  return (
    <>
      <GlobalStyle />
      <EndofLine radarData={radarData} allFinished={allFinished} />
    </>
  );
};

export default FinishedPage;
