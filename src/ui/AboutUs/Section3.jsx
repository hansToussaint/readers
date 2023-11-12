import styled from "styled-components";

const Section3 = styled.section`
  background-color: var(--color-grey-50);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 10rem;
  justify-content: center;

  padding: 20rem 15rem;

  & form {
    box-shadow: none;
    padding: 0;
    background: none;
    border: none;

    & button {
      background-color: var(--color-green-700);
      color: var(--color-grey-0);

      &:hover {
        background-color: var(--color-green-700);
      }
    }
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: 500px;
    justify-content: center;
  }

  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    gap: 10rem;

    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export default Section3;
