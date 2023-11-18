import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Heading from "../../ui/Heading";
// import { format, parseISO } from "date-fns";
import { useCoverMedium } from "./useCoverBook";
import { useState } from "react";
import StarsComponent from "../../ui/StarsComponent";

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

  border: 1px solid var(--color-grey-50);
  border-radius: var(--border-radius-tiny);

  &:hover {
    box-shadow: var(--shadow-sm);
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
  width: 25rem;
  height: 30.6rem;

  box-shadow: var(--shadow-book);

  transition: all 0.3s;

  /* min-width: 17.5rem;
  min-height: 26.5rem; */

  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-tiny);
  cursor: pointer;

  object-position: center;

  &:hover {
    filter: blur(0.6px);
  }
`;

const InfoBookDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;

  text-align: center;

  height: 100%;
  width: 100%;
  padding: 1rem;

  & > :last-child {
    font-weight: 600;
  }
`;

/*eslint-disable react/prop-types*/
function BookItemMini({ book }) {
  // For hover effect
  const [showStars, setShowStars] = useState(false);

  const navigate = useNavigate();

  const bookId = book.key.replace("/works/", "");
  // console.log(bookId);

  const average = book?.ratings_average;

  const coverId = book?.cover_i;
  const coverMedium = useCoverMedium(coverId);

  const title = book.title;
  const author = book.author_name?.at(0);
  const date = book.first_publish_year;

  if (!coverMedium) return;

  return (
    <>
      <StyledBookItemMini
        onMouseEnter={() => setShowStars(true)}
        onMouseLeave={() => setShowStars(false)}
      >
        <Img
          src={coverMedium}
          alt="bookImage"
          onClick={() => navigate(`/book/${bookId}`)}
        />
        <InfoBookDiv>
          <Heading as="h3" onClick={() => navigate(`/book/${bookId}`)}>
            {title}
          </Heading>
          {showStars && average ? (
            <StarsComponent starAverage={average} />
          ) : (
            <>
              <span>by {author ? author : "Unknown"}</span>{" "}
              <span>{date && date}</span>
            </>
          )}
        </InfoBookDiv>
      </StyledBookItemMini>
    </>
  );
}

export default BookItemMini;
