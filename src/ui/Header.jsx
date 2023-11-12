import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import StyledHeader from "./HeaderStyled";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
