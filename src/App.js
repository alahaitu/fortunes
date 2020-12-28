import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Testisivu from "./components/Hero";
import Fortunes from "./components/Fortunes";
// PAGES
import StartPage from "./Pages";
import FortunePage from "./Pages/fortunes";
import FinishedPage from "./Pages/finished";
import Hellings from "./components/QuestionsSheets";
import EndofLine from "./components/FINISHED";

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
      <section className="App">
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/fortunes">About</Link>
            </li>
            <li>
              <Link to="/finished">Dashboard</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <StartPage radarData={radarData} radarOptions={radarOptions} />
            </Route>
            <Route exact path="/fortunes">
              <FortunePage radarData={radarData} radarOptions={radarOptions} />
            </Route>
            <Route exact path="/finished">
              <FinishedPage radarData={radarData} radarOptions={radarOptions} />
            </Route>
          </Switch>
        </Router>
      </section>
    </>
  );
}

export default App;

//const rootElement = document.getElementById("root");
