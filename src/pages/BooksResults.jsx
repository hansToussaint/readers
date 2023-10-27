import styled from "styled-components";
import BookList from "../features/books/BookList";
import FormSearch from "../ui/FormSearch";
import ResultsBooksMenu from "../ui/ResultsBooksMenu";
import Heading from "../ui/Heading";

const SearchDiv = styled.div`
  /* background-image: linear-gradient(
    to right bottom,
    var(--color-grey-200),
    var(--color-brand-600)
  ); */
  background-color: var(--color-brand-dark);
  margin: -2.4rem -2.4rem 1.5rem;
  padding: 2rem 30%;

  @media screen and (max-width: 1150px) {
    padding: 2rem 20%;
  }
`;

const ResultsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h1 {
    align-self: flex-start !important;
  }

  /* gap: 2rem; */

  margin: 0 10%;

  @media screen and (max-width: 1150px) {
    /* background-color: red; */
    margin: 0;
  }
`;

function BooksResults() {
  return (
    <>
      <SearchDiv>
        <FormSearch />
      </SearchDiv>
      <ResultsDiv>
        <Heading as="h1">Choose and Read Your Book Now</Heading>
        <ResultsBooksMenu />
        <BookList />
      </ResultsDiv>
    </>
  );
}

export default BooksResults;
