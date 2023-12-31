import Iframe from "react-iframe";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledBookReader = styled.div`
  max-width: 100%;
  max-height: 95%;
  overflow: hidden;
  background-color: #333;

  @media screen and (max-width: 500px) {
    max-height: 90%;
  }
`;

const HideVertical = styled.div`
  position: absolute;
  /* top: 3.5vh;
  bottom: 5.6vh; */
  height: 94vh;
  width: 5.6rem;
  /* max-height: 91vh; */
  z-index: 0;
  background-color: #333;
`;

const HideHorizontal = styled.div`
  position: absolute;
  width: 100vw;
  height: 4.5rem;
  background-color: #333;
  z-index: 2;
`;

function BookReader() {
  const { readId } = useParams();

  return (
    <StyledBookReader>
      <HideVertical></HideVertical>
      <HideHorizontal></HideHorizontal>
      <Iframe
        url={`https://www.archive.org/stream/${readId}?ui=embed`}
        styles={{
          height: "99.2vh",
          width: "100vw",
          border: "none",
          borderBottom: "7px solid #333",
        }}
      />
    </StyledBookReader>
  );
}

export default BookReader;
