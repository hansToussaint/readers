import styled, { css } from "styled-components";
import FormSearch from "../ui/FormSearch";
import StyledHeader from "../ui/HeaderStyled";
import Logo from "../ui/Logo";
import HeaderMenu from "../ui/HeaderMenu";
import { useDarkMode } from "../context/DarkModeContext";

const StyledRoot = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.2rem 0;

  display: grid;
  grid-template-rows: auto auto 1fr;
  height: 100dvh;

  ${(props) =>
    props.$type === "dark" &&
    css`
      background-image: url("/background-root-dark.png");

      @media screen and (max-width: 500px) {
        background: none;
        background-color: var(--color-grey-50);
      }
    `}

  ${(props) =>
    props.$type === "light" &&
    css`
      background-image: url("/background-root-light.png");

      @media screen and (max-width: 500px) {
        background: none;
        background-color: var(--color-grey-50);
      }
    `}

  background-size: cover;
  background-position: top;

  & li {
    &:hover:not(:last-child) {
      background-color: var(--bg-color-1);
    }

    /* & p,
    span {
      color: #ffff;
    } */
  }
`;

const Text = styled.div`
  /* background-color: red; */
  margin-top: 10rem;
  padding: 2rem 8rem;

  & h1 {
    font-size: 6.8rem;
    font-weight: 700;
    line-height: 1.2;
    color: var(--color-grey-700);

    @media screen and (max-width: 950px) {
      font-size: 3.5rem;
    }
  }

  & span {
    color: var(--color-yellow-700);

    @media screen and (max-width: 450px) {
      color: var(--color-red-800);
    }
  }

  @media screen and (max-width: 950px) {
    margin-top: 0;
    padding: 2rem 6rem;
  }

  @media screen and (max-width: 450px) {
    padding: 2rem 4rem;
  }
`;

const SeacrhDiv = styled.div`
  width: 45%;
  height: fit-content;
  margin-top: 4rem;
  /* margin: 20rem auto; */

  @media screen and (max-width: 1150px) {
    margin-top: 6rem;
    width: 80%;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

function Root() {
  const { isDarkMode } = useDarkMode();

  return (
    <StyledRoot $type={isDarkMode ? "dark" : "light"}>
      <StyledHeader $variation="root">
        <Logo />
        <HeaderMenu />
      </StyledHeader>

      <Text>
        <h1>
          Read <span>your</span>
        </h1>
        <h1>
          favourite <span>Book</span>
        </h1>
        <h1>
          from <span>Here</span>
        </h1>
      </Text>

      <SeacrhDiv>
        <FormSearch />
      </SeacrhDiv>
    </StyledRoot>
  );
}

export default Root;
