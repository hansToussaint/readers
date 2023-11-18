import styled from "styled-components";
import BookReader from "../features/books/BookReader";

const StyledReadPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #333;
`;

function Read() {
  return (
    <StyledReadPage>
      <BookReader />;
    </StyledReadPage>
  );
}

export default Read;
