import styled from "styled-components";
import { useBook } from "./useBook";
import Spinner from "../../ui/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
// import { format, parseISO } from "date-fns";
import { useCoverLarge } from "./useCoverBook";
import { useOrderedBooks } from "./useOrderedBooks";
import { useUser } from "../authentication/useUser";
import Empty from "../../ui/Empty";
import { getLanguage } from "../../utils/helpers";
import StarsComponent from "../../ui/StarsComponent";

const StyledBookDetail = styled.div`
  display: grid;
  grid-template-columns: 40rem 1fr;
  grid-template-rows: auto auto;

  gap: 2.5rem;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 45rem;

  box-shadow: var(--shadow-md);

  @media screen and (max-width: 900px) {
    width: auto;
  }
`;

const MainDetail = styled.div`
  display: flex;

  /* position: relative; */

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

const PublicationDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* height: 55rem;
  width: 100%;
  padding: 0 5rem; */
  background-color: var(--color-grey-50);

  & button {
    /* position: absolute;
    bottom: 0; */

    width: max-content;
  }
`;

const List = styled.dl`
  /* background-color: red; */

  /* height: 35rem; */
  display: flex;
  flex-wrap: wrap;
  /* overflow-y: scroll; */

  & dt {
    display: block;
    width: 50%;

    font-size: 1.7rem;
    font-weight: 500;
    color: var(--color-grey-500);
  }

  & dd {
    width: 50%;
    color: var(--color-grey-900);
  }

  & dt,
  dd {
    border-bottom: 1px solid var(--color-grey-200);
    padding: 1.2rem 0;
  }

  &::-webkit-scrollbar {
    width: 1.2rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-silver-100);
    border-radius: 2rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-brand-dark);
    border-radius: 2rem;
    /* border: 2px solid var(--color-grey-400); */
  }
`;

const DescriptionDiv = styled.div`
  height: max-content;
  grid-column: 2 / -1;

  /* margin: 3rem 0 3rem 35rem; */
  padding: 0.3rem 1.6rem;

  & p {
    font-size: 1.8rem;
    margin: 3rem 0;
  }

  & p::first-letter {
    margin-left: 3rem;

    color: var(--color-yellow-700);
  }
`;

const DescriptionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function BookDetail() {
  const { isAuthenticated } = useUser();

  const navigate = useNavigate();
  const { bookId } = useParams();

  //
  const { data } = useOrderedBooks(bookId);
  const resultSearchSingleBook = data?.docs.at(0);

  const readId = resultSearchSingleBook?.lending_identifier_s;
  const author = resultSearchSingleBook?.author_name;
  const date = resultSearchSingleBook?.first_publish_year;
  const publisher = resultSearchSingleBook?.publisher?.slice(0, 5).join("/ ");
  const language = resultSearchSingleBook?.language
    .map((lang) => getLanguage(lang))
    .join("/ ");
  // const pages = resultSearchSingleBook?.
  const isbn = resultSearchSingleBook?.isbn?.at(0);

  const average = resultSearchSingleBook?.ratings_average;
  const coverId = resultSearchSingleBook?.cover_i;

  //
  const { book, isLoading } = useBook();

  const coverLarge = useCoverLarge(coverId);

  const title = book?.title;
  // const isbn_13 = book?.volumeInfo.industryIdentifiers.at(1).identifier;
  const topics = book?.subjects?.join(", ");

  const description =
    typeof book?.description === "object"
      ? book?.description?.value
      : book?.description;

  function handleClick() {
    navigate(`/book/${readId}/read`);
    console.log("click");
  }

  if (isLoading) return <Spinner />;

  return (
    <StyledBookDetail>
      <Img src={coverLarge} alt="img" />

      <MainDetail>
        <PublicationDetail>
          <Heading as="h1">{title}</Heading>
          <span>by {author}</span>
          <StarsComponent starAverage={average} />
          {/* <SpanPrice>{price > 0 ? formatCurrency(price) : "FREE"}</SpanPrice> */}
          <List>
            <dt>Publisher</dt>
            <dd>{publisher}</dd>

            <dt>First publication year</dt>
            <dd>{date}</dd>

            <dt>Language</dt>
            <dd>{language}</dd>

            {/* <dt>Pages</dt>
            <dd>{pages}</dd> */}

            <dt>ISBN</dt>
            <dd>{isbn}</dd>

            {/* <dt>ISBN-13</dt> */}
            {/* <dd>{isbn_13}</dd> */}

            <dt>Topics</dt>
            <dd>{topics}</dd>
          </List>
          <Button onClick={handleClick}>
            {isAuthenticated ? "Read & Listen" : "Sign in to read or listen"}
          </Button>
        </PublicationDetail>
      </MainDetail>

      <DescriptionDiv>
        <DescriptionHeader>
          <Heading as="h2">Description</Heading>
          <div>
            ❤ <span>Bookmark</span>
          </div>
        </DescriptionHeader>
        {description ? (
          <p>{description}</p>
        ) : (
          <Empty resourceName="description" />
        )}
      </DescriptionDiv>
    </StyledBookDetail>
  );
}

export default BookDetail;
