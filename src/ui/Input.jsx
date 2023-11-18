import styled, { css } from "styled-components";

const Input = styled.input`
  ${(props) =>
    props.$specialStyle === "search" &&
    css`
      font-family: inherit;
      font-size: 1.9rem;
      background-color: var(--color-grey-200);
      color: var(--color-grey-600);
      border: none;
      border-radius: 100px;
      padding: 0.7rem 12rem 0.7rem 3rem;
      width: 90%;
      height: 6.5rem;
      transition: all 0.3s;
      margin-right: -5rem;

      &::-webkit-input-placeholder {
        font-weight: 600;
        color: var(--color-grey-400);
      }

      &:focus {
        width: 95%;
      }

      @media screen and (max-width: 950px) {
        height: 5.5rem;
        font-size: 1.5rem;
        padding: 0.7rem 12rem 0.7rem 1.5rem;
      }
    `}

  ${(props) =>
    props.$specialStyle === "regular" &&
    css`
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-300);
      border-radius: var(--border-radius-sm);
      padding: 0.8rem 1.2rem;
    `}

      box-shadow: var(--shadow-sm);

  &:focus {
    outline: none;
  }
`;

Input.defaultProps = {
  $specialStyle: "regular",
};

export default Input;
