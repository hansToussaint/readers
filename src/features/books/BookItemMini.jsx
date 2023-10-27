import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Heading from "../../ui/Heading";

const StyledBookItem = styled.div`
  /* width: 36rem;
  height: 40rem; */

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  margin: 0.2rem 0;

  background-color: var(--color-grey-50);

  &:hover {
    box-shadow: var(--shadow-lg);
  }

  & h3 {
    cursor: pointer;

    &:hover {
      color: var(--color-yellow-700);
    }
  }
`;

const Img = styled.img`
  display: block;
  margin: auto;
  /* width: 13rem;
  height: 19.6rem; */

  min-width: 17.5rem;
  min-height: 26.5rem;

  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-tiny);
  cursor: pointer;

  /* object-fit: cover; */
  object-position: center;
`;

const InfoBookDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  height: 100%;
  width: 100%;
  padding: 1rem;
`;

/*eslint-disable react/prop-types*/
function BookItem({ book }) {
  const navigate = useNavigate();

  const src = book.volumeInfo.imageLinks.smallThumbnail;
  const title = book.volumeInfo.title;
  const author = book.volumeInfo.authors;
  const date = book.volumeInfo.publishedDate;
  if (!src) return;

  return (
    <>
      <StyledBookItem>
        <Img
          src={src}
          alt="bookImage"
          onClick={() => navigate(`/book/${book.id}`)}
        />
        <InfoBookDiv>
          <Heading as="h3" onClick={() => navigate(`/book/${book.id}`)}>
            {title}
          </Heading>
          <span>
            by {author ? author : "Unknown"} {date && `| ${date}`}
          </span>
        </InfoBookDiv>
      </StyledBookItem>
    </>
  );
}

export default BookItem;
