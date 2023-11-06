import styled, { css } from "styled-components";

const Input = styled.input`
  ${(props) =>
    props.$specialStyle === "search" &&
    css`
      font-family: inherit;
      font-size: 1.9rem;
      background-color: var(--color-grey-100);
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
        outline: none;
        width: 95%;
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
`;

Input.defaultProps = {
  $specialStyle: "regular",
};

export default Input;
