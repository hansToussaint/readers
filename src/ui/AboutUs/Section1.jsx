import styled from "styled-components";
import { moveUp } from "./Animations";

const Section1 = styled.section`
  background-color: var(--color-grey-100);
  padding: 20rem 15rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 10rem;

  & div {
    /* background-color: var(--color-grey-0); */
    max-width: 60rem;
    border: 1px solid var(--color-grey-200);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-lg);
    padding: 5rem 1.5rem 0.5rem;

    animation: ${moveUp} 1.5s ease-out;
    position: relative;
  }

  & p {
    font-size: 1.9rem;
    text-align: center;
    letter-spacing: 0.1rem;
  }

  @media screen and (max-width: 1700px) {
    grid-template-columns: 500px;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 15rem;

    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export default Section1;
