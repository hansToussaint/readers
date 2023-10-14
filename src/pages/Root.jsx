import styled from "styled-components";
import SearchBooks from "../ui/SearchBooks";

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

function Root() {
  return (
    <StyledRoot>
      <SearchBooks />
    </StyledRoot>
  );
}

export default Root;
