import styled from "styled-components";
import BookItem from "./BookItem";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../services/apiBooks";
import Spinner from "../../ui/Spinner";

const StyledBookList = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 0.5fr));

  /* background-color: red; */
`;

function BookList() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks("sexe"),
  });

  const books = data?.items;

  console.log(error);

  if (isLoading) return <Spinner />;

  return (
    <StyledBookList>
      {books.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
      {/* <BookItem /> */}
    </StyledBookList>
  );
}

export default BookList;
