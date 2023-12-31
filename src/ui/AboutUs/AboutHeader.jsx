import styled from "styled-components";
import { growAndShrink } from "./Animations";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  min-height: 75vh;
  background-image: linear-gradient(
      to bottom,
      var(--bg-color-about-1),
      var(--bg-color-about-2)
    ),
    url("/about-image.jpg");
  background-size: cover;
  background-position: top;
  position: relative;

  padding-top: 4rem;
  padding-bottom: 2rem;

  & p,
  span,
  h1 {
    color: #ffff;
  }

  & p {
    font-size: 1.9rem;
  }

  & h1 {
    font-size: 5rem;
    animation: ${growAndShrink} 2s ease-in-out;
  }

  @media screen and (max-width: 610px) {
    min-height: 95vh;
  }

  @media screen and (max-width: 400px) {
    min-height: 115vh;
  }

  @media screen and (max-width: 315px) {
    min-height: 150vh;
  }
`;

export default Header;
