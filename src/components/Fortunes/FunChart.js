import React, { useEffect, useRef, useState } from "react";
import { Radar } from "react-chartjs-2";

const Radari = ({ radarData, radarOptions }) => {
  return (
    <div className="Radari">
      <p></p>
      <p></p>
      <p></p>
      <Radar data={radarData} options={radarOptions}>
        {" "}
      </Radar>
    </div>
  );
};
export default Radari;
//const [data, setData] = useState(null);