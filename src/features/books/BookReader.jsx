import Iframe from "react-iframe";
import styled from "styled-components";

const StyledBookReader = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  background-color: #333;
`;

const HideVertical = styled.div`
  position: absolute;
  top: 3.9vh;
  bottom: 4.3rem;
  width: 4.2rem;
  /* max-height: 91vh; */
  z-index: 1;
  background-color: black;
`;

const HideHorizontal = styled.div`
  position: absolute;
  width: 100vw;
  height: 3.5rem;
  background-color: #333;
  z-index: 2;
`;

function BookReader() {
  return (
    <StyledBookReader>
      <HideVertical></HideVertical>
      <HideHorizontal></HideHorizontal>
      <Iframe
        url="https://www.archive.org/stream/abroadcranethoma00craniala?ui=embed"
        // url="https://archive.org/stream/chickenlittlerea00rhdi?ui=embed"
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
