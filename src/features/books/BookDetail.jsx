import styled from "styled-components";
import { useBook } from "./useBook";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import { format, parseISO } from "date-fns";
import { formatCurrency } from "../../utils/helpers";

const StyledBookDetail = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const Img = styled.img`
  width: 45rem;
`;

const SpanPrice = styled.span`
  font-size: 2rem;
  color: var(--color-yellow-700);
`;

const MainDetail = styled.div`
  display: flex;

  position: relative;
`;

const PublicationDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  height: 55rem;
  width: 100%;
  padding: 0 5rem;
  background-color: var(--color-grey-50);

  & button {
    position: absolute;
    bottom: 0;
  }
`;

const List = styled.dl`
  /* background-color: red; */

  height: 35rem;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;

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
  margin: 3rem 0 3rem 35rem;
  padding: 0.3rem 1.6rem;

  & p {
    font-size: 1.8rem;
    margin: 3rem 0;
  }

  & p::first-letter {
    -webkit-initial-letter: 2 1;
    initial-letter: 2 1;

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
  const navigate = useNavigate();

  const { book, isLoading } = useBook();

  const image = book?.volumeInfo.imageLinks.thumbnail;
  const title = book?.volumeInfo.title;
  const subtitle = book?.volumeInfo.subtitle;
  const author = book?.volumeInfo.authors;
  const price = book?.saleInfo.listPrice?.amount * 0.011;

  const publisher = book?.volumeInfo.publisher;
  const date = book?.volumeInfo.publishedDate;
  const language = book?.volumeInfo.language;
  const pages = book?.volumeInfo.pageCount;
  const isbn_10 = book?.volumeInfo.industryIdentifiers.at(0).identifier;
  const isbn_13 = book?.volumeInfo.industryIdentifiers.at(1).identifier;
  const topics = book?.volumeInfo.categories;
  const viewability = book?.accessInfo.viewability;

  const description = book?.volumeInfo.description;

  if (isLoading) return <Spinner />;

  function handleClick() {
    navigate(`/books/${book.id}/read`);
    console.log("click");
  }

  return (
    <StyledBookDetail>
      <Heading as="h1">{title}</Heading>

      <MainDetail>
        <Img src={image} alt="img" />
        <PublicationDetail>
          <Heading as="h3">{subtitle}</Heading>
          <span>by {author}</span>
          <SpanPrice>{price > 0 ? formatCurrency(price) : "FREE"}</SpanPrice>
          <List>
            <dt>Publisher</dt>
            <dd>{publisher}</dd>

            <dt>Date</dt>
            <dd>{date && `${format(parseISO(date), "MMM d, Y")}`}</dd>

            <dt>Language</dt>
            <dd>{language}</dd>

            <dt>Pages</dt>
            <dd>{pages}</dd>

            <dt>ISBN-10</dt>
            <dd>{isbn_10}</dd>

            <dt>ISBN-13</dt>
            <dd>{isbn_13}</dd>

            <dt>Topics</dt>
            <dd>{topics}</dd>

            <dt>Viewability</dt>
            <dd>{viewability}</dd>
          </List>
          <Button onClick={handleClick}>Read Book</Button>
        </PublicationDetail>
      </MainDetail>

      <DescriptionDiv>
        <DescriptionHeader>
          <Heading as="h2">Description</Heading>
          <div>
            ❤ <span>Bookmark</span>
          </div>
        </DescriptionHeader>
        <p>{description}</p>
      </DescriptionDiv>
    </StyledBookDetail>
  );
}

export default BookDetail;
