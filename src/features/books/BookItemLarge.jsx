import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useNavigate } from "react-router-dom";

const StyledBookItemLarge = styled.div`
  width: 100%;
  /* width: 100rem; */
  height: 35rem;
  display: flex;

  border-bottom: 4.5px solid var(--color-grey-300);

  &:hover {
    box-shadow: var(--shadow-md);
    background-color: var(--color-grey-50);
  }

  & h2 {
    cursor: pointer;

    &:hover {
      color: var(--color-yellow-700);
    }
  }
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  /* margin: auto; */
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-tiny);
  cursor: pointer;

  object-fit: cover;
  object-position: center;
`;

const InfoBookDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  height: 100%;
  width: 100%;
  padding: 1rem;
  background-color: var(--color-grey-100);
`;

const DivAbout = styled.div`
  /* background: red; */
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  /* margin: 1rem 0; */
  & span {
    font-weight: 100;
    font-size: 1.65rem;
  }
`;

/*eslint-disable react/prop-types*/
function BookItem({ book }) {
  const navigate = useNavigate();

  const src = book.volumeInfo.imageLinks.thumbnail;
  const title = book.volumeInfo.title;
  const subtitle = book.volumeInfo.subtitle;
  const author = book.volumeInfo.authors;
  const date = book.volumeInfo.publishedDate;
  const summary = book.searchInfo?.textSnippet
    .replaceAll("&#39;", "'")
    .replaceAll(".", " ")
    .replaceAll("<b>", "")
    .replaceAll("</b>", "");

  if (!src) return;

  return (
    <StyledBookItemLarge>
      <Img
        src={src}
        alt="bookImage"
        onClick={() => navigate(`/book/${book.id}`)}
      />
      <InfoBookDiv>
        <Heading as="h2" onClick={() => navigate(`/book/${book.id}`)}>
          {title}
        </Heading>
        <span>
          by {author} | {date}
        </span>
        <Heading as="h3">{subtitle}</Heading>
        <DivAbout>
          {book.searchInfo && (
            <Heading as="h3">
              Book Summary: <span>{summary}</span>
            </Heading>
          )}
        </DivAbout>
        {/* <Link>more... </Link> */}
      </InfoBookDiv>
    </StyledBookItemLarge>
  );
}

export default BookItem;
