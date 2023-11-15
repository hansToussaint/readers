import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Heading from "../../ui/Heading";
// import { format, parseISO } from "date-fns";
import { useCoverMedium } from "./useCoverBook";

const StyledBookItemMini = styled.div`
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
  width: 20.4rem;
  height: 30.6rem;

  box-shadow: var(--shadow-book);

  /* min-width: 17.5rem;
  min-height: 26.5rem; */

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

  & > :last-child {
    font-weight: 600;
  }
`;

/*eslint-disable react/prop-types*/
function BookItemMini({ book }) {
  const navigate = useNavigate();

  const bookId = book.key.replace("/works/", "");
  // console.log(bookId);

  const coverId = book?.cover_i;
  const coverMedium = useCoverMedium(coverId);

  const title = book.title;
  const author = book.author_name?.at(0);
  const date = book.first_publish_year;

  if (!coverMedium) return;

  return (
    <>
      <StyledBookItemMini>
        <Img
          src={coverMedium}
          alt="bookImage"
          onClick={() => navigate(`/book/${bookId}`)}
        />
        <InfoBookDiv>
          <Heading as="h3" onClick={() => navigate(`/book/${bookId}`)}>
            {title}
          </Heading>
          <span>
            by {author ? author : "Unknown"} {date && `, ${date}`}
          </span>
        </InfoBookDiv>
      </StyledBookItemMini>
    </>
  );
}

export default BookItemMini;
