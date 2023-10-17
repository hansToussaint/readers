import styled from "styled-components";
import { useBook } from "./useBook";
import Spinner from "../../ui/Spinner";

const StyledBookDetail = styled.div`
  width: 90%;
`;

function BookDetail() {
  const { book, isLoading } = useBook();

  if (isLoading) return <Spinner />;

  return (
    <StyledBookDetail>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt="img" />
      <p>{book.volumeInfo.title}</p>
    </StyledBookDetail>
  );
}

export default BookDetail;
