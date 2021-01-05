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
  const labels = ["Health", "Wealth", "Family", "Love", "Fucks given"];

  useEffect(() => {
    const finishedCount = questionnairesFinished.filter(Boolean).length;
    const percentage = (finishedCount / questionnairesFinished.length) * 100;
    setProgress(percentage);
  }, [questionnairesFinished]);

  useEffect(() => {
    if (progress >= 100) {
      setAllFinished(true);
    }
  }, [progress]);

  const [dataset1, setDataset1] = useState({
    label: "q1",
    data: [0, 0, 0, 0, 0],
    backgroundColor: "yellow",
  });
  const [dataset2, setDataset2] = useState({
    label: "q2",
    data: [0, 0, 0, 0, 0],
    backgroundColor: "red",
  });
  const [dataset3, setDataset3] = useState({
    label: "q3",
    data: [0, 0, 0, 0, 0],
    backgroundColor: "chucknorris",
  });
  const [dataset4, setDataset4] = useState({
    label: "q4",
    data: [0, 0, 0, 0, 0],
    backgroundColor: "green",
  });
  const [dataset5, setDataset5] = useState({
    label: "q5",
    data: [0, 0, 0, 0, 0],
    backgroundColor: "brown",
  });

  // data passed to radar chart
  const [radarData] = useState({
    labels,
    datasets: [dataset1, dataset2, dataset3, dataset4, dataset5],
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
              <StartPage
                radarData={radarData}
                radarOptions={radarOptions}
                progress={progress}
              />
            </Route>
            <Route exact path="/fortunes">
              <FortunePage
                radarData={radarData}
                radarOptions={radarOptions}
                progress={progress}
              />
            </Route>
            <Route exact path="/fortunes/1">
              <Questionnaire
                id={1}
                questions={questions1}
                setRadarData={setDataset1}
                radarData={dataset1}
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
                radarData={dataset2}
                setRadarData={setDataset2}
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
                radarData={dataset3}
                setRadarData={setDataset3}
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
                radarData={dataset4}
                setRadarData={setDataset4}
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
                radarData={dataset5}
                setRadarData={setDataset5}
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
