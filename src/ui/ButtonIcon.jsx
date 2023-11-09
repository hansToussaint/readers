import styled from "styled-components";

const ButtonIcon = styled.button`
  position: relative;

  width: 100%;
  background: none;
  border: none;
  padding: 1.2rem 0.4rem;
  margin: 0.5rem 0;

  transition: all 0.2s;

  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
    & svg {
      color: var(--color-brand-600);
    }
  }

  & svg {
    width: 2.5rem;
    height: 2.5rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  & span {
    display: block;
    float: left;
  }

  &:focus {
    outline: none;
  }

  & i {
    text-align: center;
    position: absolute;
    right: 3px;
    top: auto;
  }
`;

export default ButtonIcon;
