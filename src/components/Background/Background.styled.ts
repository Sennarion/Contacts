import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const animate = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 600px) {
    background-size: 300% 300%;
    background-image: linear-gradient(
      -45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    );
    animation: ${animate} 20s ease infinite;
  }
`;
