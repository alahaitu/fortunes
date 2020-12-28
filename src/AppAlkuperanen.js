import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Testisivu from "./components/Hero";
import Fortunes from "./components/Fortunes";
// PARENT


function App() {
  
  const [radarData, setRadarData] = useState({
    labels: ["Health", "Wealth", "Family", "Love", "Fucks given"],
    datasets: [
      {
        label: "Unclear",
        data: [22, 42, 49, 19, 3],
      },
    ],
  });
    const [radarData1, setRadarData1] = useState({
    labels: ["Health", "Wealth", "Family", "Love", "Fucks given"],
    datasets: [
      {
        label: "Unclear",
        data: [26, 42, 51, 19, 49],
      },
    ],
  });

 

  const [radarOptions, setRadarOptions] = useState({
    title: {
      display: true,
    },
    spanGaps: false,
    elements: {
      line: {
        tension: 0.9,
      },
    },
    scale: {
      maintainAspectRatio: true,

      gridLines: {
        color: [
          "red",
          "grey",
          "red",
          "grey",
          "red",
          "grey",
          "indigo",
          "violet",
        ],
      },
    },
  });
  


  
  return (
    <>
      <Router>
    <GlobalStyle />
  <Hero radarData={radarData} radarOptions={radarOptions}/>;
  
        </Router>
    </>
  );
}

export default App;
