import styled from "styled-components";
import { useBook } from "./useBook";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";

const StyledBookDetail = styled.div`
  /* width: 100%; */

  & img {
    width: 20rem;
  }
`;

function BookDetail() {
  const navigate = useNavigate();

  const { book, isLoading } = useBook();

  if (isLoading) return <Spinner />;

  function handleClick() {
    navigate(`/books/${book.id}/read`);
    console.log("click");
  }

  return (
    <StyledBookDetail>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt="img" />
      <p>{book.volumeInfo.title}</p>
      <button onClick={handleClick}>Read Book</button>
    </StyledBookDetail>
  );
}

export default BookDetail;
