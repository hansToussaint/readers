import { keyframes } from "styled-components";

export const growAndShrink = keyframes`
  0% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
`;

export const moveUp = keyframes`
  0%{
    opacity: 0;
    transform: translateY(10rem);
  }



    100% {
        opacity: 1;
        transform: translate(0);
    }
`;

export const moveInleft = keyframes`
  0%{
    opacity: 0;
        transform: translateX(-10rem);
  }

  80% {
        transform: translateX(1rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
`;

export const moveInRight = keyframes`
0% {
        opacity: 0;
        transform: translateX(10rem);
    }

    80% {
        transform: translateX(-1rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }`;
