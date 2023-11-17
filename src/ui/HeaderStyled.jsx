import styled, { css } from "styled-components";

const variations = {
  root: css`
    padding: 1.2rem 2%;
    /* margin-top: 7rem; */
    background-color: transparent;
  `,

  normal: css`
    padding: 1.2rem 8%;
    background-color: var(--color-grey-0);
    border-bottom: 1px solid var(--color-grey-100);
  `,
};

const StyledHeader = styled.header`
  height: 9rem;

  /* padding: 1.2rem 4.5rem; */

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
  justify-items: center;

  @media screen and (max-width: 1150px) {
    /* background-color: red; */
    padding: 1.2rem 0;
  }

  ${(props) => variations[props.$variation]}
`;

StyledHeader.defaultProps = {
  $variation: "normal",
};

export default StyledHeader;
