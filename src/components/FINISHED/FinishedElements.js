import styled from "styled-components";

import { BoXed, Fades } from "../styled";

//background images: ekassa badhandling.jpg
export const FContainerS = styled.div`
  //badhandling
  animation: ${Fades} 0.8s ease-in;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0.1)),
    $(props=> props.imgName);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const FContainerS2 = styled.div`
  //bodyisyourtemple
  animation: ${Fades} 0.8s ease-in;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0.1)),
    url(bodyisyourtemple.jpg);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const FContainerS3 = styled.div`
  //shake-1
  animation: ${Fades} 0.8s ease-in;
  background: linear-gradient(
      to right,
      rgba(255, 200, 200, 0.8),
      rgba(255, 255, 255, 0.01)
    ),
    url(shake-1.jpg);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const FContainer = styled.div`
  //HEART-1
  animation: ${Fades} 0.8s ease-in;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0.1)),
    url(https://cdn.glitch.com/3659fd71-4929-4f34-9a94-36fdee8ce3d6%2Fheart-1.jpg);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const FContainer1 = styled.div`
  // heart-2
  animation: ${Fades} 0.8s ease-in;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0.01)),
    url(heart-2.jpg);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const FContainer2 = styled.div`
  //FH_4LR
  animation: ${Fades} 0.8s ease-in;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0.01)),
    url(FH_4LR.jpg);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const FContainer3 = styled.div`
  //FH_5LR
  animation: ${Fades} 0.8s ease-in;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0.1)),
    url(FH_5LR.jpg);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const FContainer4 = styled.div`
  //FH_6LR
  animation: ${Fades} 0.8s ease-in;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0.1)),
    url(FH_6LR.jpg);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const FContainer5 = styled.div`
  //FH_9LR
  animation: ${Fades} 0.8s ease-in;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 200, 0.1)
    ),
    url(FH_9LR.jpg);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const FContainer6 = styled.div`
  //FH_12LR
  animation: ${Fades} 0.8s ease-in;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 200, 0.1)
    ),
    url(FH_LR12.jpg);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const FContainer7 = styled.div`
  //FH_13LR
  animation: ${Fades} 0.8s ease-in;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0.1)),
    url(FH_LR13.jpg);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const FContainer8 = styled.div`
  //FH_14LR
  background: black;
  animation: ${Fades} 0.8s ease-in;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.01), rgba(0, 0, 0.01)),
    url(FH_LR14.jpg);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const FContent = styled.div`
  height: calc(100vh, -80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    width: 60vw;
    padding: 0rem calc((100vw - 1300px) / 2);
  }
`;
export const FItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;

  background: #fff;
  animation: 2s ${BoXed} ease-in-out infinite;
 

  @media screen and (max-width: 650px) {
    width: 100%;
  }
  &:hover {
  
    color: #000;
  line-height: 1;
  font-weight: bold;
    text-transform: uppercase;
    animation: 4s ${Fades} ease-in;
    opacity: 0.5;
    animation-delay: ${(props) => props.delay}
    cursor: pointer;
    font-size: clamp(2.5rem, 5.1vw, 5rem);
  }
`;

export const FH1 = styled.h1`
  margin-top: 3.5rem;
  font-size: clamp(2.5rem, 5vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 7px #e31837;
  letter-spacing: 3px;

  @media screen and (max-width: 768px) {
    font-size: clamp(2rem, 4vw, 4rem);
  }
  @media screen and (max-width: 480px) {
    font-size: clamp(1.7rem, 3.5vw, 3.5rem);
  }
  &:hover {
    // box-shadow: 13px 4px #e31837;
    animation: 2s ${BoXed} ease-in-out infinite;
    cursor: pointer;
    font-size: clamp(2.5rem, 5.1vw, 5rem);
  }
`;

export const FP = styled.p`
  font-size: clamp(1rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;
//change Btn to card??
//animate something with FadeOutUp on hover
export const FBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #palevioletred;
  color: #fff;
  transition: 2s, ease-out;
`;
export const StillScrolling1 = styled.div`
  margin-top: 0;
  background: #150f0f;
  height: 100vh;
  background-position: center;
  background-size: cover;
  height: 350vh;
`;
