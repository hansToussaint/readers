import styled from "styled-components";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);

  /* padding: 1.2rem 11%; */

  padding: 1.2rem 4.5rem;

  border-bottom: 1px solid var(--color-grey-200);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
