import styled from "styled-components";

const Textarea = styled.textarea`
  min-height: 13rem;

  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;

  box-shadow: var(--shadow-sm);

  &:focus {
    outline: none;
  }
`;

export default Textarea;
