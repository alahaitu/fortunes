import React, { useState } from "react";
// import Fortunes from "./parentComponents";
import Radari from "./FunChart";
//GRANDCHILD
const Chart = ({ radarData, radarOptions }) => {
 
  

  

  return (
    <>
      <div>
        <Radari radarData={radarData} radarOptions={radarOptions} />
      </div>
    </>
  );
};

export default Chart;
