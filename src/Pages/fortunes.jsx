import React from "react";

import Hellings from "../components/QuestionsSheets";
import { GlobalStyle } from "../globalStyles";

// PAGES <Helling radarData={radarData} radarOptions={radarOptions}/>

const FortunePage = ({ radarData, radarOptions, progress }) => {
  return (
    <>
      <GlobalStyle />
      <Hellings
        radarData={radarData}
        radarOptions={radarOptions}
        progress={progress}
      />
    </>
  );
};

export default FortunePage;
