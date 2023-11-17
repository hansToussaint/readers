import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  /* background-color: red; */
  padding-left: 2rem;
`;

const Img = styled.img`
  height: 6rem;
  width: 17rem;

  object-fit: cover;
  object-position: center;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Link to="/">
        <Img src={src} alt="logo" />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
