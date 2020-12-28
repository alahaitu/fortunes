import styled, { css, keyframes } from "styled-components";
import { Fades, Moonhover, BoXed, FadeIn, FadeBF } from "../styled";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0.1)),
    url(https://cdn.glitch.com/3659fd71-4929-4f34-9a94-36fdee8ce3d6%2Fheart-1.jpg?v=1606155671445);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const HeroContainer1 = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0.01)),
    url(https://cdn.glitch.com/fd5d835e-cc49-4284-bc29-e8b6f5bb3324%2Fheart-2.jpg?v=1607553624388);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const HeroContainer2 = styled.div`
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.03),
      rgba(255, 255, 255, 0.01)
    ),
    url(https://cdn.glitch.com/fd5d835e-cc49-4284-bc29-e8b6f5bb3324%2Fshake-1.jpg?v=1607553626719);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

// export const HeroIMGSlider = styled.div``;

export const HeroContent = styled.div`
  height: calc(100vh, -80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;
export const HeroItems = styled.div`
  dispaly: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  animation: 2s ${Fades} ease-in;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  margin-top: 3.5rem;
  font-size: clamp(2.5rem, 5vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 7px #e31837;
  letter-spacing: 3px;
  &:hover {
    // box-shadow: 13px 4px #e31837;
    animation: 2s ${BoXed} ease-out infinite;
    cursor: pointer;
    font-size: clamp(2.6rem, 6.1vw, 5rem);
  }
`;

export const HeroP = styled.p`
  font-size: clamp(1rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 2s, ease-out;

  &:hover {
    background: #000;
    transition: 4s ease-out;
    cursor: pointer;
    color: #e31837;
  }
`;

export const HeroBtn2 = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #palevioletred;
  color: #fff;
  transition: 2s, ease-out;

  &:hover {
    background: #000;
    transition: 4s ease-out;
    cursor: pointer;
    color: #e31837;
  }
`;

export const HeroBtn3 = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #000;
  color: #fff;
  transition: 2s, ease-out;

  &:hover {
    background: #000;
    transition: 4s ease-out;
    cursor: pointer;
    color: #e31837;
  }
`;
export const HeroBtn4 = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: palevioletred;
  color: #fff;
  transition: 2s, ease-out;

  &:hover {
    background: #000;
    transition: 4s ease-out;
    cursor: pointer;
    color: #e31837;
  }
`;

export const StillScrolling = styled.div`
  margin-top: 0;
  background: #150f0f;
  height: 100vh;
  background-position: center;
  background-size: cover;
  height: 350vh;
`;
