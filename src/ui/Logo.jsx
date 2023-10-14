import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  /* background-color: red; */
`;

const Img = styled.img`
  height: 7.5rem;
  width: 20rem;

  object-fit: cover;
  object-position: center;
`;
function Logo() {
  const src = "/logo-light.png";

  return (
    <StyledLogo>
      <Link to="/">
        <Img src={src} alt="logo" />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
