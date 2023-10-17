import styled from "styled-components";

const Input = styled.input`
  font-family: inherit;
  font-size: 1.9rem;
  background-color: var(--color-grey-300);
  color: var(--color-grey-600);
  border: none;
  border-radius: 100px;
  box-shadow: var(--shadow-sm);
  padding: 0.7rem 3rem;
  width: 85%;
  height: 90%;
  transition: all 0.3s;
  margin-right: -5rem;

  &::-webkit-input-placeholder {
    font-weight: 600;
    color: var(--color-grey-100);
  }

  &:focus {
    outline: none;
    width: 95%;
  }
`;

export default Input;
