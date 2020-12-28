import React, { Component } from "react";
import { Radar } from "react-chartjs-2";

const BodyFromChild = (props) => (
  <div>
    <p className="test to see if props element works">{props.num}</p>
  </div>
);

class Parentc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Health", "Wealth", "Family", "Love", "Fucks given"],
        datasets: [
          {
            label: "Unclear",
            data: props.chartData,
          },
        ],
      },
    };
    //console.log(this.state.chartReference);
    //console.log(this.state.chartData.datasets[0].data)

    
    const options = {
      title: {
        display: true,
        text: "Chart.js Radar Chart",
      },
      scale: {
        maintainAspectRatio: true,
        gridLines: {
          color: [
            "black",
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "indigo",
            "violet",
          ],
        },
      },
    };
  }

  Highlighter() {
   
    console.log(this.state.chartReference);
  }

  render() {
    return (
      <div className="chart">
        <BodyFromChild num={7} />
        <button onClick={this.Highlighter}>Highlighter</button>
        <Radar
          data={this.state.chartData}
          options={{
            spanGaps: true,
            elements: {
              line: {
                tension: 0.9,
              },
            },
          }}
          num={7}
        />
      </div>
    );
  }
}
export default Parentc;
