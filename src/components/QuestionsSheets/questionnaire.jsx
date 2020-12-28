import React, { Component } from "react";
import { Radar } from "react-chartjs-2";

const child = (state) => {
  return (
    <div>
      this is a child component that can be a styled component. you can access
      state here. last selection was {state.lastSelection}
    </div>
  );
};

class Questionnaire extends Component {
  // the dimensions in the chart thingie
  labels = ["alpha", "beta", "gamma", "omega"];

  // target values that are always the same. must match the number of dimensions
  targetValues = [10, 20, 30, 40];

  // these are the questions that are asked in this order
  questions = [
    {
      questionText: "This is Question 1",
      childPage: child,
      questionOptions: [
        { text: "agree", value: "10" },
        { text: "neutral", value: "20" },
        { text: "disagree", value: "40" },
      ],
    },
    {
      questionText: "This is Question 2",
      childPage: child,
      questionOptions: [
        { text: "agree", value: "10" },
        { text: "neutral", value: "20" },
        { text: "disagree", value: "40" },
      ],
    },
  ];

  // data passed to radar chart
  data = {
    labels: this.labels,
    datasets: [
      // this is the "target" data that always stays the same
      {
        backgroundColor: "gray",
        borderColor: "gray",
        label: "target",
        data: this.targetValues,
      },
      // this is the data that changes when users answers questions
      {
        backgroundColor: "yellow",
        borderColor: "yellow",
        label: "user",
        data: this.targetValues,
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      // the index number of the question that is being asked
      count: 0,
      // the current answer that the user has selected
      selection: this.questions[0].questionOptions[0].value,
      data: this.data,
      lastSelection: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // chart configurations
  options = {
    maintainAspectRatio: true,
    spanGaps: false,
    elements: {
      line: {
        tension: 0.000001,
      },
    },
  };

  // run every time user selects an option
  handleChange(event) {
    this.setState({ selection: event.value, lastSelection: event.text });
    console.log(event);
  }

  // run when the user presses submit button
  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    // copy old user values and change the selected value
    const newUserValues = [...this.state.data.datasets[1].data];
    newUserValues[this.state.count] = parseInt(this.state.selection);
    const count = this.state.count + 1;
    const data = { ...this.state.data };
    data.datasets[1].data = newUserValues;
    this.setState({
      count: count,
      selection: this.questions[count]?.questionOptions[0]?.value,
      data: data,
    });
  }

  render() {
    // html for asking questions
    const question = (
      <div>
        {this.questions[this.state.count]?.childPage &&
          this.questions[this.state.count]?.childPage(this.state)}
        <p>{this.questions[this.state.count]?.questionText}</p>
        {this.questions[this.state.count]?.questionOptions.map(
          (option, index) => (
            <span key={index}>
              <button onClick={() => this.handleChange(option)}>
                {option.text}
              </button>
            </span>
          )
        )}
      </div>
    );
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div></div>
          {/* if current question is smaller than question array length 
        ask question, otherwise show ending text */}
          {this.state.count < this.questions.length ? (
            question
          ) : (
            <p>Finished</p>
          )}
        </form>
        <Radar data={this.data} options={this.options} />
      </>
    );
  }
}

export default Questionnaire;
