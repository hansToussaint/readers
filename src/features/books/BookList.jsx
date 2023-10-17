import styled from "styled-components";
import BookItem from "./BookItem";
import Spinner from "../../ui/Spinner";
import { useBooks } from "./useBooks";

const StyledBookList = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 0.5fr));

  /* background-color: red; */
`;

function BookList() {
  const { isLoading, data, error } = useBooks();

  const books = data?.items;

  console.log(error);

  if (isLoading) return <Spinner />;

  return (
    <StyledBookList>
      {books.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </StyledBookList>
  );
}

export default BookList;
