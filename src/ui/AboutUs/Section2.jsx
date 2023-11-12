import styled from "styled-components";

const Section2 = styled.section`
  background-color: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding: 20rem 3rem;

  & div {
    width: 80rem;

    @media screen and (max-width: 850px) {
      width: auto;
    }
  }

  & p {
    text-align: center;
    font-size: 1.9rem;
  }
`;

export default Section2;
