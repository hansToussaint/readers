import styled from "styled-components";

const DivJoinUs = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;

  padding: 2rem 1rem 5rem;

  border-bottom: 1px solid var(--color-grey-200);

  position: relative;
  & p {
    text-align: center;
    font-size: 1.9rem;
  }

  & button {
    background-color: var(--color-orange);

    position: absolute;
    bottom: -4.8rem;
    right: -5rem;
    transform: translate(-50%, -50%);

    &:hover {
      background-color: var(--color-yellow-700);
      color: var(--color-grey-300);
    }
  }
`;

export default DivJoinUs;
