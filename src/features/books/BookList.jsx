import styled, { css } from "styled-components";
import BookItemLarge from "./BookItemLarge";
import BookItemMini from "./BookItemMini";
import Spinner from "../../ui/Spinner";
import { useViewResults } from "../../context/ViewResultsContext";
import Pagination from "../../ui/Pagination";
import { useOrderedBooks } from "./useOrderedBooks";
import Empty from "../../ui/Empty";
import { useMediaQuery } from "react-responsive";

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
  //RESPONSIVE
  const isDesktop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });

  const {
    isLoading: isLoadingOrderedBooks,
    data: dataOrderedBooks,
    // error: errorOrderedBooks,
  } = useOrderedBooks();

  const { isLargeView } = useViewResults();

  const orderedBooks = dataOrderedBooks?.docs.filter(
    (book) => book.ebook_access === "public"
  );

  if (orderedBooks === "[]") return <Empty resourceName="Books" />;

  // console.log(errorOrderedBooks);

  //PAGINATION
  const count = dataOrderedBooks?.numFound;

  if (isLoadingOrderedBooks) return <Spinner />;

  return (
    <>
      {isDesktop && isLargeView ? (
        <StyledBookList type="large">
          {orderedBooks?.map((book) => (
            <BookItemLarge book={book} key={book.key} />
          ))}
        </StyledBookList>
      ) : (
        <StyledBookList type="mini">
          {orderedBooks.map((book) => (
            <BookItemMini book={book} key={book.key} />
          ))}
        </StyledBookList>
      )}

      {isTabletOrMobile && (
        <StyledBookList type="mini">
          {orderedBooks.map((book) => (
            <BookItemMini book={book} key={book.key} />
          ))}
        </StyledBookList>
      )}

      <Pagination count={count} />
    </>
  );
}

export default BookList;
