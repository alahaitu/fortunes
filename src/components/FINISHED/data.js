export const getAnswers = (value, answers) => {
  let answer;

  if (value < 30) {
    answer = answers[0];
  } else if (value > 60) {
    answer = answers[1];
  } else {
    answer = answers[2];
  }
  return answer;
};

export const healthAnswers = [
  { title: "title1", text: "text1" },
  { title: "title2", text: "text2" },
  { title: "title3", text: "text3" },
];

export const wealthAnswers = [
  { title: "title1", text: "text1" },
  { title: "title2", text: "text2" },
  { title: "title3", text: "text3" },
];

export const familyAnswers = [
  { title: "title1", text: "text1" },
  { title: "title2", text: "text2" },
  { title: "title3", text: "text3" },
];

export const loveAnswers = [
  {
    title: "Unclear",
    text: "You are the true master with tactics that leads in Panic",
  },
  {
    title: "Off with balance",
    text: "You are the true master with tactics that leads in Panic",
  },
  { title: "title3", text: "text3" },
];

export const fucksGivenAnswers = [
  { title: "title1", text: "text1" },
  { title: "title2", text: "text2" },
  { title: "title3", text: "text3" },
];

/* const LovingAnswers = (props) => {
    
//make a state that if this questionnaire is finished it enables the related answersheet


        const [answerSheet1] = useState({
          
            { 
              data: (Love < 30)
              index: key
              title: "Unclear",
              text: ""
            },
            { 
              data: (Love > 60)
              index: key
              title: "Off with balance",
              text: "You are the true master with tactics that leads in Panic"
            },
            data: (Love > 31 Love, < 60)
              index: key
              title: -
              text: -
            },
          
        });


};


const WorkingAnswers = (props) => {


           const [answerSheet2] = useState({
          
            { 
              data: (Work > 60)
              index: key
              title: "Hide away the success",
              text: "If you are ever to address your own success its for the best to accentuate the obvious. 
              Everyone else can smell the feebleness of a lie-done-badly; Cover the tracks that might take others to
              the peak of power, unless you haven't noticed, its a lonely ride."
            },
            { 
              data: (Work < 30)
              index: key
              title: "Off with balance",
              text: "You are the true master with bad-tactics but hey, you are hot."
            },
            { 
              data: (Work > 31 Work, < 60)
              index: key
              title: -
              text: -
            },
          
        });

};
const FamilyAnswers = (props) => {


           const [answerSheet3] = useState({
          
            { 
              data: (Family < 30)
              index: key
              title: "Interconnected with everything",
              text: "The planet is burning with desire to connect to its original state of material being. 
              You have an answer to that."
            },
            { 
              data: (---) [this answer is only rendered if the answersheet 
                useState = setDivorced(true);] ---KYSY TUOMAKSELTA
              index: key
              title: "Off with balance",
              text: "You are the true master with bad-tactics but hey, you portray alchemy when it comes to social relations. 
              Synchronicity will be seen awkward in 2030."
            },
          
        });

};
const HealthingAnswers = (props) => {


           const [answerSheet2] = useState({
          
            { 
              data: (Health > 60)
              index: key
              title:--,
              text: --
            },
            { 
              data: (Health < 30)
              index: key
              title: "Off with balance",
              text: "You are the true master with bad-tactics but hey, you are in shape."
            },
            { 
              data: (Health > 31 Health, < 60)
              index: key
              title: -
              text: -
            },
          
        });

};
*/
