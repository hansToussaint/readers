import styled, { css } from "styled-components";

const variations = {
  primary: css`
    /* display: flex;
  flex-direction: column;
  /* align-items: center; */

    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-lg);
    padding: 3.5rem;

    overflow: hidden;
    font-size: 1.4rem;
    /* background-color: red; */

    & h4 {
      margin-bottom: 2rem;
    }

    & p {
      text-align: center;
    }
  `,

  secondary: css`
    font-size: 1.4rem;
  `,
};

const Form = styled.form`
  background-color: var(--color-grey-0);

  ${(props) => variations[props.$variation]}
`;

Form.defaultProps = {
  $variation: "primary",
};

export default Form;
