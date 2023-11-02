import styled, { css } from "styled-components";
import BookItemLarge from "./BookItemLarge";
import BookItemMini from "./BookItemMini";
import Spinner from "../../ui/Spinner";
import { useBooks } from "./useBooks";
import { useViewResults } from "../../context/ViewResultsContext";
import Pagination from "../../ui/Pagination";
import { useOrderedBooks } from "./useOrderedBooks";

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
  const { data } = useBooks();
  const count = data?.items.length;

  const {
    isLoading: isLoadingOrderedBooks,
    data: dataOrderedBooks,
    error: errorOrderedBooks,
  } = useOrderedBooks();
  const { isLargeView } = useViewResults();

  // const books = data?.items;
  // const orderedbooks = dataOrderedBooks?.items;
  const orderedbooks = dataOrderedBooks;
  // console.log(dataOrderedBooks);

  // console.log(error, errorOrderedBooks);
  console.log(errorOrderedBooks);

  // if (isLoading || isLoadingOrderedBooks) return <Spinner />;
  if (isLoadingOrderedBooks) return <Spinner />;

  return (
    <>
      {isLargeView ? (
        <StyledBookList type="large">
          {orderedbooks?.map((book) => (
            <BookItemLarge book={book} key={book.id} />
          ))}
        </StyledBookList>
      ) : (
        <StyledBookList type="mini">
          {orderedbooks.map((book) => (
            <BookItemMini book={book} key={book.id} />
          ))}
        </StyledBookList>
      )}
      <Pagination count={count} />
    </>
  );
}

export default BookList;
