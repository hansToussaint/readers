import styled from "styled-components";
import FormSearch from "../ui/FormSearch";

const StyledRoot = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.2rem 2.4rem;

  background-image: linear-gradient(
      to right bottom,
      var(--bg-color-1),
      var(--bg-color-2)
    ),
    url("/background.jpg");
  background-size: cover;
  background-position: top;

  display: flex;
`;

const SeacrhDiv = styled.div`
  width: 45%;
  height: 10%;
  margin: 15rem auto;

  @media screen and (max-width: 1150px) {
    width: 57%;
  }
`;

function Root() {
  return (
    <StyledRoot>
      <SeacrhDiv>
        <FormSearch />
      </SeacrhDiv>
    </StyledRoot>
  );
}

export default Root;
