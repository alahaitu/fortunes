import React, { useState } from "react";

import Radari from "./FunChart";

// import Fortunes from "./parentComponents";
//GRANDCHILD
const Chart = ({ radarData, radarOptions }) => {
  console.log(radarData);
  return (
    <>
      <div>
        <Radari radarData={radarData} radarOptions={radarOptions} />
      </div>
    </>
  );
};

export default Chart;
