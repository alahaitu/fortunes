import styled, { keyframes } from "styled-components";

export const Fades = keyframes`
0% { 
  opacity: 0; 
  },
  
100% { 
opacity: 0.5; 
  }
`;
export const Fadex = keyframes`
0% { 
  opacity: 1; 
  },
  
100% { 
opacity: 0.5; 
  }
`;

export const Moonhover = keyframes`
0%, 100% {
transform: 0px;
  }

50% {
transform: 10px;
  }
`;

export const BoXed = keyframes`
0% {   box-shadow: 3px 7px #e31837;  }  
13% {  box-shadow: 13px 4px palevioletred; }
25% {   box-shadow: 3px 7px #e31837;  }  
34% {  box-shadow: 13px 5px palevioletred; }
44% {   box-shadow: 3px 7px #e31837;  } 
54% {  box-shadow: 7px 5px palevioletred; }
65% {   box-shadow: 3px 7px #e31837;  } 
`;
export const FadeIn = keyframes`
0% {  opacity: 0; }

100% { opacity: 1; },

`;

export const FadeBF = keyframes`
0%, 100% { 
  opacity: 0; 
  },
  
50% { 
opacity: 1; 
  }
`;
