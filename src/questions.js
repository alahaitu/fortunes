import React from "react";

const child = () => {
  return (
    <div>
      this is a child component that can be a styled component. You can place an
      image or something else here.
    </div>
  );
};

// these are the questions that are asked in this order
export const questions1 = [
  {
    childPage: child,
    questionText: "This is Question 1x",
    questionOptions: [
      { text: "agree", value: [0, -5, 3, 2, -2] },
      { text: "neutral", value: [2, 1, -1, 0, 0] },
      { text: "disagree", value: [0, 0, 0, 0, 0] },
    ],
  },
  {
    questionText: "This is Question 2x",
    questionOptions: [
      { text: "agree", value: [10, -5, 3, 2, -2] },
      { text: "neutral", value: [0, 0, 0, 0, 0] },
      { text: "disagree", value: [0, 0, 0, 0, 0] },
    ],
  },
];

// these are the questions that are asked in this order
export const questions2 = [
  {
    childPage: child,
    questionText: "This is Question 1x",
    questionOptions: [
      { text: "agree", value: [0, -5, 3, 2, -2] },
      { text: "neutral", value: [2, 1, -1, 0, 0] },
      { text: "disagree", value: [0, 0, 0, 0, 0] },
    ],
  },
  {
    questionText: "This is Question 2",
    questionOptions: [
      { text: "agree", value: [10, -5, 3, 2, -2] },
      { text: "neutral", value: [0, 0, 0, 0, 0] },
      { text: "disagree", value: [0, 0, 0, 0, 0] },
    ],
  },
];

// these are the questions that are asked in this order
export const questions3 = [
  {
    id: 3,
    childPage: child,
    questionText: "This is Question 1x",
    questionOptions: [
      { text: "agree", value: [0, -5, 3, 2, -2] },
      { text: "neutral", value: [2, 1, -1, 0, 0] },
      { text: "disagree", value: [0, 0, 0, 0, 0] },
    ],
  },
  {
    questionText: "This is Question 2",
    questionOptions: [
      { text: "agree", value: [10, -5, 3, 2, -2] },
      { text: "neutral", value: [0, 0, 0, 0, 0] },
      { text: "disagree", value: [0, 0, 0, 0, 0] },
    ],
  },
];

// these are the questions that are asked in this order
export const questions4 = [
  {
    childPage: child,
    questionText: "This is Question 1x",
    questionOptions: [
      { text: "agree", value: [0, -5, 3, 2, -2] },
      { text: "neutral", value: [2, 1, -1, 0, 0] },
      { text: "disagree", value: [0, 0, 0, 0, 0] },
    ],
  },
  {
    questionText: "This is Question 2",
    questionOptions: [
      { text: "agree", value: [10, -5, 3, 2, -2] },
      { text: "neutral", value: [0, 0, 0, 0, 0] },
      { text: "disagree", value: [0, 0, 0, 0, 0] },
    ],
  },
];

// these are the questions that are asked in this order
export const questions5 = [
  {
    childPage: child,
    questionText: "This is Question 1x",
    questionOptions: [
      { text: "agree", value: [0, -5, 3, 2, -2] },
      { text: "neutral", value: [2, 1, -1, 0, 0] },
      { text: "disagree", value: [0, 0, 0, 0, 0] },
    ],
  },
  {
    questionText: "This is Question 2",
    questionOptions: [
      { text: "agree", value: [10, -5, 3, 2, -2] },
      { text: "neutral", value: [0, 0, 0, 0, 0] },
      { text: "disagree", value: [0, 0, 0, 0, 0] },
    ],
  },
];
