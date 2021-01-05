import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Questionnaire from "./components/QuestionsSheets/questionnaire";
import StartPage from "./Pages";
import FinishedPage from "./Pages/finished";
import FortunePage from "./Pages/fortunes";
import { questions1, questions2, questions3, questions4, questions5 } from "./questions";

// PAGES
function App() {
  const [questionnairesFinished, setQuestionnairesFinished] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [allFinished, setAllFinished] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const finishedCount = questionnairesFinished.filter(Boolean).length;
    const percentage = (finishedCount / questionnairesFinished.length) * 100;
    setProgress(percentage);

    if (
      questionnairesFinished[1] &&
      questionnairesFinished[2] &&
      questionnairesFinished[3] &&
      questionnairesFinished[4] &&
      questionnairesFinished[5]
    ) {
      setAllFinished(true);
    }
  }, [questionnairesFinished]);

  // data passed to radar chart
  const [radarData, setRadarData] = useState({
    labels: ["Health", "Wealth", "Family", "Love", "Fucks given"],
    datasets: [
      // this is the "target" data that always stays the same
      {
        label: "Unclear",
        data: [22, 42, 49, 19, 3],
      },
      // this is the data that changes when users answers questions
      {
        borderColor: "yellow",
        label: "userdata",
        data: [0, 0, 0, 0, 0],
      },
    ],
  });

  const radarOptions = {
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
  };

  const handleQuestionnaireFinished = (id) => {
    const result = [...questionnairesFinished];
    result[id - 1] = true;
    setQuestionnairesFinished(result);
  };

  return (
    <>
      <section className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <StartPage radarData={radarData} radarOptions={radarOptions} />
            </Route>
            <Route exact path="/fortunes">
              <FortunePage radarData={radarData} radarOptions={radarOptions} />
            </Route>
            <Route exact path="/fortunes/1">
              <Questionnaire
                id={1}
                questions={questions1}
                setRadarData={setRadarData}
                radarData={radarData}
                radarOptions={radarOptions}
                handleQuestionnaireFinished={handleQuestionnaireFinished}
                finished={questionnairesFinished[0]}
                allFinished={allFinished}
              />
            </Route>
            <Route exact path="/fortunes/2">
              <Questionnaire
                id={2}
                questions={questions2}
                radarData={radarData}
                setRadarData={setRadarData}
                radarOptions={radarOptions}
                handleQuestionnaireFinished={handleQuestionnaireFinished}
                finished={questionnairesFinished[1]}
                allFinished={allFinished}
              />
            </Route>
            <Route exact path="/fortunes/3">
              <Questionnaire
                id={3}
                questions={questions3}
                radarData={radarData}
                setRadarData={setRadarData}
                radarOptions={radarOptions}
                handleQuestionnaireFinished={handleQuestionnaireFinished}
                finished={questionnairesFinished[2]}
                allFinished={allFinished}
              />
            </Route>
            <Route exact path="/fortunes/4">
              <Questionnaire
                id={4}
                questions={questions4}
                radarData={radarData}
                setRadarData={setRadarData}
                radarOptions={radarOptions}
                handleQuestionnaireFinished={handleQuestionnaireFinished}
                finished={questionnairesFinished[3]}
                allFinished={allFinished}
              />
            </Route>
            <Route exact path="/fortunes/5">
              <Questionnaire
                id={5}
                questions={questions5}
                radarData={radarData}
                setRadarData={setRadarData}
                radarOptions={radarOptions}
                handleQuestionnaireFinished={handleQuestionnaireFinished}
                finished={questionnairesFinished[4]}
                allFinished={allFinished}
              />
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
