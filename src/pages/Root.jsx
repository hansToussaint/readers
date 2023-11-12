import styled from "styled-components";
import FormSearch from "../ui/FormSearch";
import StyledHeader from "../ui/HeaderStyled";
import Logo from "../ui/Logo";
import HeaderMenu from "../ui/HeaderMenu";

const StyledRoot = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.2rem 2.4rem;

  display: grid;
  grid-template-rows: auto 1fr;
  height: 100dvh;

  background-image: linear-gradient(
      to right bottom,
      var(--bg-color-1),
      var(--bg-color-2)
    ),
    url("/background.jpg");
  background-size: cover;
  background-position: top;

  & li {
    &:hover:not(:last-child) {
      background-color: var(--bg-color-1);
    }

    & p,
    span {
      color: #ffff;
    }
  }
`;

const SeacrhDiv = styled.div`
  width: 45%;
  height: 10%;
  margin: 20rem auto;

  @media screen and (max-width: 1150px) {
    width: 57%;
  }
`;

function Root() {
  return (
    <StyledRoot>
      <StyledHeader $variation="root">
        <Logo />
        <HeaderMenu />
      </StyledHeader>

      <SeacrhDiv>
        <FormSearch />
      </SeacrhDiv>
    </StyledRoot>
  );
}

export default Root;
