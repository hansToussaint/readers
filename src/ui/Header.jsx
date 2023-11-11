import styled, { css } from "styled-components";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  height: 9rem;
  background-color: var(--color-grey-0);

  padding: 1.2rem 8%;
  margin-top: 7rem;

  /* padding: 1.2rem 4.5rem; */

  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
  justify-items: center;

  ${(props) =>
    props.$type === "root" &&
    css`
      padding: 1.2rem 2%;
      margin-top: 7rem;
    `}

  @media screen and (max-width: 1150px) {
    /* background-color: red; */
    padding: 1.2rem 0;
  }
`;

function Header() {
  console.log(window.location.pathname);
  return (
    <StyledHeader $type={window.location.pathname !== "/" ? "" : "root"}>
      <Logo />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
