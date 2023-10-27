import styled, { css } from "styled-components";
import BookItemLarge from "./BookItemLarge";
import BookItemMini from "./BookItemMini";
import Spinner from "../../ui/Spinner";
import { useBooks } from "./useBooks";
import { useViewResults } from "../../context/ViewResultsContext";

const StyledBookList = styled.div`
  width: 100%;

  display: grid;
  grid-gap: 3rem;
  justify-content: space-between;

  ${(props) =>
    props.type === "large" &&
    css`
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    `}

  ${(props) =>
    props.type === "mini" &&
    css`
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    `} /* background-color: red; */
`;

function BookList() {
  const { isLoading, data, error } = useBooks();
  const { isLargeView } = useViewResults();

  const books = data?.items;

  console.log(error);

  if (isLoading) return <Spinner />;

  return (
    <>
      {isLargeView ? (
        <StyledBookList type="large">
          {books.map((book) => (
            <BookItemLarge book={book} key={book.id} />
          ))}
        </StyledBookList>
      ) : (
        <StyledBookList type="mini">
          {books.map((book) => (
            <BookItemMini book={book} key={book.id} />
          ))}
        </StyledBookList>
      )}
    </>
  );
}

export default BookList;
