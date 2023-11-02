import styled from "styled-components";
import BookDetail from "../features/books/BookDetail";
import FormSearch from "../ui/FormSearch";
import ScrollToTop from "../ui/ScrollToTop";

const SearchDiv = styled.div`
  background-color: var(--color-brand-dark);
  margin: -2.4rem -2.4rem 1.5rem;
  padding: 2rem 30%;

  @media screen and (max-width: 1150px) {
    padding: 2rem 20%;
  }
`;

const InfoDiv = styled.div`
  margin: 0 8%;

  @media screen and (max-width: 1150px) {
    /* background-color: red; */
    margin: 0;
  }
`;

function BookInfo() {
  return (
    <>
      <SearchDiv>
        <FormSearch />
      </SearchDiv>
      <InfoDiv>
        <BookDetail />
      </InfoDiv>
      <ScrollToTop />
    </>
  );
}

export default BookInfo;
