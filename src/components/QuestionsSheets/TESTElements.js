import styled from "styled-components";

export const TESTContainer1 = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0.01)),
    url(https://cdn.glitch.com/fd5d835e-cc49-4284-bc29-e8b6f5bb3324%2Fheart-2.jpg?v=1607553624388);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const TESTContainer2 = styled.div`
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.003),
      rgba(255, 255, 255, 0.001)
    ),
    url(https://cdn.glitch.com/fd5d835e-cc49-4284-bc29-e8b6f5bb3324%2Fshake-1.jpg?v=1607553626719);
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const EndBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  justify-content: flex-end;
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
